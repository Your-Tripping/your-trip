import styled from "styled-components";

export const HeaderDashboard = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 15px 108px;
  align-items: center;
  height: 15%;
  box-shadow: 0px 4px 30px -10px rgba(0, 0, 0, 0.25);
`;

export const FormSearch = styled.form`
  height: 50px;
  width: 40%;
  border: 1px solid ${({ theme }) => theme.colors.brand.tertiary};
  border-radius: 5px;
  padding: 18px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    width: 70%;
    color: ${({ theme }) => theme.colors.grey.grey3};
    font-size: ${({ theme }) => theme.typography.sizes.size2};
  }

  button,
  svg {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.brand.secondary};
    width: 40px;
    height: 30px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;

  p {
    color: ${({ theme }) => theme.colors.brand.secondary};
    font-size: ${({ theme }) => theme.typography.sizes.size1};
  }

  img {
    width: 59px;
    height: 59px;
  }
`;
