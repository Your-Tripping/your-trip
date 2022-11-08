import styled from "styled-components";
import { Text } from "../Text";

export const ModalTitle = styled(Text)`
  font-family: "Stick No Bills", sans-serif;
  color: ${({ theme }) => theme.colors.brand.secondary};
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;
