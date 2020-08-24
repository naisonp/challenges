import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  right: 0;
  left: 0;
  top: 0px;
  z-index: 99999;
  ${(props) => !props.open
    && css`
      pointer-events: none;
      opacity: 0;
    `}
`
export const Content = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.light};
  border-radius: 6px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.5);
  position: relative;
  margin: 150px auto;
  z-index: 11;
  height: fit-content;
`

export const CloseButton = styled.button`
  position: absolute;
  right: 0px;
  top: 0px;
  padding: 20px;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
  z-index: 99999;
  font-size: 20px;
  font-weight: bold;
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
`

