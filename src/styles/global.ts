import { createGlobalStyle } from "styled-components";
import Map from "../assets/img/Map.svg";
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
  width: 100%;
  height: 100vh;
  
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-gutter: stable;
  background-image: url(${Map});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left bottom;
  background-attachment: fixed;
}


body::-webkit-scrollbar {
  width: 15px;

  border-radius: 20px;
  border: 1px solid #C1C1C1;
}

  body::-webkit-scrollbar-thumb {
    background-color: #079BAB;
    border-radius: 20px;
  }
`;
