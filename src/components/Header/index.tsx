import { BsSearch } from "react-icons/bs";
import { ReactComponent as YourTrip } from "../../assets/img/YourTrip.svg";
import * as S from "./header.style";

export const Header = () => {
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
        <p>Olá, {"Carlos"}!</p>
        <img src="" alt="imagem" />
      </S.UserInfo>
    </S.HeaderDashboard>
  );
};
