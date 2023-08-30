import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { IssueDTO } from '../../apis/issue'

interface Props extends Omit<IssueDTO, 'body' | 'user'> {
  author: string
  created_at: string
  comments: number
}

function IssueItem({ number, title, author, created_at, comments }: Props) {
  return (
    <StyledLink to={`/detail/${number}`}>
      #{number} {title}
      <br />
      작성자 : {author}, 작성일 : {created_at}, 코멘트 : {comments}
    </StyledLink>
  )
}

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`

export default IssueItem
