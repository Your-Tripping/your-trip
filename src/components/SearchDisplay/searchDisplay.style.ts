import styled from "styled-components";

export const SearchResults = styled.ul`
  margin-top: 25px;
  margin-bottom: 25px;
  align-self: center;
  width: 100%;
  padding: 0 108px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;

  & li {
    width: 100%;
  }

  @media (min-width: 996px) {
    gap: 3%;

    & li {
      width: 30%;
    }
  }
`;

export const EmptySearch = styled.p`
  width: 100%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.grey.grey1};
  height: 140px;
  padding: 8px 20px;
  font-size: ${({ theme }) => theme.typography.sizes.size1};
  display: flex;
  align-items: center;
`;
