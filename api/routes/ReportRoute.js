const express = require('express')
const {
  getReport,
  getReports,
  createReport,
  deleteReport,
  updateReport
} = require('../controllers/ReportController')
// const requireAuth = require('../middleware/requireAuth')

const router = express.Router()


// router.use(requireAuth)

// GET all post
router.get('/', getReports)

//GET a single 
router.get('/:id', getReport)

// POST a new
router.post('/', createReport)

// DELETE 
router.delete('/:id', deleteReport)

// UPDATE 
router.patch('/:id', updateReport)


module.exports = router