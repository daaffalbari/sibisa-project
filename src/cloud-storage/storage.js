const { Storage } = require('@google-cloud/storage')
const path = require('path')

const storage = new Storage({
  projectId: process.env.GCLOUD_PROJECT_ID,
  keyFilename: path.join(__dirname, '../../sibisa-351215-77c1ee60d764.json')
})

const bucket = storage.bucket(process.env.GCLOUD_STORAGE_BUCKET)

const getBuckets = () => {
  storage
    .getBuckets()
    .then((results) => {
      console.log(results)
    })
    .catch((err) => {
      console.error('ERROR:', err)
    })
}

module.exports = { storage, getBuckets, bucket }
