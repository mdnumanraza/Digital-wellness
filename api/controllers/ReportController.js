const Reports = require('../models/reportModel')
const mongoose = require('mongoose')

// get all workouts
const getReports = async (req, res) => {
  // const user_id = req.user._id

  const ReportData = await Reports.find({}).sort({createdAt: -1})

  res.status(200).json(ReportData)
}

// get a single workout
const getReport = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such post'})
  }

  const ReportData = await Reports.findById(id)

  if (!ReportData) {
    return res.status(404).json({error: 'No such posts'})
  }
  
  res.status(200).json(ReportData)
}


// create new workout
const createReport = async (req, res) => {
  const {rname, descrip,email,ss} = req.body

  let emptyFields = []

  if(!rname) {
    emptyFields.push('rname')
  }
  if(!descrip) {
    emptyFields.push('descrip')
  }
  if(!email) {
    emptyFields.push('email')
  }
  if(emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
  }

  // add doc to db
  try {
    // const user_id = req.user._id
    const ReportData = await Reports.create({rname, descrip,email,ss})
    res.status(200).json(ReportData)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// delete a workout
const deleteReport = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such Post'})
  }

  const ReportData = await Reports.findOneAndDelete({_id: id})

  if (!ReportData) {
    return res.status(400).json({error: 'No such posts'})
  }

  res.status(200).json(ReportData)
}

// update a workout
const updateReport = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such post'})
  }

  const ReportData = await Reports.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!ReportData) {
    return res.status(400).json({error: 'No such post'})
  }

  res.status(200).json(ReportData)
}


module.exports = {
  getReport,
  getReports,
  createReport,
  deleteReport,
  updateReport
}