import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    
    body {
        background: #f6f6f6;
        margin: 0;
        padding: 0;
        font-family: 'Lora', serif;
    }

    h1,h2,h3,h4,h5,h6 {
      font-family: "Candal", serif;
      color: #444;
      margin: 5px;
    }

    a { 
        text-decoration: none;
        color: inherit;
    }
`;
