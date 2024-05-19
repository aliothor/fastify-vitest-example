import Fastify from 'fastify'
import testRoute from './routes/test'
import fileUploadRoute from './routes/file'
import multipart from '@fastify/multipart'
import type { FastifyInstance } from 'fastify'


function buildFastify() {
  const fastify = Fastify({
    logger: false,
  })

  fastify.register(multipart, {
    attachFieldsToBody: true
  })
  fastify.register(testRoute)
  fastify.register(fileUploadRoute)

  // Run the server!
  fastify.listen({ port: 3000, host: '127.0.0.1' }, function (err, address) {
    if (err) {
      // fastify.log.error(err)
      // process.exit(1)
      console.log(err);
    }
    console.log(`服务器启动成功: ${address}`)
  })
  return fastify
}


// if (process.env.MODE !== 'test') {
//   buildFastify()
// }

export { buildFastify }
