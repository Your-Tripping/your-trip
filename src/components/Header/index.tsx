import { BsSearch } from "react-icons/bs";
import { ReactComponent as YourTrip } from "../../assets/img/YourTrip.svg";
import * as S from "./header.style";
import { useUserContext } from "../../contexts/UserContext";
import { useState } from "react";
import { OptionsProfile } from "../OptionsProfile";

export const Header = () => {
  const { user } = useUserContext();
  const [profile, setProfile] = useState<boolean>(false);

  return (
    <S.HeaderDashboard>
      <YourTrip />
      <S.FormSearch>
        <input
          type="search"
          name="searchTrip"
          id="searchTrip"
          placeholder="Digite aqui sua pesquisa.."
        />
        <button type="submit">
          <BsSearch />
        </button>
      </S.FormSearch>
      <S.UserInfo>
        <div>
          <section>
            <p>Olá, {user?.user.name}</p>
            <button onClick={() => setProfile(true)} type="button">
              <img src={user?.user.imageUrl} alt="Imagem" />
            </button>
          </section>
          {profile && <OptionsProfile setProfile={setProfile} />}
        </div>
      </S.UserInfo>
    </S.HeaderDashboard>
  );
};
