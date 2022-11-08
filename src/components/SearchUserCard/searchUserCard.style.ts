import styled from "styled-components";

export const UserCard = styled.li`
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.grey.grey1};
  height: 140px;
  padding: 0 20px;
`;

export const SectionProfile = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  position: relative;

  div {
    display: flex;
    align-items: center;
    gap: 8px;
    img {
      width: 46px;
      height: 46px;

      border: 1px solid ${({ theme }) => theme.colors.grey.grey2};
      border-radius: 50%;
    }

    h2 {
      font-size: ${({ theme }) => theme.typography.sizes.size2};
    }
    button {
      padding: 10px 20px;
      border-radius: 10px;
      background-color: ${({ theme }) => theme.colors.brand.tertiary};
      color: ${({ theme }) => theme.colors.brand.primary};
    }
  }
`;

export const UserBio = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.size3};
`;

export const HalfLine = styled.hr`
  margin: 8px 0;
  width: 90%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.grey.grey3};
`;
