import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import IssuePage from './IssuePage'
import IssueDetailPage from './IssueDetailPage'
import ErrorPage from './ErrorPage'

function PageRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<IssuePage />} />
          <Route path="/detail/:number" element={<IssueDetailPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default PageRouter
