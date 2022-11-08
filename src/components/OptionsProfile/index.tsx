import * as S from "./OptionsProfile.styles"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { useUserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";

export const OptionsProfile = ({ setProfile }: any) => {
  const { handleFormDashboard } = useUserContext();

  return (
    <S.DivProfile>
      <Link to={"/userProfile"}>Meu perfil</Link>
      <button onClick={handleFormDashboard}>Sair</button>
      <button onClick={() => setProfile(false)}>{<AiOutlineCloseCircle/>}</button>
    </S.DivProfile>
  );
};
