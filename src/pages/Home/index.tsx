import React from "react";
import Map from "../../assets/img/Map.svg";
import YourTrip from "../../assets/img/YourTrip.svg";
import SingInForm from "../../components/SingInForm";
import * as Style from "./home.style";
import { SingUpForm } from "../../components/SingUpForm";
import { useUserContext } from "../../contexts/UserContext";
import { url } from "inspector";
const LandingPage: React.FC = () => {
  const { showModal } = useUserContext();
  return (
    <Style.Main>
      <Style.Logo src={YourTrip} alt="YourTrip" />
      <Style.H2 color="grey4" fontWeight={400} tag="h2" size="size1">
        A mais nova rede social de viagens
      </Style.H2>
      <Style.Diviser />
      <SingInForm />
      { showModal === "singUp" && <SingUpForm/>}
    </Style.Main>
  );
};

export default LandingPage;
