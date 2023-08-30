interface Props {
  organization?: string
  repository?: string
}

function IssueHeader({ organization, repository }: Props) {
  return (
    <div>
      {organization} / {repository}
    </div>
  )
}

export default IssueHeader
