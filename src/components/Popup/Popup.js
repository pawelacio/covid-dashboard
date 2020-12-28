import React, { useContext } from 'react';
import { PopupContext } from '../../PopupContext';
import { ThemeContext } from '../../ThemeContext';
import { ReactComponent as CloseIcon } from '../../assets/close.svg';

import {
  PopupWrapperStyled,
  PopupContainerStyled,
  PopupHeaderStyled,
  PopupTitleStyled,
  PopupCloseStyled,
  PopupContentStyled
} from './PopupStyled';

const Popup = ({title, children}) => {
  const { theme } = useContext(ThemeContext);
  const { closePopup } = useContext(PopupContext);

  return (
    <PopupWrapperStyled theme={theme} >
      <PopupContainerStyled>
        <PopupHeaderStyled>
          <PopupTitleStyled>{title}</PopupTitleStyled>
          <PopupCloseStyled onClick={() => closePopup()}>
            <CloseIcon/>
          </PopupCloseStyled>
        </PopupHeaderStyled>
        <PopupContentStyled>
          {children}
        </PopupContentStyled>
      </PopupContainerStyled>
    </PopupWrapperStyled>
  )
}

export default Popup;