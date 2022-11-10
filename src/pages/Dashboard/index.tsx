import { useTripContext } from "../../contexts/TrippingContext";
import { useUserContext } from "../../contexts/UserContext";

import Followers from "../../components/FollowersCard";
import Header from "../../components/Header";
import Trip from "../../components/TrippingCard";
import * as S from "./Dashboard.style";

const Dashboard = () => {
  const { showRandom, posts, randomPost, setShowRandom } = useTripContext();
  const { usersList, user } = useUserContext();

  return (
    // <S.BodyDashboard>

    // </S.BodyDashboard>

    <>
      <Header />
      <S.MainDashboard>
        <S.Container>
          <S.MainSection>
            <S.CreatePost>
              <h2>Posts</h2>
              <S.StyledLink to="/addTripping">
                <p>Criar</p>
              </S.StyledLink>
            </S.CreatePost>
            <S.Post>
              <h2>
                {showRandom ? "Viagem aleatória:" : "Principais viagens:"}
              </h2>
              <ul>
                {showRandom
                  ? [randomPost].map((post, index) => (
                      <Trip key={index} post={post} />
                    ))
                  : posts.map((post, index) => (
                      <Trip key={index} post={post} />
                    ))}
              </ul>
            </S.Post>
          </S.MainSection>
          <S.MainAside>
            <S.Suggestion>
              <h2>Pessoas que talvez você conheça:</h2>
              <ul>
                {usersList.map(
                  (follower, index) =>
                    follower.name !== user?.user.name && (
                      <Followers key={index} follower={follower} />
                    )
                )}
              </ul>
            </S.Suggestion>
            <div>
              <S.RandomBtn
                onClick={() => {
                  if (showRandom === true) {
                    setShowRandom(false);
                    return;
                  }
                  setShowRandom(true);
                }}
              >
                {showRandom ? "Principais viagens" : "Viagem aleatória"}
              </S.RandomBtn>
            </div>
          </S.MainAside>
        </S.Container>
      </S.MainDashboard>
    </>
  );
};

export default Dashboard;
