import styled from 'styled-components';

export const TableContainer = styled.table`
  border-collapse: separate;
  border-spacing: 0;
  tbody {
    > tr {
      &:not(:nth-child(1)):not(:last-child) {
        > td {
          border-bottom: 1px solid ${({ theme }) => theme.grey};
        }
      }

      > th,
      > td {
        &:first-child {
          border-left: 1px solid  ${({ theme }) => theme.grey};
        }

        &:last-child {
          border-right: 1px solid  ${({ theme }) => theme.grey};
        }
      }

      &:first-child {
        > th,
        > td {
          border-top: 1px solid  ${({ theme }) => theme.grey};

          &:first-child {
            border-top-left-radius: 0.2rem;
          }
          &:last-child {
            border-top-right-radius: 0.2rem;
          }
        }
        > th {
          border-bottom: 1px solid  ${({ theme }) => theme.grey};
        }
      }

      &:last-child {
        > th,
        > td {
          border-bottom: 1px solid  ${({ theme }) => theme.grey};

          &:first-child {
            border-bottom-left-radius: 0.2rem;
          }
          &:last-child {
            border-bottom-right-radius: 0.2rem;
          }
        }
      }
    }
  }
`
export const Header = styled.tr`
  background-color: ${({ theme }) => theme.dark};
`;

export const Head = styled.th`
  padding: 0.5rem;
  color: ${({ theme }) => theme.light};
  font-weight: bold;
  padding: 10px 80px;
`;

export const Row = styled.tr`
  background-color:  ${({ theme }) => theme.light};

  &:nth-child(even) {
    background-color: #fafafa;
  }
  &:hover {
    background-color: #e9e9e9;
  }
`;

export const Cell = styled.td`
  padding: 0.25rem 0.5rem;
  text-align: center;
  > button {
    padding: 5px 10px;
    background: #444857;
  }
`;
