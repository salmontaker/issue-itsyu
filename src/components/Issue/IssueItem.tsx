import { IssueDTO } from '../../apis/issue'
import * as S from './IssueItem.styled'

interface Props extends Omit<IssueDTO, 'body' | 'user' | 'pull_request'> {
  author: string
  created_at: string
  comments: number
}

function IssueItem({ number, title, author, created_at, comments }: Props) {
  return (
    <S.IssueItem>
      <S.IssueLink to={`/detail/${number}`}>
        <S.IssueItemHead>
          #{number} {title}
        </S.IssueItemHead>
        <S.IssueItemBody>
          작성자 : {author}, 작성일 : {created_at.replace('T', ' ').replace('Z', '')}, 코멘트 :{' '}
          {comments}
        </S.IssueItemBody>
      </S.IssueLink>
    </S.IssueItem>
  )
}

export default IssueItem
