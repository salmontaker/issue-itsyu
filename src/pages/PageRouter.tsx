import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IssuePage from './IssuePage'
import IssueDetailPage from './IssueDetailPage'
import ErrorPage from './ErrorPage'

function PageRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<IssuePage />} />
        <Route path="/detail/:number" element={<IssueDetailPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default PageRouter
