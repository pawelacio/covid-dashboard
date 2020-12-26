import styled from 'styled-components';
import themesStyles from '../../styles/themes';

export const CardStyled = styled.div`
  width: 100%;
  padding: 20px;
  margin: 10px;
  background-color: ${ props => props.theme ? themesStyles[props.theme].cardColor : 'blue' };
  overflow: hidden;
`;

export const CardTitleStyled = styled.h3`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 500;
  color: ${ props => props.theme ? themesStyles[props.theme].fontColor : 'blue' };
`;

export const CardContentStyled = styled.div`
`;