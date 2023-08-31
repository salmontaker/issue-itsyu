import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import * as S from './Layout.styled'

export default function Layout() {
  return (
    <S.Layout>
      <Header />
      <S.Main>
        <Outlet />
      </S.Main>
    </S.Layout>
  )
}
