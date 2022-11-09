import styled from "styled-components";

export const HeaderPage = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.grey.grey1};
  justify-content: space-between;
  padding: 15px 123px 15px 108px;
  align-items: center;
  height: 70px;
  z-index: 0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 100vw;

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

  @media (max-width: 768px) {
    padding: 10px 30px 10px 15px;
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
  gap: 80px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 15px 15px;
    gap: 20px;
  }
`;

export const Posts = styled.div`
  background-color: ${({ theme }) => theme.colors.grey.grey1};
  height: 60px;
  padding: 18px 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.brand.primary};
  font-size: ${({ theme }) => theme.typography.sizes.size2};
  margin-bottom: 40px;
`;

export const InformationUser = styled.div`
  width: 30%;
  min-width: 250px;
  height: 400px;
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

  @media (max-width: 768px) {
    width: 100%;
  }
`;
