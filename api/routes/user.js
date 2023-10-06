const express = require('express')

// controller functions
const { 
    loginUser, 
    signupUser ,
    getUser, 
    updateUser,
    getAllUsers, 
    updateCoin,
    deleteUser
} = require('../controllers/userController')

const router = express.Router()

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

// update route
router.put('/update/:id', updateUser)

// update coins route
router.put('/updatecoin/:id', updateCoin)

// get a single user route
router.get('/:id', getUser)

// delete a single user route
router.delete('/:id', deleteUser)

// get all users route
router.get('/', getAllUsers)

module.exports = router