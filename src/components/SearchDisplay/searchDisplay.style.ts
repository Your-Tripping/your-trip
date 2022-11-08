import styled from "styled-components";

export const SearchResults = styled.ul`
  margin-top: 25px;
  margin-bottom: 25px;
  align-self: center;
  width: 100%;
  padding: 0 108px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 3%;

  & li {
    width: 30%;
  }
`;

export const EmptySearch = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.size1};
`;
