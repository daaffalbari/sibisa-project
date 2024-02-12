const lessonServices = require('../services/lessonServices')
const Tokenization = require('../utils/jwtToken/tokenization')
const Response = require('../utils/response/response')
const PayloadValidator = require('../utils/validator')

class lessonController {
  static async getAllLessons (req, res) {
    const token = req.headers.authorization

    try {
      // Check if token exist
      if (!token) throw new Error('Token is required')

      // validate token
      const authorization = Tokenization.verifyToken(token)

      if (!authorization) throw new Error('Invalid token')

      const lessons = await lessonServices.getAllLessons()

      if (!lessons) throw new Error('Error while getting lessons')

      const response = Response.successResponse(200, 'Lessons retrieved successfully', lessons)

      return res.status(200).send(response)
    } catch (err) {
      const message = err.message.replace(/['"]+/g, '')

      const response = Response.badResponse(400, message)

      return res.status(400).send(response)
    }
  }

  static async getLessonByID (req, res) {
    const token = req.headers.authorization

    try {
      // Check if token exist
      if (!token) throw new Error('Token is required')

      // validate token
      const authorization = Tokenization.verifyToken(token)

      if (!authorization) throw new Error('Invalid token')

      // validate parameter
      PayloadValidator.validateLessonID(req.params.id)

      const lesson = await lessonServices.getLessonByID(req.params.id)

      if (!lesson) throw new Error('Error while getting lessons')

      const response = Response.successResponse(200, 'Lessons retrieved successfully', lesson)

      return res.status(200).send(response)
    } catch (err) {
      const message = err.message.replace(/['"]+/g, '')
      const response = Response.badResponse(400, message)

      return res.status(400).send(response)
    }
  }

  static async getLessonByLevel (req, res) {
    const token = req.headers.authorization

    try {
      // Check if token exist
      if (!token) throw new Error('Token is required')

      // validate token
      const authorization = Tokenization.verifyToken(token)

      if (!authorization) throw new Error('Invalid token')

      // validate parameter
      PayloadValidator.validateLevelID(req.params.level)

      const lesson = await lessonServices.getLessonByLevel(req.params.level)

      if (!lesson) throw new Error('Error while getting lessons')

      const response = Response.successResponse(200, 'Lessons retrieved successfully', lesson)

      return res.status(200).send(response)
    } catch (err) {
      const message = err.message.replace(/['"]+/g, '')
      const response = Response.badResponse(400, message)

      return res.status(400).send(response)
    }
  }

  static async insertLesson (req, res) {
    const payload = req.body
    try {
      // validate payload
      PayloadValidator.validateLessonData(payload)

      const lesson = await lessonServices.insertLesson(payload.title, payload.description, payload.level)

      if (!lesson) throw new Error('Error while creating lesson')

      const response = Response.successResponse(201, 'Lesson created successfully', null)

      return res.status(201).send(response)
    } catch (err) {
      const message = err.message.replace(/['"]+/g, '')
      const response = Response.badResponse(400, message)

      return res.status(400).send(response)
    }
  }
}

module.exports = lessonController
