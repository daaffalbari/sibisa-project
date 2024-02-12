const express = require('express')
const cors = require('cors')
const multer = require('multer')

// Load Environment Variables
require('dotenv').config()

const app = express()
app.use(cors())
const { questionRouters } = require('./src/routers')
const { userRouters } = require('./src/routers')
const { lessonRouters } = require('./src/routers')

// Swagger
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./src/swagger/swagger.json')
const UploadFiles = require('./src/cloud-storage/uploadFile')
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
//  for body parser
app.use(express.json({ limit: '20mb' }))
app.use(express.urlencoded({ extended: false, limit: '20mb' }))

app.use(multer({ storage: UploadFiles.fileStorage, fileFilter: UploadFiles.fileFilter }).single('image'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/v1/questions', questionRouters)
app.use('/api/v1/user', userRouters)
app.use('/api/v1/lessons', lessonRouters)

app.listen(process.env.PORT || 5000, () => console.log('connection success'))
