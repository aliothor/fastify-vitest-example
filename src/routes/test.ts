import type { FastifyInstance } from 'fastify'

interface IHelloQuerystring {
  name: string
}

async function routes(fastify: FastifyInstance) {
  fastify.get('/', async (request, reply) => {
    reply.send({ hello: 'world' })
  })

  fastify.get<{
    Querystring: IHelloQuerystring
  }>('/hello', async (request, reply) => {
    const query = request.query
    reply.send({ hello: `${query.name}` })
  })

  fastify.post<{
    Body: IHelloQuerystring
  }>('/hello', async (request, reply) => {
    const body = request.body
    reply.send({
      data: `hello ${body.name}`,
    })
  })
}

export default routes
