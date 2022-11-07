import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { iUserLogin, login } from "../../services/login";
import { iUserRegister, register } from "../../services/register";
import { iPosts } from "../../components/TrippingCard/trippingCard.style";

export interface iUser {
  accessToken: string;
  user: {
    name: string;
    imageUrl: string;
    bio: string;
    id: string;
  };
}

interface iUserContext {
  user: iUser | null;
  usersList: iUser[];
  setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
  singIn: (body: iUserLogin) => void;
  singUp: (body: iUserRegister) => void;
  editProfile: (body: iUserRegister) => void;
  followUsers: (id: string) => void;
  showModal: string | null;
  setShowModal: React.Dispatch<React.SetStateAction<string | null>>;
  isPlaces: iPosts[];
  setIsPlaces: React.Dispatch<React.SetStateAction<iPosts[]>>;
  loadUser: () => void;
}

export const UserContext = createContext<iUserContext>({} as iUserContext);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [usersList, setUsersList] = useState([] as iUser[]);
  const [showModal, setShowModal] = useState<string | null>(null);
  const [isPlaces, setIsPlaces] = useState<iPosts[]>([] as iPosts[]);

  const navigate = useNavigate();

  const singIn = async (body: iUserLogin) => {
    try {
      const data = await login(body);
      toast.success("Login concluído!");
      localStorage.setItem("@user: token", data.accessToken);
      localStorage.setItem("@user: id", data.user.id);
      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${data.accessToken}`;

      const { data: profileData } = await api.get("/posts");
      setIsPlaces(profileData);
      const { data: usersData } = await api.get("/users");
      setUsersList(usersData);
      setUser(data);
      navigate("/dashboard");
    } catch (error) {
      toast.error("Ops! Algo está errado!");
      console.log(error);
    }
  };

  const singUp = async (body: iUserRegister) => {
    // console.log(body);
    try {
      const data = await register(body);
      toast.success("Cadastro concluído, faça login para continuar!");
      setShowModal(null);
    } catch (error) {
      toast.error("Ops! Algo deu errado!");
      console.error(error);
    }
  };

  const editProfile = async (body: iUserRegister) => {
    const userId = localStorage.getItem("@user: id");
    try {
      const { data } = await api.patch(`/users/${userId}`, body);
      toast.success("Perfil Atualizado!");
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const followUsers = (id: string) => {
    try {
      api.post("/followers", {
        username: user?.user.name,
        userId: id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const loadUser = async () => {
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
  };

  return (
    <UserContext.Provider
      value={{
        user,
        usersList,
        setUser,
        singIn,
        singUp,
        editProfile,
        followUsers,
        showModal,
        setShowModal,
        isPlaces,
        setIsPlaces,
        loadUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

export const useUserContext = () => {
  const context = useContext(UserContext);
  return context;
};
