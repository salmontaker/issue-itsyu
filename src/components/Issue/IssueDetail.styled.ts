import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { styled } from 'styled-components'
import { flex } from '../../styles/constants/flex'
import { fontSizes } from '../../styles/constants/fontSize'

export const IssueDetailWrapper = styled.div`
  ${flex.flexCenter};
`

export const IssueDetail = styled.div`
  width: 50%;
  padding: 24px;
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  overflow: hidden;
`

export const IssueDetailHead = styled.div`
  text-align: center;
`

export const IssueDetailAvatar = styled.img`
  display: block;
  margin: auto;
  width: 100px;
  border-radius: 100%;
`

export const IssueDetailTitle = styled.div`
  font-size: ${fontSizes.medium};
  margin: 12px 0 12px 0;
  line-height: 1.5;
`

export const IssueDetailInfo = styled.div`
  color: gray;
  font-size: ${fontSizes.default};
  margin: 12px 0 12px 0;
`

export const IssueDetailNumber = styled.text`
  color: white;
  background-color: black;
  border-radius: 48px;
  padding: 2px 6px;
`

export const HR = styled.hr`
  margin-top: 16px;
  margin-bottom: 16px;
`

export const MarkDown = styled(ReactMarkdown)`
  & > * {
    all: revert;
    line-height: 1.5;
  }

  & > img {
    max-width: 100%;
  }
`
