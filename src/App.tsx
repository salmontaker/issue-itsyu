import { createContext, useContext, useState } from 'react'
import { styled } from 'styled-components'
import { AxiosError } from 'axios'
import { Instance } from './apis/instance'
import { IssueDTO } from './apis/issue'
import PageRouter from './pages/PageRouter'

interface AppContextType {
  issues: IssueDTO[]
  isEndOfPage: boolean
  isLoading: boolean
  getIssues: () => void
}

export const AppContext = createContext<AppContextType | null>(null)

function App() {
  const [issues, setIssues] = useState<IssueDTO[]>([])
  const [isEndOfPage, setIsEndOfPage] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const getIssues = () => {
    if (isEndOfPage) return

    const PER_PAGE = 20
    const params = {
      state: 'open',
      sort: 'comments',
      per_page: PER_PAGE,
      page: issues.length / PER_PAGE + 1,
    }

    setIsLoading(true)
    Instance.get<IssueDTO[]>(`/repos/facebook/react/issues`, { params })
      .then((res) => {
        setIssues(issues.concat(...res.data))
        setIsEndOfPage(res.data.length < PER_PAGE)
      })
      .catch((e: AxiosError) => alert(e.message))
      .finally(() => setIsLoading(false))
  }

  return (
    <AppContext.Provider value={{ issues, isEndOfPage, isLoading, getIssues }}>
      <StyledDiv>
        <PageRouter />
      </StyledDiv>
    </AppContext.Provider>
  )
}

const StyledDiv = styled.div`
  justify-content: center;
`

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (context === null) {
    throw new Error('Context is null!')
  }
  return context
}

export default App
