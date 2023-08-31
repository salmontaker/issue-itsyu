import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
import { fontSizes } from '../../styles/constants/fontSize'

export const IssueItem = styled.li`
  width: 50%;
  padding: 12px;
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  overflow: hidden;
  background-color: white;
`

export const IssueItemHead = styled.div`
  font-size: ${fontSizes.medium};
  margin-bottom: 12px;
`

export const IssueItemBody = styled.div`
  font-size: ${fontSizes.small};
`

export const IssueLink = styled(Link)`
  color: black;
  text-decoration: none;
`
