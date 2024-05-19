import type { FastifyInstance } from 'fastify'
import fs from 'node:fs/promises'
import type { MultipartFile } from '@fastify/multipart'

/**
 * form-data文件上传
 * @param fastify 
 */
async function routes(fastify: FastifyInstance) {

    fastify.post<{
        Body: any
    }>('/avator', async (req, reply) => {
        const body = req.body as {
            file: MultipartFile
        }

        const data = body.file

        await fs.writeFile(`./image/${data.filename}`, await data.toBuffer())

        reply.send({
            url: `/preview?name=${data.filename}`,
        })
    })

    fastify.get<{
        Querystring: {
            name: string
        }
    }>('/preview', async (req, reply) => {

        const name = req.query.name

        const buffer = await fs.readFile(`./image/${name}`)

        reply.code(200).header('Content-Type', 'image/png').send(buffer)
    })
}

export default routes