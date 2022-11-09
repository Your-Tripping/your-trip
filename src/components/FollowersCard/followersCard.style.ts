import styled from "styled-components";

export const LiCard = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
  }
`;

export const DivUser = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 46px;
    height: 46px;

    border: 1px solid ${({ theme }) => theme.colors.grey.grey2};
    border-radius: 50%;
  }

  h2 {
    font-size: ${({ theme }) => theme.typography.sizes.size2};
  }
`;

export const DivSeguir = styled.div`
  button {
    padding: 10px 20px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.brand.tertiary};
    color: ${({ theme }) => theme.colors.brand.primary};
  }
`;
