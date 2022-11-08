import styled from "styled-components";
import { Text } from "../Text";

export const Box = styled.div`
  width: fit-content;
  margin: 0 auto;
  input,
  button {
    margin-bottom: 1rem;
  }
`;
export const FormTitle = styled(Text)`
  font-family: "Stick No Bills", sans-serif;
  color: ${({ theme }) => theme.colors.brand.secondary};
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;

export const place = styled.li`
  padding: 10px;
  width: 280px;
  display: flex;
  background-color: #fff;
  border-radius: 4px;
  h5 {
    font-size: 12px;
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
