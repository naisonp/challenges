import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  border-radius: 4px;

  > form {
    display: flex;
    flex-direction: column;

    span {
      color: #f64c75;
      align-self: flex-start;
      margin: -10px 0 10px;
      font-weight: bold;
      padding: 0px 0px 0px 5px;
    }

    input {
      font-weight: 500;
      font-size: 1em;
      border-radius: 5px;
      height: 44px;
      padding: 16px;
      margin: 0 0 10px;

      &::placeholder {
        color: #999;
      }
    }

  }
`

export const Title = styled.h1`
  margin: 20px 0;
  text-align: center;
`
