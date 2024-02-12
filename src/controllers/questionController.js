const questionServices = require('../services/questionServices')
const Tokenization = require('../utils/jwtToken/tokenization')
const Response = require('../utils/response/response')
const PayloadValidator = require('../utils/validator')

class questionController {
  static async getAllQuestions (req, res) {
    const token = req.headers.authorization

    try {
      // Check if token exist
      if (!token) throw new Error('Token is required')

      // validate token
      const authorization = Tokenization.verifyToken(token)

      if (!authorization) throw new Error('Invalid token')

      const questions = await questionServices.getAllQuestions()

      if (!questions) throw new Error('Error while getting questions')

      const response = Response.successResponse(200, 'Questions retrieved successfully', questions)

      return res.status(200).send(response)
    } catch (err) {
      const message = err.message.replace(/['"]+/g, '')

      const response = Response.badResponse(400, message)

      return res.status(400).send(response)
    }
  }

  static async getQuestionById (req, res) {
    const token = req.headers.authorization

    try {
      // Check if token exist
      if (!token) throw new Error('Token is required')

      // validate token
      const authorization = Tokenization.verifyToken(token)

      if (!authorization) throw new Error('Invalid token')

      // validate parameter
      PayloadValidator.validateQuestionID(req.params.id)

      const question = await questionServices.getQuestionById(req.params.id)

      if (!question) throw new Error('Error while getting questions')

      const response = Response.successResponse(200, 'Questions retrieved successfully', question)

      return res.status(200).send(response)
    } catch (err) {
      const message = err.message.replace(/['"]+/g, '')
      const response = Response.badResponse(400, message)

      return res.status(400).send(response)
    }
  }

  static async getQuestionByLevel (req, res) {
    const token = req.headers.authorization
    try {
      // Check if token exist
      if (!token) throw new Error('Token is required')

      // validate token
      const authorization = Tokenization.verifyToken(token)

      if (!authorization) throw new Error('Invalid token')

      // validate parameter
      PayloadValidator.validateLevelID(req.params.level)

      const questions = await questionServices.getQuestionByLevel(req.params.level)

      if (!questions) throw new Error('Error while getting questions')

      const response = Response.successResponse(200, 'Questions retrieved successfully', questions)

      return res.status(200).send(response)
    } catch (err) {
      const message = err.message.replace(/['"]+/g, '')
      const response = Response.badResponse(400, message)
      return res.status(400).send(response)
    }
  }

  static async getQuestionByLevelWithLimit (req, res) {
    const token = req.headers.authorization
    try {
      // Check if token exist
      if (!token) throw new Error('Token is required')

      // validate token
      const authorization = Tokenization.verifyToken(token)

      if (!authorization) throw new Error('Invalid token')

      // validate parameter
      PayloadValidator.validateLevelWithLimit(req.params)

      const questions = await questionServices.getQuestionByLevelWithLimit(req.params.level, req.params.limit)

      if (!questions) throw new Error('Error while getting questions')

      const response = Response.successResponse(200, 'Questions retrieved successfully', questions)

      return res.status(200).send(response)
    } catch (err) {
      const message = err.message.replace(/['"]+/g, '')
      const response = Response.badResponse(400, message)
      return res.status(400).send(response)
    }
  }

  static async insertQuestion (req, res) {
    const payload = req.body
    try {
      // validate parameter
      PayloadValidator.validateQuestionData(payload)

      const insertQuestion = await questionServices.insertQuestion(payload.question_type, payload.question_level, payload.question, payload.answer)

      if (!insertQuestion) throw new Error('Error while creating question')

      const response = Response.successResponse(201, 'Question created successfully', null)

      return res.status(201).send(response)
    } catch (err) {
      const message = err.message.replace(/['"]+/g, '')
      const response = Response.badResponse(message, 400)

      return res.status(400).send(response)
    }
  }
}

module.exports = questionController
