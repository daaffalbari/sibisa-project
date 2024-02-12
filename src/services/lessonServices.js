const Database = require('../database/database')

class lessonServices {
  static async getAllLessons () {
    await Database.createConnection()
    const query = 'SELECT * FROM lessons'
    const lessons = await Database.query(query)
    await Database.close()
    return lessons[0]
  }

  static async getLessonByID (id) {
    await Database.createConnection()
    const query = {
      sql: 'SELECT * FROM lessons WHERE id = ?',
      values: [id]
    }
    const lesson = await Database.query(query)
    await Database.close()
    return lesson[0]
  }

  static async getLessonByLevel (level) {
    await Database.createConnection()
    const query = {
      sql: 'SELECT * FROM lessons WHERE level = ?',
      values: [level]
    }
    const lesson = await Database.query(query)
    await Database.close()
    return lesson[0]
  }

  static async insertLesson (title, description, level) {
    await Database.createConnection()
    const query = {
      sql: 'INSERT INTO lessons (title, description, level) VALUES (?, ?, ?)',
      values: [title, description, level]
    }
    const result = await Database.query(query)
    await Database.close()
    return result
  }
}

module.exports = lessonServices
