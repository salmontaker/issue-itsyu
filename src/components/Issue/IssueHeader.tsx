import { ORGANIZATION_NAME, REPOSITORY_NAME } from '../../apis/issue'

function IssueHeader() {
  return (
    <div>
      {ORGANIZATION_NAME} / {REPOSITORY_NAME}
    </div>
  )
}

export default IssueHeader
