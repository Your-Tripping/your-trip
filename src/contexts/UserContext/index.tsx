import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { iUserLogin, login } from "../../services/login";
import { iUserRegister, register } from "../../services/register";
import { iPosts } from "../../components/TrippingCard/trippingCard.style";
import { profile } from "console";
import { boolean } from "yup";
import { TrippingContext } from "../TrippingContext";

export interface iUser {
  accessToken: string;
  user: {
    name: string;
    imageUrl: string;
    bio: string;
    id: string;
  };
}

export interface iGeneralUser {
  name: string;
  imageUrl: string;
  bio: string;
  id: string;
}

interface iUserContext {
  user: iUser | null;
  usersList: iGeneralUser[];
  setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
  singIn: (body: iUserLogin) => void;
  singUp: (body: iUserRegister) => void;
  editProfile: (body: iUserRegister) => void;
  followUsers: (id: string) => void;
  showModal: string | null;
  setShowModal: React.Dispatch<React.SetStateAction<string | null>>;
  loading: boolean;
  isPlaces: iPosts[];
  setIsPlaces: React.Dispatch<React.SetStateAction<iPosts[]>>;
  loadUser: () => void;
  randomPost: any;
  showRandom: boolean;
  setShowRandom: React.Dispatch<React.SetStateAction<true | false>>;
}

export const UserContext = createContext<iUserContext>({} as iUserContext);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [usersList, setUsersList] = useState([] as iGeneralUser[]);
  const [showModal, setShowModal] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isPlaces, setIsPlaces] = useState<iPosts[]>([] as iPosts[]);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const token = window.localStorage.getItem("@user: token");
  const navigate = useNavigate();

  const { cachePosts } = useContext(TrippingContext);

  const singIn = async (body: iUserLogin) => {
    try {
      const data = await login(body);
      localStorage.setItem("@user: token", data.accessToken);
      localStorage.setItem("@user: id", data.user.id);
      cachePosts();
      // const { data: profileData } = await api.get("/posts");
      // setIsPlaces(profileData);
      const { data: usersData } = await api.get("/users");
      setUsersList(usersData);
      setUser(data);
      toast.success("Login concluído!");
      setIsAuthenticated(true);
    } catch (error) {
      toast.error("Ops! Algo está errado!");
      console.log(error);
    }
  };

  const singUp = async (body: iUserRegister) => {
    try {
      const data = await register(body);
      toast.success("Cadastro concluído, faça login para continuar!");
      setShowModal(null);
    } catch (error) {
      toast.error("Ops! Algo deu errado!");
      console.error(error);
    }
  };

  useEffect(() => {
    const authenticated = () => {
      const token = window.localStorage.getItem("@user: token");
      token && isAuthenticated && navigate(`/dashboard`);
    };
    authenticated();
  }, [isAuthenticated]);

  useEffect(() => {
    const autoLogin = async () => {
      const id = localStorage.getItem("@user: id");
      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;
          const { data } = await api.get(`/users/${id}`);
          setUser({
            ...user,
            accessToken: data.password,
            user: {
              name: data.name,
              imageUrl: data.imageUrl,
              bio: data.bio,
              id: data.id,
            },
          });
        } catch (error) {
          console.error(error);
          window.localStorage.clear();
        }
      }
      setLoading(false);
    };
    autoLogin();
  }, []);

  const editProfile = async (body: iUserRegister) => {
    const userId = localStorage.getItem("@user: id");
    try {
      const { data } = await api.patch(`/users/${userId}`, body);
      toast.success("Perfil Atualizado!");
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
  const [randomPost, setRandom] = useState([] as any);
  const [showRandom, setShowRandom] = useState(false);
  useEffect(() => {
    setRandom(isPlaces[Math.floor(Math.random() * isPlaces.length)]);
  }, [token]);

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
        loading,
        isPlaces,
        setIsPlaces,
        loadUser,
        randomPost,
        showRandom,
        setShowRandom,
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
