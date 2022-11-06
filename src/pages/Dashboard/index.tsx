import { Header } from "../../components/Header";
import {
  BodyDashboard,
  MainDashboard,
  CreatePost,
  Post,
  Suggestion,
  StyledLink,
} from "./Dashboard.style";

export const Dashboard = () => {
  return (
    <BodyDashboard>
      <Header />
      <MainDashboard>
        <section>
          <CreatePost>
            <h2>Posts</h2>
            <StyledLink to={"/addTripping"}><p>Criar</p></StyledLink>
          </CreatePost>
          <Post>
            <h2>Principais viagens:</h2>
            <ul>{/* post aqui */}</ul>
          </Post>
        </section>
        <Suggestion>
          <h2>Pessoas que talvez você conheça:</h2>
          <ul>{/* sugestões aqui */}</ul>
        </Suggestion>
      </MainDashboard>
    </BodyDashboard>
  );
};
