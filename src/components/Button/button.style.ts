import { ReactNode } from "react";
import styled, { css } from "styled-components";

export const Button = styled.button<{
  buttonType: string;
  children: ReactNode;
}>`
  color: ${({ theme }) => theme.colors.grey.grey1};
  border-radius: 3px;
  transition: all 0.3s;
  ${({ buttonType }) => {
    switch (buttonType) {
      case "primary":
        return css`
          background-color: ${({ theme }) => theme.colors.brand.primary};
          font-size: 14px;
          padding: 0.3rem;
          color: ${({ theme }) => theme.colors.grey.grey1};
        `;
      case "secondary":
        return css`
          background-color: ${({ theme }) => theme.colors.brand.tertiary};
          padding: 0.3rem;
          color: ${({ theme }) => theme.colors.brand.primary};
          &:hover {
            background-color: ${({ theme }) => theme.colors.brand.primary};
            color: ${({ theme }) => theme.colors.grey.grey1};
          }
        `;
      case "tertiary":
        return css`
          background-color: ${({ theme }) => theme.colors.brand.primary};
          color: ${({ theme }) => theme.colors.grey.grey1};
          width: 100%;
          padding: 1rem;
          &:hover {
            background-color: ${({ theme }) => theme.colors.brand.secondary};
            color: ${({ theme }) => theme.colors.brand.primary};
          }
        `;
      case "outline":
        return css`
          border: 1px solid ${({ theme }) => theme.colors.brand.primary};
          color: ${({ theme }) => theme.colors.brand.primary};
          width: 100%;
          background-color: transparent;
          padding: 1rem;
          &:hover {
            background-color: ${({ theme }) => theme.colors.brand.primary};
            color: ${({ theme }) => theme.colors.grey.grey1};
          }
        `;
    }
  }}
`;
