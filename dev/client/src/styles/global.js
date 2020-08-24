import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
  }

  html, border-style, #root {
      height: 100%;
  }

  body {
      font: 14px 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS';
      background: ${({ theme }) => theme.light};
      -webkit-font-smoothing: antialiased !important;
      transition: background-color 200ms, color 200ms, border-color 200ms ease;
  }

  input,
  button {
    background-image: initial;
    color: inherit;
    font: inherit;
    margin: 0;
    outline: 0;
    padding: 0;
    transition: background-color 0.3s;
  }


`
