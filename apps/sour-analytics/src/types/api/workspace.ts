import { Collaborator, Workspace } from '@prisma/sour-analytics'

export type WorkspacesResponse = {
  workspaces: Array<
    Workspace & {
      collaborators: Array<Collaborator>
    }
  >
}

export type CreateWorkspaceResponse = {
  workspace: Workspace
}
