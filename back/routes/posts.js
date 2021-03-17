const express = require('express')
const { Post, User, Comment } = require('../models')
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

module.exports = router
