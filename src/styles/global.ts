import { createGlobalStyle } from "styled-components";
import Map from "../assets/img/Map.svg"
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
body{
    background-image: url(${Map});
    background-position: center;
    width: 100%;
    height: auto;
}
`;
