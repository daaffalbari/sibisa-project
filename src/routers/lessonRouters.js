const express = require('express')
const lessonController = require('../controllers/lessonController')

const routers = express.Router()
routers.get('/', lessonController.getAllLessons)
routers.get('/:id', lessonController.getLessonByID)
routers.get('/level/:level', lessonController.getLessonByLevel)
routers.post('/create', lessonController.insertLesson)

module.exports = routers
