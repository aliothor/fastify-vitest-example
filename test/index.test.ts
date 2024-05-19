import { describe, it, beforeAll, expect } from 'vitest'
import { fastify } from './server'
import type { FastifyInstance } from 'fastify'


describe('接口测试', () => {

  // let fastify: FastifyInstance

  // beforeAll(() => {
  //   fastify = buildFastify()
  //   return () => {
  //     fastify.close()
  //   }
  // })

 
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
      query: { name: 'abc' },
    })


    console.log(res.json())

    expect(res.json().hello).toBe('abc')
  })

  it('post/hello', async () => {
    const res = await fastify.inject({
      method: 'POST',
      url: '/hello',
      body: {
        name: 'foo',
      },
    })

    console.log(res.json())

    expect(res.json().data).toBe('hello foo')
  })
})
