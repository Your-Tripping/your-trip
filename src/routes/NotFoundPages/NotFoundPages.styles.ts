import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.25rem;

    svg {
      width: 50px;
      height: 50px;
      color: ${({ theme }) => theme.colors.brand.primary};
    }
  }

  h2 {
    color: ${({ theme }) => theme.colors.brand.primary};
    font-weight: 700;
    font-size: 1.75rem;
    width: 90%;
  }

  @media (min-width: 31.25rem) {
    div > h2 {
      width: 100%;
    }
  }
`;
export const StyleLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 3rem;
  padding: 0rem 1.3959rem;
  background-color: ${({ theme }) => theme.colors.brand.primary};
  border-radius: 0.2538rem;

  p {
    color: ${({ theme }) => theme.colors.grey.grey1};
    font-weight: 700;
  }

  &:hover {
    transition: 1seg;
    background-color: ${({ theme }) => theme.colors.grey.grey1};
    p {
      color: ${({ theme }) => theme.colors.brand.primary};
    }
  }
`;
