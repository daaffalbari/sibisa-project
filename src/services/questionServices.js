const Database = require('../database/database')

class questionServices {
  static async getAllQuestions () {
    await Database.createConnection()
    const query = 'SELECT * FROM questions'
    const questions = await Database.query(query)
    await Database.close()
    return questions[0]
  }

  static async getQuestionById (id) {
    await Database.createConnection()
    const query = {
      sql: 'SELECT * FROM questions WHERE id = ?',
      values: [id]
    }
    const question = await Database.query(query)
    await Database.close()
    return question[0]
  }

  static async getQuestionByLevel (level) {
    await Database.createConnection()
    const query = {
      sql: 'SELECT * FROM questions WHERE question_level = ? ORDER BY RAND()',
      values: [level]
    }
    const question = await Database.query(query)
    await Database.close()
    return question[0]
  }

  static async getQuestionByLevelWithLimit (level, limit) {
    await Database.createConnection()
    const query = {
      sql: 'SELECT * FROM questions WHERE question_level = ? ORDER BY RAND() LIMIT ?',
      values: [level, limit]
    }
    const question = await Database.query(query)
    await Database.close()
    return question[0]
  }

  static async insertQuestion (questionType, questionLlevel, question, answer) {
    await Database.createConnection()
    const query = {
      sql: 'INSERT INTO questions (question_type, question_level, question, answer) VALUES (?, ?, ?, ?)',
      values: [questionType, questionLlevel, question, answer]
    }
    const result = await Database.query(query)
    await Database.close()
    return result
  }
}

module.exports = questionServices
