import styled from 'styled-components'
import themesStyles from '../../styles/themes';

export const HeaderStyled = styled.header`
  height: 40px;
  padding: 10px 20px;
  /* background-color: #cccccc; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${ props => props.theme ? themesStyles[props.theme].cardColor : 'blue' };
`;

export const LogoStyled = styled.img`

`;

export const ThemeSwitchStyled = styled.button`

`;