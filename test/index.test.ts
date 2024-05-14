import { describe, it, beforeAll, expect } from 'vitest'
import { buildFastify } from '../src/index'
import type { FastifyInstance } from 'fastify'

describe('接口测试', () => {
  let fastify: FastifyInstance
  beforeAll(() => {
    fastify = buildFastify()
    return () => {
      fastify.close()
    }
  })

  it('index', async () => {
    const res = await fastify.inject({
      method: 'GET',
      url: '/',
    })

    console.log(res.json())

    expect(res.json().hello).toBe('world')
  })

  it('get/hello', async () => {
    const res = await fastify.inject({
      method: 'GET',
      url: '/hello',
      query: { a: 'b' },
    })

    expect(res.json().hello).toBe('b')
  })

  it('post/hello', async () => {
    const res = await fastify.inject({
      method: 'POST',
      url: '/hello',
      body: {
        a: 'foo',
      },
    })

    expect(res.json().a).toBe('foo')
  })
})
