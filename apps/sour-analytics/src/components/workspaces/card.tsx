import { FunctionComponent } from 'react'

import { Icon } from 'shared/components/common/icon'

import { WorkspacesResponse } from '../../types/api/workspace'

type Props = {
  workspace: WorkspacesResponse['workspaces'][number]
}

export const WorkspaceCard: FunctionComponent<Props> = ({ workspace }) => (
  <div className="flex items-center justify-between p-3 rounded-lg ring-2 ring-neutral-200">
    <div className="font-medium text-black">{workspace.name}</div>

    <div className="flex items-center text-neutral-600">
      <Icon className="w-5 h-5" name="group" />

      <div className="ml-2 tabular-nums">{workspace.collaborators.length}</div>
    </div>
  </div>
)
