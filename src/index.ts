import Fastify from 'fastify'
import testRoute from './routes/test'

function buildFastify() {
  const fastify = Fastify({
    logger: false,
  })

  fastify.register(testRoute)

  // Run the server!
  fastify.listen({ port: 3000, host: '127.0.0.1' }, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    console.log(`服务器启动成功: ${address}`)
  })
  return fastify
}

export { buildFastify }
