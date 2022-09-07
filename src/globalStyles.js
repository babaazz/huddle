import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
   
   * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
   }

   body {
    font-family: 'Open Sans', sans-serif;
    background: #fff;
    color: ${({ theme }) => theme.colors.neutral.textColor};
    font-size: 1.15em;
   }
   h1, h2, h3 {
    font-family: 'Poppins', sans-serif;
   }
   p {
    line-height: 1.3;
   }
   img {
    max-width: 100%;
   }
`;

export default GlobalStyles;
