import styled from "styled-components";

export const HeaderDashboard = styled.header`
  width: 100%;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  z-index: 1;
  top: 0;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: ${({ theme }) => theme.colors.grey.grey1};

  @media (max-width: 560px) {
    height: 130px;
  }
`;

export const Container = styled.section`
  max-width: 1128px;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
  .icon {
    width: 100px;
    height: 36px;
  }

  @media (max-width: 1128px) {
    width: 95%;
  }

  @media (max-width: 768px) {
    form {
      width: 60%;
    }
  }

  @media (max-width: 680px) {
    form {
      width: 388px;
    }
  }

  @media (max-width: 560px) {
    justify-content: space-between;
    flex-wrap: wrap;

    svg {
      order: 0;
    }
    section > div {
      order: 1;
    }

    form {
      order: 2;
      width: 100%;
    }
  }
`;

export const UserInfo = styled.div`
  div {
    width: 100%;
    display: flex;
    align-items: center;

    p {
      margin-right: 20px;
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
  }

  div + div {
    width: 200px;
    position: absolute;
    top: 80px;
    right: 0;
    border-radius: 0px 0px 10px 10px;

    button,
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 45px;
      border-radius: unset;
      color: ${({ theme }) => theme.colors.brand.primary};
      background-color: ${({ theme }) => theme.colors.brand.quartiary};
      font-size: ${({ theme }) => theme.typography.sizes.size3};
      transition: ease-in-out;
    }

    button:hover,
    a:hover {
      background-color: ${({ theme }) => theme.colors.brand.primary};
      color: ${({ theme }) => theme.colors.brand.quartiary};
    }

    @media (max-width: 560px) {
      top: 70px;
    }
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
