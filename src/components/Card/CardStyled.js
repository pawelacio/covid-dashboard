import styled, {css} from 'styled-components';
import themesStyles from '../../styles/themes';

export const CardStyled = styled.div`
  width: 100%;
  padding: 20px;
  margin: 10px;
  background-color: ${ props => props.theme ? themesStyles[props.theme].cardColor : 'blue' };
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  transition: transform .1s;

  ${props => props.clickable && css`
    cursor: pointer;
    
    &:hover{
      transform: scale(1.01);
      box-shadow: 0 0 10px rgba(0,0,0,0.5); 
    }
  `}
`;

export const CardTitleStyled = styled.h3`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 500;
  color: ${ props => props.theme ? themesStyles[props.theme].fontColor : 'blue' };
`;

export const CardContentStyled = styled.div`
`;