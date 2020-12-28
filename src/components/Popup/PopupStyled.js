import styled from 'styled-components';
import themesStyles from '../../styles/themes';
import { breakpoints, responsiveFrom } from '../../helpers/breakpoints';

export const PopupContainerStyled = styled.div`
  height: calc(100% - 30px);
  width: calc(100% - 30px);
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  
  ${responsiveFrom(breakpoints.medium)`
    max-height: 70%;
    height: unset;
    width: 700px;
  `}
`;

export const PopupWrapperStyled = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100%;
  background-color: rgba(256,256,256, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;

  ${PopupContainerStyled} {
    background-color: ${ props => props.theme ? themesStyles[props.theme].backgroundColor : 'blue' };
  }

  color: ${ props => props.theme ? themesStyles[props.theme].fontColor : 'blue' };

  svg {
    fill: ${ props => props.theme ? themesStyles[props.theme].fontColor : 'blue' };
  }
`;

export const PopupContentStyled = styled.div`
  padding: 20px;
`;



export const PopupHeaderStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 50px 20px 20px;
`;

export const PopupTitleStyled = styled.h3`
  font-size: 20px;
`;

export const PopupCloseStyled = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;  
  border: none;
  background: transparent;

  svg {
    height: 20px;
    width: 20px;
    transition: transform .1s;
  }

  &:hover{
    cursor: pointer;
    svg {
      transform: rotate(90deg);
    }
  }
`;
