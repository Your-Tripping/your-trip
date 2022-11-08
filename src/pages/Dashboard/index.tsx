import { useNavigate } from "react-router-dom";
import { useTrippingContext } from "../../contexts/TrippingContext";
import { useUserContext } from "../../contexts/UserContext";

import Followers from "../../components/FollowersCard";
import { Header } from "../../components/Header";
import Trip from "../../components/TrippingCard";

import * as S from "./Dashboard.style";

export const Dashboard = () => {
  const { usersList, setShowModal } = useUserContext();
  const {showRandom, posts, randomPost, setShowRandom} = useTrippingContext()

  const navigate = useNavigate();

  return (
    <S.BodyDashboard>
      <Header />
      <S.MainDashboard>
        <section>
          <S.CreatePost>
            <h2>Posts</h2>
            <S.StyledLink
              onClick={() => {
                setShowModal("addTrip");
                navigate("/addTripping");
              }}
            >
              <p>Criar</p>
            </S.StyledLink>
          </S.CreatePost>
          <S.Post>
            <h2>{showRandom ? false : "Principais viagens:"}</h2>
            <ul>
              {showRandom
                ? false
                : posts.map((post, index) => (
                    <Trip key={index} post={post} />
                  ))}
            </ul>
            <h2>{showRandom ? "Viagem aleatória:" : false}</h2>
            <ul>
              {showRandom
                ? [randomPost].map((post: any, index: any) => (
                    <Trip key={index} post={post} />
                  ))
                : false}
            </ul>
          </S.Post>
        </section>
        <S.Container>
          <S.Suggestion>
            <h2>Pessoas que talvez você conheça:</h2>
            <ul>
              {usersList.map((foll, index) => (
                <Followers key={index} foll={foll} />
              ))}
            </ul>
          </S.Suggestion>
          <div>
            <S.RandomBtn
              onClick={() => {
                setShowRandom(true);
              }}
            >
              Viagem aleatória
            </S.RandomBtn>
          </div>
        </S.Container>
      </S.MainDashboard>
    </S.BodyDashboard>
  );
};
