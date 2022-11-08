import styled from "styled-components";

export const HeaderPage = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.grey.grey1};
  justify-content: space-between;
  padding: 15px 108px;
  align-items: center;
  height: 70px;
  z-index: 0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 100%;

  div {
    display: flex;
    gap: 20px;
    align-items: center;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 25px;
      color: ${({ theme }) => theme.colors.brand.primary};
      font-size: ${({ theme }) => theme.typography.sizes.size2};
      font-weight: 550;
      border-radius: 8px;
    }

    button:hover {
      background-color: ${({ theme }) => theme.colors.brand.primary};
      color: ${({ theme }) => theme.colors.brand.quartiary};
    }
  }

  svg {
    fill: ${({ theme }) => theme.colors.brand.primary};
    display: flex;
    align-items: center;
  }

  a:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.brand.primary};
  }
`;

export const EditProfile = styled.button`
  font-size: ${({ theme }) => theme.typography.sizes.size3};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.brand.primary};
  background-color: ${({ theme }) => theme.colors.brand.quartiary};
  width: 100%;
  height: 30px;
  border-radius: 8px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.brand.primary};
    color: ${({ theme }) => theme.colors.brand.quartiary};
    transition: 1s ease;
  }
`;

export const MainUserPage = styled.main`
  display: flex;
  padding: 15px 108px;
  gap: 130px;
  

  section {
    width: 60%;
  }
`;

export const informationUser = styled.div`
  width: 30%;
  border-radius: 10px;
  display: flex;
  padding: 25px;
  flex-direction: column;
  justify-content: center;
  gap: 20px 30px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.grey.grey1};

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
  }

  h2 {
    font-size: ${({ theme }) => theme.typography.sizes.size1};
    color: ${({ theme }) => theme.colors.brand.primary};
  }

  p {
    font-size: ${({ theme }) => theme.typography.sizes.size3};
    color: ${({ theme }) => theme.colors.grey.grey3};
  }
`;
