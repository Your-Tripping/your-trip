import EditProfile from "../../components/EditProfileModal";
import Trip from "../../components/TrippingCard";
import { UserHeader } from "../../components/UserHeader";
import { useUserContext } from "../../contexts/UserContext";
import * as S from "../Dashboard/Dashboard.style";

export const UserPage = () => {
  const idUser = localStorage.getItem("@user: id");
  const { showModal } = useUserContext();
  return (
    <>
      {showModal === "editProfile" && <EditProfile />}
      <S.BodyDashboard>
        <UserHeader />
        <S.MainDashboard>
          <section>
            <S.CreatePost>
              <h2>Posts</h2>
              <S.StyledLink to={"/addTripping"}>
                <p>Criar</p>
              </S.StyledLink>
            </S.CreatePost>

            <S.Post>
              <h2>Minhas viagens:</h2>
              <ul></ul>
            </S.Post>
          </section>
          <S.Suggestion>
            <h2>Pessoas que talvez você conheça:</h2>
            <ul>{/* sugestões aqui */}</ul>
          </S.Suggestion>
        </S.MainDashboard>
      </S.BodyDashboard>
    </>
  );
};
