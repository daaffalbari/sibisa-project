const jwt = require('jsonwebtoken')

class Tokenization {
  static makeToken (payload) {
    // Create jwt token
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' })
  }

  static verifyToken (token) {
    const jwtToken = token.replace('Bearer ', '')
    // Verify jwt token
    let auth = ''
    try {
      auth = jwt.verify(jwtToken, process.env.JWT_SECRET)
    } catch (error) {
      return false
    }

    return auth
  }
}

module.exports = Tokenization
