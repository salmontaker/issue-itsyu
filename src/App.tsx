import { createContext, useContext, useState } from 'react'
import { styled } from 'styled-components'
import { AxiosError } from 'axios'
import { ISSUES_PER_PAGE, IssueDTO, getIssuesRequest } from './apis/issue'
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

    setIsLoading(true)
    getIssuesRequest(issues.length / ISSUES_PER_PAGE + 1)
      .then((data) => {
        setIssues(issues.concat(...data))
        setIsEndOfPage(data.length < ISSUES_PER_PAGE)
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
