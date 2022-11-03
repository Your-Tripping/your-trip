import React from "react";
import Map from "../../assets/img/Map.svg";
import YourTrip from "../../assets/img/YourTrip.svg";
import { Main, BackgroundImg, Logo, SubmitBtn, Diviser, DiviserTwo, Form, ForgotPassword, InputEmail, InputPassword, H2, OpenModal, Forgot} from "./home.style";
const LandingPage: React.FC = () => {
    return(
        <Main>
            <BackgroundImg src={Map} alt="mapa do mundo"/>
            <Logo src={YourTrip} alt="YourTrip" />
            <H2 color="grey4" fontWeight={400} tag="h2" size="size1">A mais nova rede social de viagens</H2>
            <Diviser/>
            <Form>
                <InputEmail placeholder="Digite seu e-mail" type="email"/>
                <InputPassword placeholder="Digite sua senha" type="password"/>
                <SubmitBtn buttonType="primary" type="submit">Entrar</SubmitBtn>
                <ForgotPassword>
                    <Forgot color="grey4" fontWeight={600} tag="p" size="size3">Esqueçeu sua senha?</Forgot>
                    <OpenModal buttonType="primary" type="submit">Clique aqui</OpenModal>
                </ForgotPassword>
            </Form>
            <DiviserTwo/>
            <SubmitBtn buttonType="secondary" type="submit">Quero me cadastrar</SubmitBtn>
        </Main>
    )
}

export default LandingPage;

