import { BsSearch } from "react-icons/bs";
import { ReactComponent as YourTrip } from "../../assets/img/YourTrip.svg";
import  user from "../../assets/img/user.svg";
import { FormSearch, HeaderDashboard, UserInfo } from "./header.style";

export const Header = () => {
  return (
    <HeaderDashboard>
      <YourTrip />
      <FormSearch>
        <input
          type="search"
          name="searchTrip"
          id="searchTrip"
          placeholder="Digite aqui sua pesquisa.."
        />
        <button type="submit">
          <BsSearch />
        </button>
      </FormSearch>
      <UserInfo>
        <p>Olá, {"Carlos"}!</p>
        <img src={user} alt="imagem" />
      </UserInfo>
    </HeaderDashboard>
  );
};
