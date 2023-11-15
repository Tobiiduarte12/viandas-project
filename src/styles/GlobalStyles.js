import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'roboto', sans-serif;
        list-style-type: none;
        color: white;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        background-color: #141516;

        &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(
      180deg,
      rgba(252, 176, 69, 1) 0%,
      rgba(253, 29, 29, 1) 50%,
      rgba(252, 176, 69, 1) 100%
    );
    border-radius: 1rem;
  }
    }
    
    :root {
        --color-prussian-blue: #023047;
        --color-blue-green: #219ebc;
        --color-sky-blue: #8ecae6;
        --color-selective-yellow: #ffb703;
        --color-ut-orange: #fb8500;

        --font-irish-grover: 'Irish Grover', cursive;
    }

`;
