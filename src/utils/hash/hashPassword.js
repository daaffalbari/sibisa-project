const bcrypt = require('bcrypt')
const saltRounds = 10

class HashPassword {
  static hashPassword (password) {
    return bcrypt.hashSync(password, saltRounds)
  }

  static checkPassword (password, hash) {
    return bcrypt.compareSync(password, hash)
  }
}

module.exports = HashPassword
