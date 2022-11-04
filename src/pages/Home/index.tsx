import React from "react";
import Map from "../../assets/img/Map.svg";
import YourTrip from "../../assets/img/YourTrip.svg";
import * as Style from "./home.style";
import { ModalRegister } from "../../components/SingUpForm";
import { useUserContext } from "../../contexts/UserContext";
const LandingPage: React.FC = () => {
    const {modal, setModal} = useUserContext()
    const RenderModal: React.FC = () => {if(modal===true){return <ModalRegister/>} return null}
    if(modal === true){
        return(
        <Style.Main>
            <Style.BackgroundImg src={Map} alt="mapa do mundo"/>
            <ModalRegister/> 
        </Style.Main>
        )
    }
    return(
        <Style.Main>
            <Style.BackgroundImg src={Map} alt="mapa do mundo"/>
            <Style.Logo src={YourTrip} alt="YourTrip" />
            <Style.H2 color="grey4" fontWeight={400} tag="h2" size="size1">A mais nova rede social de viagens</Style.H2>
            <Style.Diviser/>
            <Style.Form>
                <Style.InputEmail placeholder="Digite seu e-mail" type="email"/>
                <Style.InputPassword placeholder="Digite sua senha" type="password"/>
                <Style.SubmitBtn buttonType="primary" type="submit">Entrar</Style.SubmitBtn>
                <Style.ForgotPassword>
                    <Style.Forgot color="grey4" fontWeight={600} tag="p" size="size3">Esqueçeu sua senha?</Style.Forgot>
                    <Style.OpenModal buttonType="primary">Clique aqui</Style.OpenModal>
                </Style.ForgotPassword>
            </Style.Form>
            <Style.DiviserTwo/>
            <Style.BtnRegister buttonType="secondary" type="submit" onClick={() => {setModal(true)}}>Quero me cadastrar</Style.BtnRegister>
            <RenderModal/>
        </Style.Main>
    )
}

export default LandingPage;

