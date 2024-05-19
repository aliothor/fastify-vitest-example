import { buildFastify } from '../src/index'
import { beforeAll, afterAll } from 'vitest'
import type { FastifyInstance } from 'fastify'

export let fastify: FastifyInstance

const startServer = async () => {
    if (fastify) {
        return
    }
    fastify = await buildFastify()
}

startServer()

// afterAll(() => {
//     fastify?.close()
// })
