import styled from "styled-components";

export const HeaderDashboard = styled.header`
  display: flex;
  background-color: ${({ theme }) => theme.colors.grey.grey1};
  justify-content: space-between;
  padding: 15px 108px;
  align-items: center;
<<<<<<< HEAD
  height: 15%;
  background: #ffffff;
  box-shadow: 0px 4px 30px -10px rgba(0, 0, 0, 0.25);
=======
  height: 70px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
>>>>>>> 16d1b0df950a226187aaca75221dc2a49be84cf3
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
    width: 45px;
    height: 44px;
    border-radius: 50%;
  }
`;
