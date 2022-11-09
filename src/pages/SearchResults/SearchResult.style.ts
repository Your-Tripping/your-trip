import styled from "styled-components";

export const SearchMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  margin-top: 80px;

  @media (max-width: 768px) {
    margin-top: 140px;
  }

  & > div {
    display: flex;
    flex-direction: row;
    margin: 16px 108px;
    background-color: ${({ theme }) => theme.colors.grey.grey1};
    border-radius: 8px;
    padding: 16px;

    & svg {
      fill: ${({ theme }) => theme.colors.brand.primary};
      display: flex;
      align-items: center;
    }

    & p {
      font-size: ${({ theme }) => theme.typography.sizes.size2};
      align-self: center;
      margin: auto;
    }

    & span {
      color: ${({ theme }) => theme.colors.brand.primary};
    }

    @media (max-width: 768px) {
      margin: 16px 10px;
    }
  }
`;
