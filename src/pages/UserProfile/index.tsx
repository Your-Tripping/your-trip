import EditProfile from "../../components/EditProfileModal";
import Trip from "../../components/TrippingCard";
import { ReactComponent as YourTrip } from "../../assets/img/YourTrip.svg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useTripContext } from "../../contexts/TrippingContext";
import { useUserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";
import * as S from "./userProfile.style";
import perfil from "../../assets/img/perfil.png"
export const UserPage = () => {
  const { showModal, setShowModal, user, handleFormDashboard } =
    useUserContext();
  const { userPosts, followUser } = useTripContext();
  return (
    <>
      <S.HeaderPage>
        <YourTrip />
        <div>
          <button onClick={handleFormDashboard}>Sair</button>
          <Link to={"/dashboard"}>
            <AiOutlineArrowRight />
          </Link>
        </div>
      </S.HeaderPage>
      {showModal === "editProfile" && <EditProfile />}
      <S.MainUserPage>
        <S.informationUser>
          <img src={user?.user.imageUrl} alt="Imagem" onError={(event:any)=>{event.target.src = perfil}}/>
          <h2>{user?.user.name}</h2>
          <p>{followUser.length} seguidores</p>
          <p>{user?.user.bio}</p>
          <S.EditProfile
            onClick={() => {
              setShowModal("editProfile");
              document.body.style.position = "fixed";
              document.body.style.padding = "0 15px 0 0";
            }}
          >
            Editar perfil
          </S.EditProfile>
        </S.informationUser>
        <section>
          <S.Posts>
            <h2>Posts: </h2>
          </S.Posts>
          {userPosts.length === 0 ? (
            <p>Você não possui nenhum roteiro de viagem ainda :(</p>
          ) : (
            <ul>
              {userPosts.map((post, index) => (
                <Trip key={index} post={post} />
              ))}
            </ul>
          )}
        </section>
      </S.MainUserPage>
    </>
  );
};
