import { useEffect } from "react";
import { Header } from "../../components/Header";
import CardsLeft from "../../components/TrippingCard";
import { useUserContext } from "../../contexts/UserContext";
import { api } from "../../services/api";
import {
  BodyDashboard,
  MainDashboard,
  CreatePost,
  Post,
  Suggestion,
  StyledLink,
} from "./Dashboard.style";

export const Dashboard = () => {
  const { user, isPlaces, setIsPlaces } = useUserContext();

  useEffect(() => {
    async function loadUser() {
      const token: string | null = localStorage.getItem("@user: token");

      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;

          const { data } = await api.get("/posts");

          setIsPlaces(data);
        } catch (err) {
          console.error(err);
        }
      }
    }
    loadUser();
  }, []);

  return (
    <BodyDashboard>
      <Header />
      <MainDashboard>
        <section>
          <CreatePost>
            <h2>Posts</h2>
            <StyledLink to={"/addTripping"}>
              <p>Criar</p>
            </StyledLink>
          </CreatePost>
          <Post>
            <h2>Principais viagens:</h2>
            <ul>
              {isPlaces.map((postPlaces, index) => (
                <CardsLeft key={index} postPlaces={postPlaces} />
              ))}
            </ul>
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
