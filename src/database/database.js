const mysql = require('mysql2/promise')

class Database {
  static async createConnection () {
    this.connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      port: process.env.DB_PORT,
      multipleStatements: true
    })
  }

  static async query (sql) {
    return await this.connection.execute(sql)
  }

  static async close () {
    return await this.connection.end()
  }
}

module.exports = Database
