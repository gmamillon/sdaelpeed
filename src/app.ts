import Fastify, { FastifyInstance } from 'fastify'
import mongoose from 'mongoose'
import Lead from './routes/lead.js'

const fastify: FastifyInstance = Fastify({ logger: true })

fastify.register(Lead)

const start = async () => {
  try {
    
    await fastify.listen({ port: 3000 })
    await mongoose.connect('mongodb://localhost:27017/Lead')

    const address = fastify.server.address()
    console.log(address)

  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()