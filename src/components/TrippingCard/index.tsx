import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { iPost, useTripContext } from "../../contexts/TrippingContext";
import { useUserContext } from "../../contexts/UserContext";

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

import ImageNotFound from "../../assets/img/noImage.png"

const Trip = ({ post }: { post: iPost }) => {
  const [placeIndex, setPlaceIndex] = useState<number>(0);
  const [isLikes, setIsLikes] = useState<boolean>(true);
  const [defaultImage, setDefaultImage] = useState<boolean>(false);

  const navigate = useNavigate();

  const { setCurrentPost } = useTripContext();

  const idToken: string | null = window.localStorage.getItem("@user: id");

  const { setShowModal } = useUserContext();

  const next = () => {
    placeIndex !== post.places.length - 1 && setPlaceIndex(placeIndex + 1);
  };

  const prev = () => placeIndex > 0 && setPlaceIndex(placeIndex - 1);

  return (
    <S.LiCard>
      <S.SectionProfile className="Profile">
        <div>
          <img src={post.profileUrl} alt={post.username} />
          <h2>{post.username}</h2>
        </div>
        <div>
          {idToken == post.userId ? (
            <IoEllipsisHorizontalOutline
              onClick={() => {
                setCurrentPost(post);
                setShowModal("editTrip");
                navigate("/addTripping");
              }}
            />
          ) : null}
        </div>
      </S.SectionProfile>
      <S.SectionSlideshow>
        <h2>
          {post.title} - {post.location}
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
                placeIndex !== post.places.length - 1 ? "#079BAB" : "#CEEBEE",
            }}
            onClick={next}
          />
          <img
            src={defaultImage ? ImageNotFound : post.places[placeIndex].image}
            alt={post.places[placeIndex].name}
            onError={() =>
              setDefaultImage(true)
            }
          />
          <div>
            <GrMap />
            <p>{post.country}</p>
          </div>
        </div>

        <h3>{post.places[placeIndex].name}</h3>
        <p>{post.places[placeIndex].description}</p>
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

export default Trip;
