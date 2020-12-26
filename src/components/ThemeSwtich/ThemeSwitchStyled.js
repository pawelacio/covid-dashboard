import styled, {css} from 'styled-components';

export const ThemeSwitchStyled = styled.div`

`;


export const ToggleDot = styled.div`
  position: absolute;
  top: 1px;
  left: 1px;
  height: 20px;
  width: 20px;
  background-color: #ffffff;
  border: 2px solid #2b2e3d;
  border-radius: 50%;
  transition: all .3s cubic-bezier(0.075, 0.82, 0.165, 1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ToogleWrapperStyled = styled.div`
  position: relative;
  width: 50px;
  height: 26px;
  border-radius: 13px;
  background-color: #f6f6f6;
  border: 2px solid #000000;
  transition: all .3s;
  cursor: pointer;

  ${ props => props.value === true && `
    background-color: #4d4dff;
  `}

  ${ToggleDot} {
    ${ props => props.value === true && `
      left: 26px;
    `}
  }
`;

export const ToggleInput = styled.input.attrs({
  type: 'checkbox'
})`
  display: none;
`;

export const ToggleIcon = styled.img`
  user-select: none;
  max-width: 50%;
`;