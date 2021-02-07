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

export const RowStyled = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  ${responsiveFrom(breakpoints.medium)`
      flex-wrap: nowrap;
  `};
`;

export const TextStyled = styled.p`
  display: inline;
  font-weight: ${props => props.bold ? 700 : 500 };
  color: ${ props => props.theme ? themesStyles[props.theme].fontColor : 'blue' };
`;

