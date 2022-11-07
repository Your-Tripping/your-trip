import { Link } from "react-router-dom";
import styled from "styled-components";


export const BodyDashboard = styled.div`
  height: 100vh;
`;

export const MainDashboard = styled.main`
  height: 85%;
  display: flex;
  padding: 15px 108px;
  gap: 40px;

  section {
    width: 100%;
  }
`;

export const CreatePost = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 60%;
  background-color: ${({ theme }) => theme.colors.grey.grey1};
  height: 60px;
  padding: 18px 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  h2 {
    color: ${({ theme }) => theme.colors.brand.secondary};
    font-size: ${({ theme }) => theme.typography.sizes.size1};
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 12px;
  width: 65px;
  height: 32px;
  background-color: ${({ theme }) => theme.colors.brand.tertiary};
  border-radius: 8px;

  p {
    color: ${({ theme }) => theme.colors.brand.primary};
    font-size: ${({ theme }) => theme.typography.sizes.size3};
  }
`;

export const Post = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    color: ${({ theme }) => theme.colors.grey.grey3};
    font-size: ${({ theme }) => theme.typography.sizes.size3};
    margin: 30px 0px;
  }

  ul {
<<<<<<< HEAD
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.grey.grey1};
    height: 330px; //tamanho temporário, só deixei para indiciar o local.
=======
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    gap: 20px;

    margin-bottom: 30px;
>>>>>>> 16d1b0df950a226187aaca75221dc2a49be84cf3
  }
`;

export const Suggestion = styled.aside`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.grey.grey1};
  width: 441px;
  height: 351px;
  padding: 30px 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;

  h2 {
    color: ${({ theme }) => theme.colors.grey.grey4};
    font-size: ${({ theme }) => theme.typography.sizes.size3};
  }
`;
export const RandomBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.brand.primary};
  color: ${({ theme }) => theme.colors.grey.grey1};
  border-radius: 5px;
  padding: 10px 5px;
  margin-top: 20px
`
export const Container = styled.div`
  disply: flex;
  
`