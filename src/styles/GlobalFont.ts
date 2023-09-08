import { createGlobalStyle } from 'styled-components';
import PRETENDARD from '../assets/PretendardVariable.woff2';

const GlobalFont = createGlobalStyle`    
     @font-face {
        font-family: "Pretendard";
        src: url(${PRETENDARD}) format('woff2'); 
    }
  
`;

export default GlobalFont;
