const express = require('express')
const createTask= require('../controllers/createTask')
const getTasks= require('../controllers/getTasks')
const removeTask = require("../controllers/removeTask");
const updateTask= require('../controllers/updateTask')
// const removeTask= require('../controllers/removeTask')
// const removeALLTasks= require('../controllers/removeALLTasks')


const router = express.Router()

router.get('/Todolist/:id/getTasks', getTasks)

router.post('/Todolist/:id/addTask', createTask)

router.put('/Todolist/:id/updateTask',updateTask)

router.delete('/Todolist/:id/removeTask',removeTask)

module.exports = router
