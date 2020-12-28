import {createContext} from 'react';

export const PopupContext = createContext(
  { 
    isPopupOpen: false,
    openPopup: () => {},
    closePopup: () => {}
  }
);