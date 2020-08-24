import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`
export const Header = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  height: 70px;
  width: 100%;
  background: ${({ theme }) => theme.dark};
`
export const Menu = styled.div`
  display: flex;
  height: 50px;

  & .link {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    background: #444857;
    color: ${({ theme }) => theme.light};
    font-weight: bold;
    width: 100px;
    margin: 0 10px;
    text-transform: uppercase;
    cursor: pointer;
    transition: 200ms;

    &:hover,
    :nth-child(${(props) => props.selectedTab}) {
      background: ${({ theme }) => theme.light};
      color: ${({ theme }) => theme.dark};
    }
  }
`
export const Content = styled.div`
  display: flex;
  justify-content: center;
`

