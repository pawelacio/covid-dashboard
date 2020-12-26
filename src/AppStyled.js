import styled from 'styled-components'
import { breakpoints, responsiveFrom } from './helpers/breakpoints';
import themesStyles from './styles/themes';

export const AppStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${ props => props.theme ? themesStyles[props.theme].backgroundColor : 'blue' };
`

export const AppContentStyled = styled.div`
  padding: 10px;

  ${responsiveFrom(breakpoints.medium)`
    padding: 50px;
  `}
`;