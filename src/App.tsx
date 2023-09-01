import { createContext, useContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { AxiosError } from 'axios'
import { ISSUES_PER_PAGE, IssueDTO, getIssuesRequest } from './apis/issue'
import PageRouter from './pages/PageRouter'
import { Theme } from './styles/base/DefaultTheme'
import GlobalStyle from './styles/base/GlobalStyles'

interface AppContextType {
  issues: IssueDTO[]
  isEndOfPage: boolean
  isLoading: boolean
  getIssues: () => void
}

export const AppContext = createContext<AppContextType | null>(null)

function App() {
  const [issues, setIssues] = useState<IssueDTO[]>([])
  const [page, setPage] = useState(1)
  const [isEndOfPage, setIsEndOfPage] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const getIssues = () => {
    if (isEndOfPage) return

    setIsLoading(true)
    getIssuesRequest(page)
      .then((data) => {
        setIssues(issues.concat(data.filter((issue) => !issue.pull_request)))
        setPage(page + 1)
        setIsEndOfPage(data.length < ISSUES_PER_PAGE)
      })
      .catch((e: AxiosError) => alert(e.message))
      .finally(() => setIsLoading(false))
  }

  return (
    <ThemeProvider theme={Theme}>
      <AppContext.Provider value={{ issues, isEndOfPage, isLoading, getIssues }}>
        <GlobalStyle />
        <PageRouter />
      </AppContext.Provider>
    </ThemeProvider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (context === null) {
    throw new Error('Context is null!')
  }
  return context
}

export default App
