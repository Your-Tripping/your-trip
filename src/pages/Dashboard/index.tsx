import { Header } from "../../components/Header";
import * as S from "./Dashboard.style";

export const Dashboard = () => {
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
            <ul>{/* post aqui */}</ul>
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
