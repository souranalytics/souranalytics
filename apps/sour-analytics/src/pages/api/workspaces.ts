import { NextApiResponse } from 'next'
import connect from 'next-connect'
import { z } from 'zod'

import { auth, options, validateData } from '../../lib/api'
import { prisma } from '../../lib/prisma'
import { ApiRequest } from '../../types/api'
import {
  CreateWorkspaceResponse,
  WorkspacesResponse
} from '../../types/api/workspace'

type GetResponse = NextApiResponse<WorkspacesResponse>

type PostResponse = NextApiResponse<CreateWorkspaceResponse>

const schemaPost = z.object({
  name: z.string()
})

const handler = connect<ApiRequest>(options)
  .use(auth)
  .get(async (req, res: GetResponse) => {
    const workspaces = await prisma.workspace.findMany({
      include: {
        collaborators: true
      },
      orderBy: {
        createdAt: 'desc'
      },
      where: {
        collaborators: {
          some: {
            userId: req.user.id
          }
        }
      }
    })

    res.json({
      workspaces
    })
  })
  .post(async (req, res: PostResponse) => {
    const { name } = validateData(schemaPost, req.body)

    const workspace = await prisma.workspace.create({
      data: {
        collaborators: {
          create: {
            role: 'owner',
            userId: req.user.id
          }
        },
        name
      }
    })

    res.json({
      workspace
    })
  })

export default handler
