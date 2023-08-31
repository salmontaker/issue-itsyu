import { Instance } from './instance'

export interface IssueDTO {
  number: number
  title: string
  body: string
  created_at: string
  comments: number
  user: UserDTO
}

export interface UserDTO {
  login: string
  avatar_url: string
}

export const ORGANIZATION_NAME = 'facebook'
export const REPOSITORY_NAME = 'react'
export const ISSUES_PER_PAGE = 20

export const getIssuesRequest = async (pageNo: number) => {
  const { data } = await Instance.get<IssueDTO[]>(
    `/repos/${ORGANIZATION_NAME}/${REPOSITORY_NAME}/issues`,
    {
      params: {
        state: 'open',
        sort: 'comments',
        per_page: ISSUES_PER_PAGE,
        page: pageNo,
      },
    }
  )

  return data
}

export const getIssueDetailRequest = async (issueNo: number) => {
  const { data } = await Instance.get<IssueDTO>(
    `/repos/${ORGANIZATION_NAME}/${REPOSITORY_NAME}/issues/${issueNo}`
  )

  return data
}
