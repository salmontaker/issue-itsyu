import { ORGANIZATION_NAME, REPOSITORY_NAME } from '../../apis/issue'
import * as S from './Header.styled'

function Header() {
  return (
    <S.Header>
      {ORGANIZATION_NAME} / {REPOSITORY_NAME}
    </S.Header>
  )
}

export default Header
