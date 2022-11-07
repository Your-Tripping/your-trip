import { useEffect } from "react";
import { Header } from "../../components/Header";
import Trip from "../../components/TrippingCard";
import { useUserContext } from "../../contexts/UserContext";
import * as S from "./Dashboard.style";

export const Dashboard = () => {
  const { isPlaces, loadUser } = useUserContext();

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <S.BodyDashboard>
      <Header />
      <S.MainDashboard>
        <section>
          <S.CreatePost>
            <h2>Posts</h2>
            <S.StyledLink to={"/addTripping"}><p>Criar</p></S.StyledLink>
          </S.CreatePost>
          <S.Post>
            <h2>Principais viagens:</h2>
            <ul>{isPlaces.map((post, index) => <Trip key={index} post={post} />)}</ul>
          </S.Post>
        </section>
        <S.Suggestion>
          <h2>Pessoas que talvez você conheça:</h2>
          <ul>{/* sugestões aqui */}</ul>
        </S.Suggestion>
      </S.MainDashboard>
    </S.BodyDashboard>
  );
};
