import styled from "styled-components";
import { H2, DiviserTwo } from "../../components/SingInForm/singInForm.style";
import { Form } from "../Form/form.style";
import { Text } from "../Text";

export const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegisterForm = styled(Form)`
  width: 280px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.grey.grey1};
  padding: 1rem;
  margin-top: 100px;
  animation: transitionOpacity 1s ease;
  input {
    margin-bottom: 1rem;
  }
  p {
    text-align: center;
  }
  @media (min-width: 800px) {
    width: 350px;
    height: auto;
  }
  @keyframes transitionOpacity {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
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
