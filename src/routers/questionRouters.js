const express = require('express')
const questionController = require('../controllers/questionController')

const routers = express.Router()
routers.get('/', questionController.getAllQuestions)
routers.get('/:id', questionController.getQuestionById)
routers.get('/level/:level', questionController.getQuestionByLevel)
routers.get('/level/:level/limit/:limit', questionController.getQuestionByLevelWithLimit)
routers.post('/create', questionController.insertQuestion)

module.exports = routers
