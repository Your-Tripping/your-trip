import styled from "styled-components";

export const HeaderDashboard = styled.header`
  display: flex;
  background-color: ${({ theme }) => theme.colors.grey.grey1};
  justify-content: space-between;
  padding: 15px 108px;
  align-items: center;
  height: 70px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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
