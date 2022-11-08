import styled from "styled-components";
import { H2, DiviserTwo } from "../../components/SingInForm/singInForm.style";
import { Form } from "../Forn/form.style";
import { Text } from "../Text";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const Conatiner = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegisterForm = styled(Form)`
  margin-top: 80px;
  animation: transitionOpacity 1s ease;
  input {
    margin-bottom: 1rem;
  }
  p {
    text-align: center;
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
export const Title = styled(H2)`
  color: ${({ theme }) => theme.colors.brand.primary};
  font-size: 2rem;
`;
export const Label = styled.label`
  color: ${({ theme }) => theme.colors.grey.grey4};
  font-family: "Poppins", sans-serif;
  font-size: ${({ theme }) => theme.typography.sizes.size2};
`;
export const Exit = styled.button`
  background: none;
  font-size: 20px;
  margin-left: 5px;
  margin-top: 20px;
`;

export const NewDiviser = styled(DiviserTwo)`
  margin-bottom: 20px;
  margin-top: 10px;
`;
export const AlreadyLogged = styled(Text)`
  color: #000;
  margin-top: 1rem;
  display: block;
  text-align: center;
  span {
    color: ${({ theme }) => theme.colors.brand.primary};
  }
`;
export const Diviser = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.grey.grey3};
  margin-bottom: 30px;
`;
