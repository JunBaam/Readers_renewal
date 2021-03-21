const express = require('express')
const { Post, User, Comment, Sequelize } = require('../models')
const { Op } = require('sequelize')

const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const where = {}
    // 초기 로딩이 아닐 때
    if (parseInt(req.query.lastId, 10)) {
      // [Op.lt] : lastId보다 낮은 번호들을 불러온다.
      where.id = { [Op.lt]: parseInt(req.query.lastId, 10) }
    }
    const posts = await Post.findAll({
      where, // 초기로딩
      limit: 10,
      order: [
        ['createdAt', 'DESC'], //게시글생성일
        [Comment, 'createdAt', 'DESC'], // 댓글생성일
      ],
      include: [
        {
          model: User,
          attributes: ['id', 'nickname'],
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ['id', 'nickname'],
            },
          ],
        },
        {
          model: User, // 좋아요 누른 사람
          as: 'Likers',
          attributes: ['id'],
        },
      ],
    })
    res.status(200).json(posts)
  } catch (error) {
    console.error(error)
    next(error)
  }
})

// 좋아요 갯수
router.get('/likecount', async (req, res, next) => {
  // GET /posts
  try {
    const prePost = await Post.findAll({
      group: ['id'],
      attributes: [
        'UserId',
        [Sequelize.literal('count(*)'), 'LikeCount'],
        'title',
        'content',
        'rating',
        'category',
        'image_url',
      ],
      order: [[Sequelize.literal('LikeCount'), 'DESC']],
      include: [
        {
          required: true,
          model: User,
          as: 'Likers',
          attributes: ['id'],
        },
      ],
    })

    res.status(200).json(prePost)
  } catch (error) {
    console.error(error)
    next(error)
  }
})

// 좋아요 게시글만 불러오기
router.get('/likereview', async (req, res, next) => {
  try {
    const like = await Post.findAll({
      include: [{ model: User, as: 'Likers', where: { id: req.user.id } }],
    })
    res.status(200).json(like)
  } catch (error) {
    console.error(error)
    next(error)
  }
})

module.exports = router
