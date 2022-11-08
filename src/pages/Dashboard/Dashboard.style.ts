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
  margin-top: 90px;
  section {
    width: 100%;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    section {
      order: 1;
    }
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
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    gap: 20px;

    margin-bottom: 30px;
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

  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 768px) {
      flex-direction: row;
    }
  }
`;
export const RandomBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.brand.primary};
  color: ${({ theme }) => theme.colors.grey.grey1};
  border-radius: 5px;
  padding: 10px 5px;
  margin-top: 20px;
`;
export const Container = styled.div`
  display: flex;
`;
