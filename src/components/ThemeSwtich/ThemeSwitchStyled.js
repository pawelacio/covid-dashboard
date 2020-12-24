import styled, {css} from 'styled-components';
import { themes } from './../../ThemeContext';

export const ThemeSwitchStyled = styled.button`
  padding: 4px 8px;
  border: 0px;

  ${ props => props.theme === themes.light && css`
    color: red;
  `}
`;