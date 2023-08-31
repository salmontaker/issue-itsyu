import { useParams } from 'react-router-dom'
import { AxiosError } from 'axios'
import { IssueDTO, getIssueDetailRequest } from '../../apis/issue'
import { useEffect, useState } from 'react'
import * as S from './IssueDetail.styled'

function IssueDetail() {
  const { number } = useParams()
  const [issue, setIssue] = useState<IssueDTO>()

  useEffect(() => {
    getIssueDetailRequest(Number(number))
      .then((data) => setIssue(data))
      .catch((e: AxiosError) => alert(e.message))
  }, [])

  return (
    <S.IssueDetailWrapper>
      {issue ? (
        <S.IssueDetail>
          <S.IssueDetailAvatar src={issue.user.avatar_url} />
          <S.IssueDetailTitle>
            #{issue.number} {issue.title}
          </S.IssueDetailTitle>
          <S.IssueDetailInfo>작성자 : {issue.user.login}</S.IssueDetailInfo>
          <S.IssueDetailInfo>작성일 : {issue.created_at}</S.IssueDetailInfo>
          <S.IssueDetailInfo>코멘트 : {issue.comments}</S.IssueDetailInfo>
          <S.MarkDown>{issue.body}</S.MarkDown>
        </S.IssueDetail>
      ) : (
        <div>로딩중</div>
      )}
    </S.IssueDetailWrapper>
  )
}

export default IssueDetail
