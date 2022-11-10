import { ReactComponent as YourTrip } from "../../assets/img/YourTrip.svg";
import * as S from "./header.style";
import { useUserContext } from "../../contexts/UserContext";
import SearchBar from "../SearchBar";
import { useState } from "react";
import OptionsProfile from "../OptionsProfile";

const Header = () => {
  const { user } = useUserContext();
  const [profile, setProfile] = useState<boolean>(false);

  return (
    <S.HeaderDashboard>
      <S.Container>
        <YourTrip className="icon" />
        <SearchBar />
        <S.UserInfo>
          <div>
            <p>Olá, {user?.user.name}</p>
            <button onClick={() => setProfile(true)} type="button">
              <img src={user?.user.imageUrl} alt="Imagem" />
            </button>
          </div>
          {profile && <OptionsProfile setProfile={setProfile} />}
        </S.UserInfo>
      </S.Container>
    </S.HeaderDashboard>
  );
};

export default Header;
