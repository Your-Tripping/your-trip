import { useUserContext } from "../../contexts/UserContext";
import * as Style from "../../pages/Home/home.style";
import { RegisterForm, Title, Label, Exit, NewText, NewDiviser } from "./singUpForm.style";
import { Error } from "../ErrorMessage/formError.style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {formSchemaRegister} from "../../validation/register"
import { iUserRegister } from "../../services/register";
export const ModalRegister: React.FC = () => {
    const {register, handleSubmit, formState: { errors }} = useForm<iUserRegister>({
        resolver: yupResolver(formSchemaRegister)
    })
    const {singUp, setModal} = useUserContext()
    return(
        <RegisterForm onSubmit={handleSubmit(singUp)}>
            <div>
                <Exit onClick={()=>{setModal(false)}}>x</Exit>
                <Title color="grey4" fontWeight={700} tag="h2" size="size1">Crie sua conta</Title>
                <NewText color="grey4" fontWeight={400} tag="p" size="size1">Rapido e grátis, vamos nessa</NewText>
                <NewDiviser/>
            </div>
            <Label htmlFor="name">Nome</Label>
            <Error>{errors?.name?.message}</Error>
            <Style.InputEmail id="name" placeholder="Digite seu nome" type="text" {...register("name")}/>
            <Label htmlFor="email">Email</Label>
            <Error>{errors?.email?.message}</Error>
            <Style.InputEmail id="email" placeholder="Digite seu e-mail" type="email" {...register("email")}/>
            <Label htmlFor="img">Imagem</Label>
            <Error>{errors?.imageUrl?.message}</Error>
            <Style.InputEmail id="img" placeholder="Foto do Perfil" type="text" {...register("imageUrl")}/>
            <Label htmlFor="bio">Bio</Label>
            <Error>{errors?.bio?.message}</Error>
            <Style.InputEmail id="bio" placeholder="Fale sobre você" type="text" {...register("bio")}/>
            <Label htmlFor="password">Senha</Label>
            <Error>{errors?.password?.message}</Error>
            <Style.InputEmail id="password" placeholder="Digite sua senha" type="password" {...register("password")}/>
            <Label htmlFor="passwordConfirmation">Confirmar Senha</Label>
            <Error>{errors?.passwordConfirmation?.message}</Error>
            <Style.InputEmail id="passwordConfirmation" placeholder="Digite sua senha novamente" type="password" {...register("passwordConfirmation")}/>
            <Style.SubmitBtn buttonType="primary" type="submit">Cadastrar</Style.SubmitBtn>
            <Style.ForgotPassword>
            <Style.Forgot color="grey4" fontWeight={600} tag="p" size="size3">Já tem cadastro?</Style.Forgot>
                <Style.OpenModal buttonType="primary" type="submit" onClick={()=>{setModal(false)}}>Fazer login</Style.OpenModal>
            </Style.ForgotPassword>
        </RegisterForm>
    )
}
