import { BsSearch } from "react-icons/bs";
import { ReactComponent as YourTrip } from "../../assets/img/YourTrip.svg";
import { useUserContext } from "../../contexts/UserContext";
import {
  EditProfile,
  FormSearch,
  HeaderDashboard,
  UserInfo,
} from "./header.style";

export const UserHeader = () => {
  const { user } = useUserContext();

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
        <p>Olá, {user?.user.name}!</p>
        <img src="" alt={user?.user.imageUrl} />
        <EditProfile>Editar perfil</EditProfile>
      </UserInfo>
    </HeaderDashboard>
  );
};
