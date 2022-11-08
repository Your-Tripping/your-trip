import { BsSearch } from "react-icons/bs";
import { ReactComponent as YourTrip } from "../../assets/img/YourTrip.svg";
import * as S from "./header.style";
import { useUserContext } from "../../contexts/UserContext";
import SearchBar from "../SearchBar";

export const Header = () => {
  const { user } = useUserContext();

  return (
    <S.HeaderDashboard>
      <YourTrip />
      <SearchBar />
      <S.UserInfo>
        <p>Olá, {user?.user.name}!</p>
        <img src={user?.user.imageUrl} alt="Imagem" />
      </S.UserInfo>
    </S.HeaderDashboard>
  );
};
