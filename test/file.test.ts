import { describe, it, beforeAll, expect } from 'vitest'
import { fastify } from './server'
import type { FastifyInstance } from 'fastify'
import fs from 'node:fs/promises'


describe.sequential('接口测试', () => {
    let previewUrl: string

    // let fastify: FastifyInstance

    // beforeAll(() => {
    //     fastify = buildFastify()
    //     return () => {
    //         fastify.close()
    //     }
    // })

    it('avator图片上传', async () => {

        const form = new FormData()

        form.append('file', new File([new Blob([await fs.readFile("./data/1.png")])], '1.png'))

        const res = await fastify.inject({
            method: 'POST',
            url: '/avator',
            body: form,
            headers: {
                'content-type': "multipart/form-data"
            }
        })

        console.log(res.json())

        previewUrl = res.json().url
    })

    it('avator图片预览', async () => {
        const res = await fastify.inject({
            method: 'GET',
            url: previewUrl
        })

        expect(res.statusCode).toBe(200)
    })
})