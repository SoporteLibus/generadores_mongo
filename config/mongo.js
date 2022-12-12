const mongoose = require('mongoose');

const DB_URI = process.env.DB_URI

if (!DB_URI) {
  throw new Error(
    'Please define the DB_URI environment variable inside .env.local'
  )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

const dbConnect = async () => {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    }

    cached.promise = mongoose.connect(DB_URI, opts).then((mongoose) => {
      return mongoose
    })
  }

  try {
    cached.conn = await cached.promise
    console.log("DB Conexion OK")
  } catch (e) {
    cached.promise = null
    throw e
  }

  return cached.conn
}

module.exports = dbConnect;