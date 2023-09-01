import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

import { flex } from '../../styles/constants/flex'
import { colors } from './../../styles/constants/colors'
import { fontSizes } from '../../styles/constants/fontSize'

export const Wrapper = styled.div`
  ${flex.flexColumnCenter}
  height: 100vh;
  padding: 20px;
  gap: 50px;
`
export const Title = styled.h2`
  font-size: ${fontSizes.large};
  font-weight: 700;
  color: ${colors.black};
`
export const Button = styled(Link)`
  ${flex.flexCenter}
  width: 260px;
  height: 50px;
  border-radius: 4px;
  background-color: ${colors.black};
  color: ${colors.white};
  font-weight: 500;
  transition: 200ms;

  &:hover {
    opacity: 0.9;
  }
`
