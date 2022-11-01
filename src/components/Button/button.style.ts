import { ReactNode } from "react";
import styled, { css } from "styled-components";

export const Button = styled.button<{ buttonType: string; children: ReactNode }>`
  color: ${({ theme }) => theme.colors.grey.grey1};
  border-radius: 8px;
  transition: all .3s;
  ${({ buttonType }) => {
    switch (buttonType) {
      case "primary":
        return css`
          background-color: ${({ theme }) => theme.colors.grey.grey2};
          padding: 0.5rem 2rem;
          color: ${({ theme }) => theme.colors.brand.primary};
          &:hover {
            background-color: ${({ theme }) => theme.colors.brand.primary};
            color: ${({ theme }) => theme.colors.grey.grey1};
          }
        `;
      case "secondary":
        return css`
          background-color: ${({ theme }) => theme.colors.grey.grey1};
          width: 100%;
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
            &:hover {
                background-color: ${({ theme }) => theme.colors.brand.tertiary};
                color: ${({ theme }) => theme.colors.grey.grey1};
          }
        `;
      case "custom":
        return css` 
         background-color: transparent;
         padding: 0;
         `
    }
  }}
`;
