import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  margin-bottom: 5px;
`
export const Title = styled.h1`
  color: ${({ theme }) => theme.dark};
`

export const Status = styled.div`
  &::after{
    ${(props) => props.status === true && css`
      content: "O";
      color: #00f300;
    `}
    ${(props) => props.status === false && css`
      content: "X";
      color: #f30000 ;
    `}
    font-weight: bold;
    font-size: 1.4rem;
  }
`
