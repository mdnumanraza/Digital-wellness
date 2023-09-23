const Posts = require('../models/PostModel')
const mongoose = require('mongoose')

// get all workouts
const getPosts = async (req, res) => {
  // const user_id = req.user._id

  const PostData = await Posts.find({}).sort({createdAt: -1})

  res.status(200).json(PostData)
}

// get a single workout
const getPost = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such post'})
  }

  const postData = await Posts.findById(id)

  if (!postData) {
    return res.status(404).json({error: 'No such posts'})
  }
  
  res.status(200).json(postData)
}


// create new workout
const createPost = async (req, res) => {
  const {img, title, description,uname,profile} = req.body

  let emptyFields = []

  if(!img) {
    emptyFields.push('img')
  }
  if(!title) {
    emptyFields.push('title')
  }
  if(!description) {
    emptyFields.push('description')
  }
  if(emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
  }

  // add doc to db
  try {
    // const user_id = req.user._id
    const postData = await Posts.create({img, title, description,uname,profile})
    res.status(200).json(postData)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// delete a workout
const deletePost = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such Post'})
  }

  const postData = await Posts.findOneAndDelete({_id: id})

  if (!postData) {
    return res.status(400).json({error: 'No such posts'})
  }

  res.status(200).json(postData)
}

// update a workout
const updatePost = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such post'})
  }

  const postData = await Posts.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!postData) {
    return res.status(400).json({error: 'No such post'})
  }

  res.status(200).json(postData)
}


module.exports = {
  getPost,
  getPosts,
  createPost,
  deletePost,
  updatePost
}