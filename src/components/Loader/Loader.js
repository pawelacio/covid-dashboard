import React from 'react';

import {
  LoaderStyled,
  Gooey,
  Dot,
  Dots,
} from './LoaderStyled';

const Loader = () => {
  return (
    <LoaderStyled>
      <Gooey>
        <Dot></Dot>
        <Dots>
          <span></span>
          <span></span>
          <span></span>
        </Dots>
      </Gooey>
    </LoaderStyled>
  )
}

export default Loader;