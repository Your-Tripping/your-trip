import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../Button/button.style";
import { Text } from "../Text";

export const Box = styled.div`
  width: fit-content;
  margin: 0 auto;

  position: relative;
  margin-top: 30px;
  input,
  button {
    margin-bottom: 1rem;
  }
  form{
    padding: 7px;
  }
`;
export const FormTitle = styled(Text)`
  font-family: "Stick No Bills", sans-serif;
  color: ${({ theme }) => theme.colors.brand.primary};
  font-size: 1.75rem;
  text-align: center;
  margin-bottom: 2rem;
  padding-top: 50px;
`;

export const BackLink = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  color: ${({ theme }) => theme.colors.brand.primary};
  font-size: 20px;
`

export const PostButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
`;

export const Place = styled.li`
  padding: 10px;
  width: 280px;
  display: flex;
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 1rem;
  h5 {
    font-size: .7rem;
    padding-bottom: 5px;
    color: ${({ theme }) => theme.colors.brand.primary};
  }
  img {
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 4px;
  }
  div {
    padding: 0 5px;
  }
  p {
    word-break: break-word;
    word-wrap: break-word;
    word-break: break-word;
    font-size: 10px;
  }
  button {
    background-color: transparent;
    height: fit-content;
    color: ${({ theme }) => theme.colors.brand.primary};
  }
  @media (min-width: 920px) {
    width: 380px;
    h5 {
      font-size: 1rem;
    }
    p {
      font-size: 14px;
    }
    button {
      font-size: 20px;
    }
  }
`;
