const multer = require('multer')
const { bucket } = require('./storage')

class UploadFiles {
  static fileStorage = multer.memoryStorage()

  static fileFilter = (req, file, cb) => {
    if (
      file.mimetype === 'image/png' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/jpeg'
    ) {
      cb(null, true)
    } else {
      cb(null, false)
    }
  }

  static async uploadToGoogleCloudStorage (image, newFileName) {
    const blob = bucket.file(newFileName)
    const blobStream = blob.createWriteStream({
      resumable: false,
      gzip: true
    })

    blobStream.on('error', (err) => {
      console.log(err)
    })
    blobStream.on('finish', () => {
      const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`
      console.log(publicUrl)
    })
    blobStream.end(image.buffer)
  }
}

module.exports = UploadFiles
