import { BsSearch } from "react-icons/bs";
import { ReactComponent as YourTrip } from "../../assets/img/YourTrip.svg";
import * as S from "./header.style";
import { useUserContext } from "../../contexts/UserContext";

export const Header = () => {
  const { user } = useUserContext();

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
        <p>Olá, {user?.user.name}!</p>
        <img src={user?.user.imageUrl} alt="Imagem" />
      </S.UserInfo>
    </S.HeaderDashboard>
  );
};
