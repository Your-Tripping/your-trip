import * as S from "./trippingCard.style";
import {
  AiOutlineCaretLeft,
  AiOutlineCaretRight,
  AiFillHeart,
  AiOutlineHeart,
} from "react-icons/ai";
import { TfiCommentAlt } from "react-icons/tfi";
import { RiSendPlaneFill } from "react-icons/ri";
import { IoEllipsisHorizontalOutline } from "react-icons/io5";
import { GrMap } from "react-icons/gr";
import { Input } from "../Input/input.style";
import { useState } from "react";

const CardsLeft = ({ postPlaces }: any) => {
  const [placeIndex, setPlaceIndex] = useState(0);
  const [isLikes, setIsLikes] = useState(true);

  const next = () => {
    placeIndex !== postPlaces.places.length - 1 &&
      setPlaceIndex(placeIndex + 1);
  };

  const prev = () => placeIndex > 0 && setPlaceIndex(placeIndex - 1);

  return (
    <S.LiCard>
      <S.SectionProfile className="Profile">
        <div>
          <img src={postPlaces.profileUrl} alt={postPlaces.username} />
          <h2>{postPlaces.username}</h2>
        </div>
        <div>
          <button>Seguir</button>
          <IoEllipsisHorizontalOutline />
        </div>
      </S.SectionProfile>
      <S.SectionSlideshow>
        <h2>
          {postPlaces.title} - {postPlaces.location}
        </h2>
        <div>
          <AiOutlineCaretLeft
            style={{
              color: placeIndex !== 0 ? "#079BAB" : "#CEEBEE",
            }}
            onClick={prev}
          />
          <AiOutlineCaretRight
            style={{
              color:
                placeIndex !== postPlaces.places.length - 1
                  ? "#079BAB"
                  : "#CEEBEE",
            }}
            onClick={next}
          />
          <img
            src={postPlaces.places[placeIndex].image}
            alt={postPlaces.places[placeIndex].name}
          />
          <div>
            <GrMap />
            <p>{postPlaces.country}</p>
          </div>
        </div>

        <h3>{postPlaces.places[placeIndex].name}</h3>
        <p>{postPlaces.places[placeIndex].description}</p>
      </S.SectionSlideshow>

      <S.SectionLinks>
        <div>
          {isLikes ? (
            <AiOutlineHeart
              style={{ color: "#292929" }}
              onClick={() => setIsLikes(!isLikes)}
            />
          ) : (
            <AiFillHeart
              style={{ color: "#FF1E1E" }}
              onClick={() => setIsLikes(!isLikes)}
            />
          )}

          <p>Likes</p>
          <span>3</span>
        </div>
        <div>
          <TfiCommentAlt />
          <p>comments</p>
          <span>3</span>
        </div>
      </S.SectionLinks>

      <S.SectionLomments>
        <Input placeholder="Digite aqui sua pesquisa.." />
        <RiSendPlaneFill />
      </S.SectionLomments>
    </S.LiCard>
  );
};

export default CardsLeft;
