import { iPost, useTripContext } from "../../contexts/TrippingContext";
import { iUserInfo, useUserContext } from "../../contexts/UserContext";
import * as S from "./followersCard.style";
interface iFollow {
  follower: iUserInfo;
}
const Followers = ({ follower }: iFollow) => {
  const { followUser, follow, unfollow } = useTripContext();
  const { user } = useUserContext();

  const userId = ({ userId }: iPost) => userId === follower.id;

  console.log(follower.id);

  return (
    <S.LiCard>
      <S.DivUser>
        <img src={follower.imageUrl} alt={follower.name} />
        <h2>{follower.name}</h2>
      </S.DivUser>
      <S.DivSeguir>
        {followUser.filter(userId).length === 1 ? (
          // <button onClick={() => unfollow(follower.id)}>Seguindo</button>
          <button>Seguindo</button>
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
            Seuir
          </button>
        )}
      </S.DivSeguir>
    </S.LiCard>
  );
};
export default Followers;
