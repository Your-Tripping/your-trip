import styled, { css } from "styled-components";
import theme from "../../styles/theme";

type tText = {
  color?: keyof typeof theme.colors.grey;
  size?: keyof typeof theme.typography.sizes;
  fontWeight?: 400 | 600 | 700;
  tag?: string;
};

export const Text = styled("h1").attrs<tText>(({ tag }) => ({
  as: tag,
}))<tText>`
  ${({ color = "grey1", size = "size1", fontWeight = 700 }) => css`
    font-size: ${theme.typography.sizes[size]};
    color: ${theme.colors.grey[color]};
    font-weight: ${fontWeight};
  `}
`;

