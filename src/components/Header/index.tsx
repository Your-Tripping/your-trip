import { ReactComponent as YourTrip } from "../../assets/img/YourTrip.svg";
import * as S from "./header.style";
import { useUserContext } from "../../contexts/UserContext";
import SearchBar from "../SearchBar";
import { useState } from "react";
import OptionsProfile from "../OptionsProfile";

export const Header = () => {
  const { user } = useUserContext();
  const [profile, setProfile] = useState<boolean>(false);

  return (
    <S.HeaderDashboard>
      <YourTrip className="icon" />
      <SearchBar />
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
