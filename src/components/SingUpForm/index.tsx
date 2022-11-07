import { useState } from "react";
import { useUserContext } from "../../contexts/UserContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchemaRegister } from "../../validation/register";
import { useForm } from "react-hook-form";
import { iUserRegister } from "../../services/register";

import { Text } from "../Text";
import { Error } from "../ErrorMessage/formError.style";
import { Input } from "../Input/input.style";
import * as S from "./singUpForm.style";
import { Button } from "../Button/button.style";

export const SingUpForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserRegister>({
    resolver: yupResolver(formSchemaRegister),
  });
  const { singUp, setShowModal } = useUserContext();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const [isPasswordCheckVisible, setIsPasswordCheckVisible] = useState(false);

  const togglePasswordCheck = () => {
    setIsPasswordCheckVisible(!isPasswordCheckVisible);
  };

  return (
    <S.Conatiner>
      <S.RegisterForm onSubmit={handleSubmit(singUp)}>
        <div>
          <S.Exit
            onClick={() => {
              setShowModal(null);
            }}
          >
            x
          </S.Exit>
          <S.Title color="grey4" fontWeight={700} tag="h2" size="size1">
            Crie sua conta
          </S.Title>
          <Text color="grey4" fontWeight={400} tag="p" size="size1">
            Rapido e grátis, vamos nessa
          </Text>
          <S.NewDiviser />
        </div>
        <S.Label htmlFor="name">Nome</S.Label>
        <Error>{errors?.name?.message}</Error>
        <Input
          id="name"
          placeholder="Digite seu nome"
          type="text"
          {...register("name")}
        />
        <S.Label htmlFor="email">Email</S.Label>
        <Error>{errors?.email?.message}</Error>
        <Input
          id="email"
          placeholder="Digite seu e-mail"
          type="email"
          {...register("email")}
        />
        <S.Label htmlFor="img">Imagem</S.Label>
        <Error>{errors?.imageUrl?.message}</Error>
        <Input
          id="img"
          placeholder="Foto do Perfil"
          type="text"
          {...register("imageUrl")}
        />
        <S.Label htmlFor="bio">Bio</S.Label>
        <Error>{errors?.bio?.message}</Error>
        <Input
          id="bio"
          placeholder="Fale sobre você"
          type="text"
          {...register("bio")}
        />
        <S.Label htmlFor="password">Senha</S.Label>
        <Error>{errors?.password?.message}</Error>
        <S.PasswordWrapper>
          <Input
            id="password"
            placeholder="Digite sua senha"
            type={isPasswordVisible ? "text" : "password"}
            {...register("password")}
          />
          {!isPasswordVisible ? (
            <S.VisibleIcon onClick={() => togglePassword()} />
          ) : (
            <S.InvisibleIcon onClick={() => togglePassword()} />
          )}
        </S.PasswordWrapper>
        <S.Label htmlFor="passwordConfirmation">Confirmar Senha</S.Label>
        <Error>{errors?.passwordConfirmation?.message}</Error>
        <S.PasswordWrapper>
          <Input
            id="passwordConfirmation"
            placeholder="Digite sua senha novamente"
            type={isPasswordCheckVisible ? "text" : "password"}
            {...register("passwordConfirmation")}
          />
          {!isPasswordCheckVisible ? (
            <S.VisibleIcon onClick={() => togglePasswordCheck()} />
          ) : (
            <S.InvisibleIcon onClick={() => togglePasswordCheck()} />
          )}
        </S.PasswordWrapper>
        <Button buttonType="tertiary" type="submit">
          Cadastrar
        </Button>
        <S.AlreadyLogged tag="span" size="size4">
          Já tem cadastro?
          <Text tag="span" size="size4">
            Fazer login
          </Text>
        </S.AlreadyLogged>
      </S.RegisterForm>
    </S.Conatiner>
  );
};
