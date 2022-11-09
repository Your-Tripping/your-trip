import EditProfile from "../../components/EditProfileModal";
import Trip from "../../components/TrippingCard";
import { ReactComponent as YourTrip } from "../../assets/img/YourTrip.svg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useTripContext } from "../../contexts/TrippingContext";
import { useUserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";
import * as S from "../Dashboard/Dashboard.style";
import * as T from "./userProfile.style";

export const UserPage = () => {
  const { showModal, setShowModal, user, handleFormDashboard } =
    useUserContext();
  const { userPosts } = useTripContext();

  console.log(userPosts)
  return (
    <>
      <T.HeaderPage>
        <YourTrip />
        <div>
          <button onClick={handleFormDashboard}>Sair</button>
          <Link to={"/dashboard"}>
            <AiOutlineArrowRight />
          </Link>
        </div>
      </T.HeaderPage>
      {showModal === "editProfile" && <EditProfile />}
      <T.MainUserPage>
        <T.informationUser>
          <img src={user?.user.imageUrl} alt="Imagem" />
          <h2>{user?.user.name}</h2>
          <p>{user?.user.bio}</p>
          <T.EditProfile
            onClick={() => {
              setShowModal("editProfile");
            }}
          >
            Editar perfil
          </T.EditProfile>
        </T.informationUser>
        <section>
          <S.CreatePost>
            <h2>Posts</h2>
            <S.StyledLink to="/addTripping">
              <p>Criar</p>
            </S.StyledLink>
          </S.CreatePost>
          <S.Post>
            <h2>Minhas viagens:</h2>
            {userPosts.length === 0 ? (
              <p>Você não possui nenhum roteiro de viagem ainda :(</p>
            ) : (
              <ul>
                {userPosts.map((post, index) => (
                  <Trip key={index} post={post} />
                ))}
              </ul>
            )}
          </S.Post>
        </section>
      </T.MainUserPage>
    </>
  );
};
