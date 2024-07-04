import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    background: #f4f4f4;
    color: #333;
  }
  nav {
    background: #333;
    color: #fff;
    padding: 1rem;
  }
  nav ul {
    display: flex;
    list-style: none;
    justify-content: space-around;
  }
  nav a {
    color: #fff;
    text-decoration: none;
  }
  section {
    padding: 2rem 0;
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  form input, form textarea {
    margin: 0.5rem 0;
    padding: 0.5rem;
    width: 80%;
    max-width: 500px;
  }
  form button {
    padding: 0.5rem 1rem;
    background: #333;
    color: #fff;
    border: none;
    cursor: pointer;
  }
`;

export default GlobalStyles;