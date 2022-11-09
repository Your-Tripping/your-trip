import React from "react";
import { useUserContext } from "../../contexts/UserContext";

import YourTrip from "../../assets/img/YourTrip.svg";
import SingInForm from "../../components/SingInForm";
import { SingUpForm } from "../../components/SingUpForm";
import Loading from "../../components/Loading";
import * as Style from "./home.style";

const LandingPage: React.FC = () => {
  const { showModal, loading } = useUserContext();
  return (
    <Style.Main>
      <Style.Logo src={YourTrip} alt="YourTrip" />
      <Style.H2 color="grey4" fontWeight={400} tag="h2" size="size1">
        A mais nova rede social de viagens
      </Style.H2>
      <Style.Diviser />
      <SingInForm />
      {showModal === "singUp" && <SingUpForm />}
      {loading && <Loading />}
    </Style.Main>
  );
};

export default LandingPage;
