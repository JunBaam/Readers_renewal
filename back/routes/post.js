const express = require('express')
const { Post, Comment, Image, User } = require('../models')

const router = express.Router()

// 게시물추가 /post
router.post('/', async (req, res, next) => {
  try {
    const post = await Post.create({
      UserId: req.user.id, // 작성자 id
      title: req.body.title,
      content: req.body.content,
      bookinfo: req.body.bookinfo,
      author: req.body.author,
      publisher: req.body.publisher,
      price: req.body.price,
      date: req.body.date,
      category: req.body.category,
      rating: req.body.rating,
      image_url: req.body.image_url,
    })

    const fullPost = await Post.findOne({
      where: { id: post.id },
      include: [
        {
          model: Comment,
          include: [
            {
              model: User, // 댓글 작성자
              attributes: ['id', 'nickname'],
            },
          ],
        },
        {
          model: User, // 게시글 작성자
          attributes: ['id', 'nickname'],
        },
        {
          model: User, // 좋아요 누른 사람
          as: 'Likers',
          attributes: ['id'],
        },
      ],
    })
    res.status(201).json(fullPost)
  } catch (error) {
    console.error('에러', error)
    next(error)
  }
})

module.exports = router
