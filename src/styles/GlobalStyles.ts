import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {   
    background-color:#e2e2e2;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
  }
`;

export default GlobalStyle;
