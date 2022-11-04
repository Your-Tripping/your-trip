import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Stick+No+Bills:wght@400;600;700&display=swap');;

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    border: none;
    outline: none;
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
}

button{
  cursor: pointer;
}
`;
