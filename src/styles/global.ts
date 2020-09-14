import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-shadow: none;
    outline: none;
    box-sizing: border-box;
  }

  :root {
    --primary-color: #15172a;
    --secondary-color: #248cd3;
    --primary-2-color: #15172a;
    --light: #ffffff;
    --dark: #000000;
    --bg-body: var(--primary-color);
  }

  html {
    font-size: 62.5%;
    height: -webkit-fill-available;
  }

  body {
    min-height: 100vh;
    min-height: -webkit-fill-available;
    background: var(--bg-body);
  }

  body,
  button,
  input,
  textarea {
    font: 400 1.6rem Roboto;
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1, h2, h3 {
    /* font-family: "Roboto"; */
  }
`;