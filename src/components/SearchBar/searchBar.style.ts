import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

export const SearchButton = styled.button`
  background-color: ${({ theme }) => theme.colors.brand.secondary};
  color: ${({ theme }) => theme.colors.grey.grey1};
  height: 100%;
  padding: 0 8px;
  @media (max-width: 360px) {
    display: none;
  }
`;

export const SearchForm = styled.form`
  height: 50px;
  width: 40%;
  border: 1px solid ${({ theme }) => theme.colors.brand.tertiary};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  @media (max-width: 360px) {
    display: none;
  }
`;

export const SearchFilter = styled.select`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.brand.secondary};
  border-right: 1px solid ${({ theme }) => theme.colors.brand.tertiary};
  color: ${({ theme }) => theme.colors.grey.grey1};
  font-size: ${({ theme }) => theme.typography.sizes.size3};
  padding: 0 8px;
  @media (max-width: 1024px) {
    width: 20px;
  }
`;

export const SearchIcon = styled(BsSearch)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.grey.grey1};
  width: 20px;
  height: 30px;
`;

export const SearchInput = styled.input`
  padding: 0 8px;
  width: 70%;
  color: ${({ theme }) => theme.colors.grey.grey3};
  font-size: ${({ theme }) => theme.typography.sizes.size2};
`;
