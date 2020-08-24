import React from 'react';

import { ButtonContainer } from './styles';

function Button({ type, text, onClick, ...porps }) {
  return (
    <ButtonContainer
      type={type}
      onClick={onClick}
    >
      {text}
    </ButtonContainer>
  )
}

export default Button;
