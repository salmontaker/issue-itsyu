import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { styled } from 'styled-components'
import { flex } from '../../styles/constants/flex'
import { fontSizes } from '../../styles/constants/fontSize'

export const IssueDetailWrapper = styled.div`
  ${flex.flexCenter};
`

export const IssueDetail = styled.div`
  width: 75%;
  padding: 12px;
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  overflow: hidden;
  background-color: white;
`

export const IssueDetailAvatar = styled.img`
  width: 100px;
`

export const IssueDetailTitle = styled.div`
  font-size: ${fontSizes.large};
  margin-top: 12px;
  margin-bottom: 12px;
`
export const IssueDetailInfo = styled.div`
  font-size: ${fontSizes.medium};
`

export const MarkDown = styled(ReactMarkdown)`
  & > * {
    all: revert;
  }
`
