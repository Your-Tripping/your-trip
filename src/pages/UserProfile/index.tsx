import EditProfile from "../../components/EditProfileModal";
import Trip from "../../components/TrippingCard";
import { UserHeader } from "../../components/UserHeader";
import { useTripContext } from "../../contexts/TrippingContext";
import { useUserContext } from "../../contexts/UserContext";
import * as S from "../Dashboard/Dashboard.style";

export const UserPage = () => {
  const { showModal, usersList } = useUserContext();
  const { userPosts } = useTripContext();
  return (
    <>
      {showModal === "editProfile" && <EditProfile />}
      <S.BodyDashboard>
        <UserHeader />
        <S.MainDashboard>
          <section>
            <S.CreatePost>
              <h2>Posts</h2>
              <S.StyledLink>
                <p>Criar</p>
              </S.StyledLink>
            </S.CreatePost>

            <S.Post>
              <h2>Minhas viagens:</h2>
              <ul>
                {userPosts.map((post, index) => (
                  <Trip key={index} post={post} />
                ))}
              </ul>
            </S.Post>
          </section>
          <S.Suggestion>
            <h2>Pessoas que talvez você conheça:</h2>
            <ul>
              {/* {usersList.map((foll, index) => (
                <Followers key={index} follower={foll} />
              ))} */}
            </ul>
          </S.Suggestion>
        </S.MainDashboard>
      </S.BodyDashboard>
    </>
  );
};
