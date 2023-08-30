import IssueHeader from '../components/Issue/IssueHeader'
import IssueDetail from '../components/Issue/IssueDetail'

function IssueDetailPage() {
  return (
    <>
      <IssueHeader organization="facebook" repository="react" />
      <IssueDetail />
    </>
  )
}

export default IssueDetailPage
