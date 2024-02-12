const express = require('express')
const userController = require('../controllers/userController')

const routers = express.Router()
routers.get('/', userController.getAllUsers)
routers.post('/register', userController.register)
routers.post('/login', userController.login)
routers.put('/level', userController.updateLevel)
routers.put('/exp', userController.addExp)
routers.put('/:id', userController.updateDataUsers)
routers.get('/:id', userController.getUserById)
module.exports = routers
