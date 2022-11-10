import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainDashboard = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;

  gap: 20px;
  margin-top: 90px;

  @media (max-width: 560px) {
    margin-top: 140px;
  }
`;

export const Container = styled.div`
  max-width: 1128px;

  display: flex;
  gap: 30px;

  margin-bottom: 30px;

  @media (max-width: 1128px) {
    width: 95%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MainSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 970px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 100%;
    order: 1;
  }
`;

export const MainAside = styled.aside`
  max-width: 380px;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 970px) {
    width: 40%;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    max-width: unset;
  }
`;

export const CreatePost = styled.div`
  width: 100%;
  height: 52px;
  min-width: 100%;
  padding: 10px 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.grey.grey1};

  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  h2 {
    color: ${({ theme }) => theme.colors.brand.secondary};
    font-size: ${({ theme }) => theme.typography.sizes.size1};
  }
`;

export const StyledLink = styled(Link)`
  padding: 8px 15px;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.brand.tertiary};

  p {
    color: ${({ theme }) => theme.colors.brand.primary};
    font-size: ${({ theme }) => theme.typography.sizes.size3};
  }
`;

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  h2 {
    color: ${({ theme }) => theme.colors.grey.grey3};
    font-size: ${({ theme }) => theme.typography.sizes.size3};
  }

  ul {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
`;

export const Suggestion = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 10px;

  background-color: ${({ theme }) => theme.colors.grey.grey1};
  padding: 30px 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  h2 {
    color: ${({ theme }) => theme.colors.grey.grey4};
    font-size: ${({ theme }) => theme.typography.sizes.size3};
    margin-bottom: 1rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 300px;
    overflow-y: auto;

    @media (max-width: 768px) {
      flex-direction: row;
      height: 100%;
    }
  }

  ul::-webkit-scrollbar {
    width: 12px;

    border-radius: 20px;
    border: 1px solid ${({ theme }) => theme.colors.grey.grey2};
  }

  ul::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.brand.primary};
    border-radius: 20px;
  }
`;

export const RandomBtn = styled.button`
  border-radius: 5px;
  padding: 10px 15px;

  background-color: ${({ theme }) => theme.colors.brand.primary};
  color: ${({ theme }) => theme.colors.grey.grey1};
`;
