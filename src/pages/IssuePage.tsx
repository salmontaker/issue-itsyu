import IssueHeader from '../components/Issue/IssueHeader'
import IssueList from '../components/Issue/IssueList'

function IssuePage() {
  return (
    <>
      <IssueHeader organization="facebook" repository="react" />
      <IssueList />
    </>
  )
}

export default IssuePage
