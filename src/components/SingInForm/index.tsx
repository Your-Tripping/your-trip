import { useForm } from "react-hook-form";
import * as S from "./singInForm.style";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../Button/button.style";
import { loginSchema } from "../../validations/login";
import { iUserLogin } from "../../services/login";

const SingInForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<iUserLogin>({
    resolver: yupResolver(loginSchema),
  });

  return (
    <>
      <S.Form>
        <S.InputEmail placeholder="Digite seu e-mail" type="email" />
        <S.InputPassword placeholder="Digite sua senha" type="password" />
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
