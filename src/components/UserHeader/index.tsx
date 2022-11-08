import { BsSearch } from "react-icons/bs";
import { ReactComponent as YourTrip } from "../../assets/img/YourTrip.svg";
import { useUserContext } from "../../contexts/UserContext";
import * as S from "./userheader.style";

export const UserHeader = () => {
  const { user, setShowModal } = useUserContext();

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
        <img src={user?.user.imageUrl} alt="" />
        <S.EditProfile
          onClick={() => {
            setShowModal("editProfile");
          }}
        >
          Editar perfil
        </S.EditProfile>
      </S.UserInfo>
    </S.HeaderDashboard>
  );
};
