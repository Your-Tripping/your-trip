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
  setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
  singIn: (body: iUserLogin) => void;
  singUp: (body: iUserRegister) => void;
  editProfile: (body: iUserRegister) => void;
  followUsers: (id: string) => void;
  showModal: string | null;
  setShowModal: React.Dispatch<React.SetStateAction<string | null>>;
  loading: boolean;
}

const UserContext = createContext<iUserContext>({} as iUserContext);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [showModal, setShowModal] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const token = window.localStorage.getItem("@user: token");
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
      setUser(data);
      toast.success("Login concluído!");
      setIsAuthenticated(true);
    } catch (error) {
      toast.error("Ops! Algo está errado!");
      console.log(error);
    }
  };

  const singUp = async (body: iUserRegister) => {
    console.log(body);
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
      console.log(data);
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
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        singIn,
        singUp,
        editProfile,
        followUsers,
        showModal,
        setShowModal,
        loading,
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
