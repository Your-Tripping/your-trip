import styled from "styled-components";

export const HeaderDashboard = styled.header`
  display: flex;
  background-color: ${({ theme }) => theme.colors.grey.grey1};
  justify-content: space-between;
  padding: 15px 108px;
  align-items: center;
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 80px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  @media (max-width: 360px) {
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    padding: 10px 10px;
    justify-content: flex-start;
    gap: 20px;
    svg {
      width: 100px;
      height: 36px;
    }
  }
  @media (max-width: 1024px) {
    justify-content: flex-start;
    gap: 30px;
  }
`;

export const FormSearch = styled.form`
  height: 50px;
  width: 40%;
  border: 1px solid ${({ theme }) => theme.colors.grey.grey2};
  border-radius: 5px;
  padding: 18px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    width: 70%;
    color: ${({ theme }) => theme.colors.grey.grey3};
    font-size: ${({ theme }) => theme.typography.sizes.size3};
  }

  input::placeholder-shown {
    display: none;
  }
  button,
  svg {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.brand.secondary};
    width: 40px;
    height: 30px;
    @media (max-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: 360px) {
    display: none;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;

  div {
    position: absolute;
    top: 18px;
    right: 25px;
    width: 200px;
    @media (max-width: 768px) {
      width: 40px;
    }
  }

  div > section {
    display: flex;
    align-items: center;
    gap: 26px;
  }

  div > div {
    position: relative;
    top: 20px;
    left: 5px;
    border-radius: 0px 0px 10px 10px;
    @media (max-width: 768px) {
      left: -60px;
    }

    button,
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 200px;
      height: 45px;
      border-radius: unset;
      color: ${({ theme }) => theme.colors.brand.primary};
      background-color: ${({ theme }) => theme.colors.brand.quartiary};
      font-size: ${({ theme }) => theme.typography.sizes.size3};
      transition: ease-in-out;
      @media (max-width: 768px) {
        width: 120px;
      }
    }

    button:hover,
    a:hover {
      background-color: ${({ theme }) => theme.colors.brand.primary};
      color: ${({ theme }) => theme.colors.brand.quartiary};
    }
  }

  p {
    color: ${({ theme }) => theme.colors.brand.secondary};
    font-size: ${({ theme }) => theme.typography.sizes.size1};
  }

  button,
  img {
    width: 45px;
    height: 44px;
    border-radius: 50%;
  }
  @media (max-width: 768px) {
    p {
      display: none;
    }
  }
`;
