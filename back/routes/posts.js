const express = require('express')
const { Post, User, Image, Comment } = require('../models')
const { Op } = require('sequelize')

const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const where = {}
    // 초기 로딩이 아닐 때
    if (parseInt(req.query.lastId, 10)) {
      //lastId보다 낮은 번호들을 불러온다.
      where.id = { [Op.lt]: parseInt(req.query.lastId, 10) }
    } // 21 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1
    const posts = await Post.findAll({
      where, // 초기로딩
      // 10개씩 , 마지막ID기준.
      //   where: { id: lastId },
      limit: 10,
      order: [
        ['createdAt', 'DESC'], //게시글생성일
        [Comment, 'createdAt', 'DESC'], // 댓글생성일
      ],
      include: [
        {
          //작성자정보
          model: User,
          attributes: ['id', 'nickname'],
        },
        {
          model: Image,
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
