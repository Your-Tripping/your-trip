import React from "react";
import * as S from "./searchUserCard.style";
import { IoEllipsisHorizontalOutline } from "react-icons/io5";
import { iUserInfo } from "../../contexts/UserContext";

const SearchUserCard = ({ user }: { user: iUserInfo }) => {
  return (
    <S.UserCard>
      <S.SectionProfile className="Profile">
        <div>
          <img src={user.imageUrl} alt={user.name} />
          <h2>{user.name}</h2>
        </div>
        <div>
          <button>Seguir</button>
          <IoEllipsisHorizontalOutline />
        </div>
      </S.SectionProfile>
      <S.HalfLine />
      <S.UserBio>{user.bio}</S.UserBio>
    </S.UserCard>
  );
};

export default SearchUserCard;
