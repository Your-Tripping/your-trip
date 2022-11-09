import React from "react";
import * as S from "./searchUserCard.style";
import { iUserInfo, useUserContext } from "../../contexts/UserContext";
import { iFollower, useTripContext } from "../../contexts/TrippingContext";

const SearchUserCard = ({ user }: { user: iUserInfo }) => {
  const idToken: string | null = window.localStorage.getItem("@user: id");

  const { followUser, follow, unfollow } = useTripContext();
  const { user : loggedUser } = useUserContext();
  
  const userId = ({ username }: iFollower) => username === user.name;
  const isFollowing = followUser.some(
    (element) =>
      element.username === user.name &&
      element.followername === loggedUser?.user.name
  );
  const hadleFollower = () =>
    followUser.length > 0 &&
    unfollow(followUser.filter(userId)[0].id as string | number);

  return (
    <S.UserCard>
      <S.SectionProfile className="Profile">
        <div>
          <img src={user.imageUrl} alt={user.name} />
          <h2>{user.name}</h2>
        </div>
        <div>
        {idToken == user.id ? null : isFollowing ? (
          <button onClick={hadleFollower}>Seguindo</button>
        ) : (
          <button
            className="follow"
            onClick={() =>
              follow({
                userId: user.id,
                username: user.name,
                followername: loggedUser?.user.name,
              })
            }
          >
            Seguir
          </button>
        )}
        </div>
      </S.SectionProfile>
      <S.HalfLine />
      <S.UserBio>{user.bio}</S.UserBio>
    </S.UserCard>
  );
};

export default SearchUserCard;
