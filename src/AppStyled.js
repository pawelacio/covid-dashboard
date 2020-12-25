import styled from 'styled-components'
import { breakpoints, responsiveFrom } from './helpers/breakpoints';

export const AppStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f6f6f6;
`

export const AppContentStyled = styled.div`
  padding: 10px;

  ${responsiveFrom(breakpoints.medium)`
    padding: 50px;
  `}
`;