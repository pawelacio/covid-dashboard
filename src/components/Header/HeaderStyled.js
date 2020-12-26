import styled from 'styled-components'
import themesStyles from '../../styles/themes';
import { breakpoints, responsiveFrom } from '../../helpers/breakpoints';

export const HeaderStyled = styled.header`
  height: 40px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${ props => props.theme ? themesStyles[props.theme].cardColor : 'blue' };

  ${responsiveFrom(breakpoints.medium)`
    padding: 10px 60px;
  `}
`;

export const LogoStyled = styled.img`

`;