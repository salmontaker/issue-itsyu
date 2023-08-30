import { useParams } from 'react-router-dom'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { AxiosError } from 'axios'
import { Instance } from '../../apis/instance'
import { IssueDTO } from '../../apis/issue'
import { useEffect, useState } from 'react'

function IssueDetail() {
  const { number } = useParams()
  const [issue, setIssue] = useState<IssueDTO>()

  const getIssueDetail = () => {
    Instance.get<IssueDTO>(`/repos/facebook/react/issues/${number}`)
      .then((res) => setIssue(res.data))
      .catch((e: AxiosError) => alert(e.message))
  }

  useEffect(() => {
    getIssueDetail()
  }, [])

  return (
    <>
      {issue ? (
        <div>
          <img src={issue.user.avatar_url} width={100} />
          <div>
            #{issue.number} {issue.title}
          </div>
          <div>
            작성자 : {issue.user.login}, 작성일 : {issue.created_at}, 코멘트 : {issue.comments}
          </div>
          <ReactMarkdown>{issue.body}</ReactMarkdown>
        </div>
      ) : (
        <div>로딩중</div>
      )}
    </>
  )
}

export default IssueDetail
