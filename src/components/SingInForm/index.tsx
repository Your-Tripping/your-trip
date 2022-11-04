import { useForm } from "react-hook-form";
import { useUserContext } from "../../contexts/UserContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../validation/login";
import { iUserLogin } from "../../services/login";

import * as S from "./singInForm.style";
import { Button } from "../Button/button.style";

const SingInForm = () => {
  const { singIn } = useUserContext();

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
        <S.InputEmail
          placeholder="Digite seu e-mail"
          type="email"
          {...register("email")}
        />
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
        <S.SingUpButton buttonType="outline" type="submit">
          Quero me cadastrar
        </S.SingUpButton>
      </S.Form>
    </>
  );
};

export default SingInForm;
