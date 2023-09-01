import { useParams } from 'react-router-dom'
import { AxiosError } from 'axios'
import { IssueDTO, getIssueDetailRequest } from '../../apis/issue'
import { useEffect, useState } from 'react'
import * as S from './IssueDetail.styled'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

function IssueDetail() {
  const { number } = useParams()
  const [issue, setIssue] = useState<IssueDTO>()
  const [isLoading, setIsLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    setIsLoading(true)
    getIssueDetailRequest(Number(number))
      .then((data) => setIssue(data))
      .catch((e: AxiosError) => setErrorMsg(e.message))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <S.IssueDetailWrapper>
      {issue && (
        <S.IssueDetail>
          <S.IssueDetailHead>
            <S.IssueDetailAvatar src={issue.user.avatar_url} />
            <S.IssueDetailTitle>
              <S.IssueDetailNumber>#{issue.number}</S.IssueDetailNumber> {issue.title}
            </S.IssueDetailTitle>
            <S.IssueDetailInfo>
              {issue.user.login}가 {issue.created_at.replace('T', ' ').replace('Z', '')}에 작성
            </S.IssueDetailInfo>
            <S.IssueDetailInfo>코멘트 수 : {issue.comments}</S.IssueDetailInfo>
            <S.HR />
          </S.IssueDetailHead>
          <S.MarkDown
            components={{
              img: ({ ...props }) => <img style={{ maxWidth: '100%' }} {...props} alt="" />,
              pre: ({ ...props }) => (
                <pre
                  style={{
                    maxWidth: '100%',
                    padding: '8px',
                    overflow: 'auto',
                    border: '0.5px solid gray',
                  }}
                  {...props}
                />
              ),
            }}
            rehypePlugins={[rehypeRaw as any, remarkGfm]}
          >
            {issue.body}
          </S.MarkDown>
        </S.IssueDetail>
      )}
      {isLoading && !errorMsg && <div>로딩중</div>}
      {errorMsg}
    </S.IssueDetailWrapper>
  )
}

export default IssueDetail
