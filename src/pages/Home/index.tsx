import React from "react";
import Map from "../../assets/img/Map.svg";
import YourTrip from "../../assets/img/YourTrip.svg";
import SingInForm from "../../components/SingInForm";
import { useUserContext } from "../../contexts/UserContext";
import { Main, BackgroundImg, Logo, Diviser, H2} from "./home.style";
const LandingPage: React.FC = () => {
    const {singIn} = useUserContext()

    return(
        <Main>
            <BackgroundImg src={Map} alt="mapa do mundo"/>
            <Logo src={YourTrip} alt="YourTrip" />
            <H2 color="grey4" fontWeight={400} tag="h2" size="size1">A mais nova rede social de viagens</H2>
            <Diviser/>
            <SingInForm/>
        </Main>
    )
}

export default LandingPage;

