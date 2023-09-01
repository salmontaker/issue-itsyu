import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
import { fontSizes } from '../../styles/constants/fontSize'

export const IssueItem = styled.li`
  width: 50%;
  padding: 24px;
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  overflow: hidden;
  background-color: white;
`

export const IssueItemHead = styled.div`
  font-size: ${fontSizes.medium};
  margin-bottom: 12px;
  line-height: 1.5;
`

export const IssueItemNumber = styled.text`
  color: white;
  background-color: black;
  border-radius: 48px;
  margin-right: 4px;
  padding: 0 8px;
`

export const IssueItemBody = styled.div`
  font-size: ${fontSizes.small};
  color: gray;
`

export const IssueLink = styled(Link)`
  color: black;
  text-decoration: none;
`
