/// handles intial get request for the homepage
// handles POST method request for adding a new task

const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

// add specific routes for specific tasks
router.get('/', homeController.getIndex)
router.post('/', homeController.createTask)


module.exports = router