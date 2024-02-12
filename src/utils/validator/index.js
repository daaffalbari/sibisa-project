const {
  UserRegisterSchema,
  UserLoginSchema,
  QuestionIDSchema,
  LevelIDSchema,
  LessonIDSchema,
  UserIDSchema,
  UserUpdateSchema,
  LevelUserSchema,
  LevelExpSchema,
  CreateQuestionSchema,
  CreateLessonSchema,
  LevelWithLimitSchema
} = require('./schema')

const PayloadValidator = {
  validateUserLogin: (payload) => {
    const validationResult = UserLoginSchema.validate(payload)
    if (validationResult.error) {
      throw new Error(validationResult.error.details[0].message)
    }

    return true
  },
  validateUserRegister: (payload) => {
    const validationResult = UserRegisterSchema.validate(payload)
    if (validationResult.error) {
      throw new Error(validationResult.error.details[0].message)
    }

    return true
  },
  validateQuestionID: (payload) => {
    const validationResult = QuestionIDSchema.validate(payload)
    if (validationResult.error) {
      throw new Error(validationResult.error.details[0].message)
    }

    return true
  },
  validateLevelID: (payload) => {
    const validationResult = LevelIDSchema.validate(payload)
    if (validationResult.error) {
      throw new Error(validationResult.error.details[0].message)
    }

    return true
  },
  validateLessonID: (payload) => {
    const validationResult = LessonIDSchema.validate(payload)
    if (validationResult.error) {
      throw new Error(validationResult.error.details[0].message)
    }

    return true
  },

  validateUserLevel: (payload) => {
    const validationResult = LevelUserSchema.validate(payload)
    if (validationResult.error) {
      throw new Error(validationResult.error.details[0].message)
    }

    return true
  },
  validateUserID: (payload) => {
    const validationResult = UserIDSchema.validate(payload)
    if (validationResult.error) {
      throw new Error(validationResult.error.details[0].message)
    }

    return true
  },
  validateUserUpdate: (payload) => {
    const validationResult = UserUpdateSchema.validate(payload)
    if (validationResult.error) {
      throw new Error(validationResult.error.details[0].message)
    }

    return true
  },
  validateUserExp: (payload) => {
    const validationResult = LevelExpSchema.validate(payload)
    if (validationResult.error) {
      throw new Error(validationResult.error.details[0].message)
    }

    return true
  },
  validateQuestionData: (payload) => {
    const validationResult = CreateQuestionSchema.validate(payload)
    if (validationResult.error) {
      throw new Error(validationResult.error.details[0].message)
    }

    return true
  },
  validateLessonData: (payload) => {
    const validationResult = CreateLessonSchema.validate(payload)
    if (validationResult.error) {
      throw new Error(validationResult.error.details[0].message)
    }

    return true
  },
  validateLevelWithLimit: (payload) => {
    const validationResult = LevelWithLimitSchema.validate(payload)
    if (validationResult.error) {
      throw new Error(validationResult.error.details[0].message)
    }

    return true
  }
}

module.exports = PayloadValidator
