import mongoose from 'mongoose'
import options from '../config'
import mongodbErrorHandler from 'mongoose-mongodb-errors'

mongoose.plugin(mongodbErrorHandler)

export const connect = (url = options.dbUrl, opts = {}) => {
  return mongoose.connect(url, {
    ...opts,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
}