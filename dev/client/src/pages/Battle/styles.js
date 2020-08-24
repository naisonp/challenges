import styled from 'styled-components';

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
