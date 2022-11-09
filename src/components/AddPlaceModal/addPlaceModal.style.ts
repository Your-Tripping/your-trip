import styled from "styled-components";
import { Form } from "../Form/form.style";
import { Text } from "../Text";

export const ModalTitle = styled(Text)`
  font-family: "Stick No Bills", sans-serif;
  color: ${({ theme }) => theme.colors.brand.secondary};
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 2rem;
  padding-top: 2rem;
`;

export const AddPlaceForm = styled(Form)`
  position: relative;
  input,
  button {
    margin-bottom: 1rem;
  }
`;

export const CloseButton = styled.button`
  background-color: transparent;
  font-size: 20px;
  position: absolute;
  top: 0;
  left: 0;
  padding: 1rem;
`;
