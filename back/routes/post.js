const express = require('express')
const { Post, Comment, Image, User } = require('../models')

const router = express.Router()

// 게시글 하나 불러오기
// GET/ post/:postId
router.get('/:postId', async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId },
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
              order: [['createdAt', 'DESC']],
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
    res.status(200).json(post)
  } catch (error) {
    console.error(error)
    next(error)
  }
})

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

// PATCH /post/:postId/like
router.patch('/:postId/like', async (req, res, next) => {
  try {
    const post = await Post.findOne({ where: { id: req.params.postId } })
    if (!post) {
      return res.status(403).send('게시글이 존재하지 않습니다.')
    }
    // addLikers : 관계메서드
    await post.addLikers(req.user.id)
    res.json({ PostId: post.id, UserId: req.user.id })
  } catch (error) {
    console.error(error)
    next(error)
  }
})

// DELETE /post/:postId/like
router.delete('/:postId/like', async (req, res, next) => {
  try {
    const post = await Post.findOne({ where: { id: req.params.postId } })
    if (!post) {
      return res.status(403).send('게시글이 존재하지 않습니다.')
    }
    await post.removeLikers(req.user.id)
    res.json({ PostId: post.id, UserId: req.user.id })
  } catch (error) {
    console.error(error)
    next(error)
  }
})

// 댓글추가
// POST /post/:postId/comment
router.post('/:postId/comment', async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId },
    })
    if (!post) {
      return res.status(403).send('존재하지 않는 게시글입니다.')
    }
    // req.params 는 문자열로 받아온다 !!!!!
    //  int로 바꿔줄것
    const comment = await Comment.create({
      content: req.body.content,
      PostId: parseInt(req.params.postId, 10),
      UserId: req.user.id,
    })
    const fullComment = await Comment.findOne({
      where: { id: comment.id },
      include: [
        {
          model: User,
          attributes: ['id', 'nickname'],
        },
      ],
    })
    res.status(201).json(fullComment)
  } catch (error) {
    console.error(error)
    next(error)
  }
})

module.exports = router
