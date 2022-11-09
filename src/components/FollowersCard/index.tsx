import { useContext, useEffect, useState } from "react";
import { iFollower, iPost, useTripContext } from "../../contexts/TrippingContext";
import { iUserInfo, useUserContext } from "../../contexts/UserContext";
import * as S from "./followersCard.style";
interface iFollow {
  follower: iUserInfo;
}
const Followers = ({ follower }: iFollow) => {
  const { followUser, follow, unfollow } = useTripContext();
  const { user } = useUserContext();
  const [following, setFollowing] = useState<boolean>(false)
  
  const userId = (foll: iFollower | undefined) => {
    if(foll?.followername === user?.user.name) {
      return foll
    }
  };  
  const hadleFollowing = () => {
    const currentId = followUser.filter(userId)[0]?.id 
    
    if(currentId && following){
      unfollow(currentId as number)
      setFollowing(false)
    }else{
      follow({
        userId: follower.id,
        username: follower.name,
        followername: user?.user.name,
      })
      setFollowing(true);
    }
    
  }

  return (
    <S.LiCard>
      <S.DivUser>
        <img src={follower.imageUrl} alt={follower.name} />
        <h2>{follower.name}</h2>
      </S.DivUser>
      <S.DivSeguir>
        <button  onClick={hadleFollowing}>{following ? "seguindo" : "seguir"}</button>
      </S.DivSeguir>
    </S.LiCard>
  );
};
export default Followers;
