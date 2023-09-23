const express = require('express')
const {
  getPost,
  getPosts,
  createPost,
  deletePost,
  updatePost
} = require('../controllers/PostController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()


// router.use(requireAuth)

// GET all post
router.get('/', getPosts)

//GET a single 
router.get('/:id', getPost)

// POST a new
router.post('/', createPost)

// DELETE 
router.delete('/:id', deletePost)

// UPDATE 
router.patch('/:id', updatePost)


module.exports = router