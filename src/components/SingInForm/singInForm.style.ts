import styled from "styled-components";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Input } from "../Input/input.style";
import { Text } from "../Text";
import { Button } from "../Button/button.style";


export const InputEmail = styled(Input)`
  margin-bottom: 25px;
  ::placeholder {
    font-size: ${({ theme }) => theme.typography.sizes.size2};
  }
`;
export const InputPassword = styled(Input)`
  ::placeholder {
    font-size: ${({ theme }) => theme.typography.sizes.size2};
  }
`;
export const PasswordWrapper = styled.div`
  position: relative;
  height: 49.6px;
  margin-bottom: 25px;
`;
export const VisibleIcon = styled(FaEyeSlash)`
  color: var(--grey-1);
  position: absolute;
  bottom: 16px;
  right: 12px;
  cursor: pointer;
`;
export const InvisibleIcon = styled(FaEye)`
  color: var(--grey-1);
  position: absolute;
  bottom: 16px;
  right: 12px;
  cursor: pointer;
`;
export const H2 = styled(Text)`
  text-align: center;
  margin-bottom: 30px;
  margin-top: 30px;
  width: 250px;
`;
export const Forgot = styled(Text)`
  margin-top: 20px;
`;
export const SingUpButton = styled(Button)`
  width: 100%;
  font-weight: 600;
`;
export const OpenModal = styled(Button)`
  background: none;
  color: ${({ theme }) => theme.colors.brand.primary};
  font-size: ${({ theme }) => theme.typography.sizes.size3};
  font-weight: 600;
  width: 100px;
  margin-top: 3px;
  height: 50px;
`;
export const ForgotPassword = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
`;
export const DiviserTwo = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.grey.grey3};
  margin-bottom: 30px;
`;
