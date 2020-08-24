import styled from 'styled-components';

export const ButtonContainer = styled.button`
  background: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.light};
  text-transform: uppercase;
  font-weight: 700;
  padding: 16px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: box-shadow .4s ease;

  &:hover {
    box-shadow: 1px 1px 5px #555;
  }

  &:active {
      box-shadow: 1px 1px 7px #222;
  }
`
