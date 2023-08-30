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
