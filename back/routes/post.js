const express = require('express')
const router = express.Router()

// POST /post
router.post('./post', (req, res) => {
  res.json({ id: 1, content: 'hi' })
})

// DELETE /post
router.delete('/post', (req, res) => {
  res.json({ id: 1 })
})
module.exports = router
