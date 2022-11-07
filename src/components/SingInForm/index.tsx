import { useForm } from "react-hook-form";
import { useUserContext } from "../../contexts/UserContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../validation/login";
import { iUserLogin } from "../../services/login";

import { Button } from "../Button/button.style";
import { Error } from "../ErrorMessage/formError.style";

import * as S from "./singInForm.style";

const SingInForm = () => {
  const { singIn, setShowModal } = useUserContext();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<iUserLogin>({
    resolver: yupResolver(loginSchema),
  });

  console.log(errors);

  return (
    <>
      <S.Form onSubmit={handleSubmit(singIn)}>
        <Error>{errors.email?.message}</Error>
        <S.InputEmail
          placeholder="Digite seu e-mail"
          type="email"
          {...register("email")}
        />
        <Error>{errors.password?.message}</Error>
        <S.InputPassword
          placeholder="Digite sua senha"
          type="password"
          {...register("password")}
        />
        <Button buttonType="tertiary" type="submit">
          Entrar
        </Button>
        <S.ForgotPassword>
          <S.Forgot color="grey4" fontWeight={600} tag="p" size="size3">
            Esqueçeu sua senha?
          </S.Forgot>
          <S.OpenModal buttonType="primary" type="submit">
            Clique aqui
          </S.OpenModal>
        </S.ForgotPassword>
        <S.DiviserTwo />
        <S.SingUpButton
          buttonType="outline"
          onClick={(e) => {
            e.preventDefault();
            setShowModal("singUp");
          }}
        >
          Quero me cadastrar
        </S.SingUpButton>
      </S.Form>
    </>
  );
};

export default SingInForm;
