import React from "react";
import Map from "../../assets/img/Map.svg";
import Main from "./home.style";
import YourTrip from "../../assets/img/YourTrip.svg"
import {Text} from "../../components/Text";
import { Input } from "../../components/Input/input.style";
import { Button } from "../../components/Button/button.style";
const LandingPage: React.FC = () => {
    return(
        <Main>
            <img className="map" src={Map} alt="mapa do mundo" />
            <img className="logo" src={YourTrip} alt="YourTrip" />
            <Text color="grey4" fontWeight={400} tag="h2" size="size1">A mais nova rede social de viagens</Text>
            <div className="diviser"/>
            <form>
                <Input placeholder="Digite seu e-mail" type="email"/>
                <Input placeholder="Digite sua senha" type="password"/>
                <Button buttonType="primary" type="submit">Entrar</Button>
                <div className="forgotPassword">
                    <Text color="grey4" fontWeight={600} tag="p" size="size3">Esqueçeu sua senha?</Text>
                    <Button className="openModal" buttonType="primary" type="submit">Clique aqui</Button>
                </div>
            </form>
            <div className="diviserTwo"/>
            <Button className="submitBtn" buttonType="secondary" type="submit">Quero me cadastrar</Button>
        </Main>
    )
}

export default LandingPage;