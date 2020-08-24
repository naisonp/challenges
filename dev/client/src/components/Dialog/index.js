import React from 'react';

import { Container, Content, CloseButton, Main } from './styles';

function Dialog({ open, onOpenChange, children, ...porps }) {
  return (
    <Container open={open}>
      <Content>
        <CloseButton onClick={() => onOpenChange(!open)}>
          X
        </CloseButton>

        <Main>
          {open && (<>{children}</>)}
        </Main>
      </Content>
    </Container>
  )
}

export default Dialog;
