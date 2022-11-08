import { iUserInfo } from "../../contexts/UserContext";
import * as S from "./followersCard.style";
interface iFollow {
  follower: iUserInfo;
}
const Followers = ({ follower }: iFollow) => {
  return (
    <S.LiCard>
      <S.DivUser>
        <img src={follower.imageUrl} alt={follower.name} />
        <h2>{follower.name}</h2>
      </S.DivUser>
      <S.DivSeguir>
        <button>Seuir</button>
      </S.DivSeguir>
    </S.LiCard>
  );
};
export default Followers;
