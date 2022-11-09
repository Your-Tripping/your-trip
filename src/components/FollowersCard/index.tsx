import { iPost, useTripContext } from "../../contexts/TrippingContext";
import { iUserInfo, useUserContext } from "../../contexts/UserContext";
import * as S from "./followersCard.style";
import perfil from "../../assets/img/perfil.png";
interface iFollow {
  follower: iUserInfo;
}
const Followers = ({ follower }: iFollow) => {
  const { followUser, follow, unfollow } = useTripContext();
  const { user } = useUserContext();

  const userId = ({ username }: iPost) => username === follower.name;

  const hadleFollower = () =>
    followUser.length > 0 &&
    unfollow(followUser.filter(userId)[0].id as string | number);

  return (
    <S.LiCard>
      <S.DivUser>
        <img src={follower.imageUrl} alt={follower.name} onError={(event:any)=>{event.target.src = perfil}}/>
        <h2>{follower.name}</h2>
      </S.DivUser>
      <S.DivSeguir>
        {followUser.filter(userId).length === 1 ? (
          <button onClick={hadleFollower}>Seguindo</button>
        ) : (
          <button
            className="follow"
            onClick={() =>
              follow({
                userId: follower.id,
                username: follower.name,
                followername: user?.user.name,
              })
            }
          >
            Seguir
          </button>
        )}
      </S.DivSeguir>
    </S.LiCard>
  );
};
export default Followers;
