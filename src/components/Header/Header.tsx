import { Link } from 'react-router-dom'
import { ORGANIZATION_NAME, REPOSITORY_NAME } from '../../apis/issue'
import * as S from './Header.styled'

function Header() {
  return (
    <S.Header>
      <Link to={'/'}>
        {ORGANIZATION_NAME} / {REPOSITORY_NAME}
      </Link>
    </S.Header>
  )
}

export default Header
