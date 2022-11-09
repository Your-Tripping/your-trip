import { iFollower, useTripContext } from "../../contexts/TrippingContext";
import { iUserInfo, useUserContext } from "../../contexts/UserContext";
import * as S from "./followersCard.style";

const Followers = ({ follower }: {follower: iUserInfo}) => {
  const { followUser, follow, unfollow } = useTripContext();
  const { user } = useUserContext();
  
  const userId = ({ username }: iFollower) => username === follower.name;
  const isFollowing = followUser.some(
    (element) =>
      element.username === follower.name &&
      element.followername === user?.user.name
  );
  const hadleFollower = () =>
    followUser.length > 0 &&
    unfollow(followUser.filter(userId)[0].id as string | number);
  return (
    <S.LiCard>
      <S.DivUser>
        <img src={follower.imageUrl} alt={follower.name} />
        <h2>{follower.name}</h2>
      </S.DivUser>
      <S.DivSeguir>
        {isFollowing ? (
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