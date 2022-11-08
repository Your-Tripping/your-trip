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
import { iUserEdit } from "../../services/edit";

export interface iUserInfo {
  name: string;
  imageUrl: string;
  bio: string;
  id: string;
}
export interface iUser {
  accessToken: string;
  user: iUserInfo;
}

interface iUserContext {
  user: iUser | null;
  usersList: iUserInfo[];
  setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
  singIn: (body: iUserLogin) => void;
  singUp: (body: iUserRegister) => void;
  editProfile: (body: iUserEdit) => void;
  followUsers: (id: string) => void;
  showModal: string | null;
  setShowModal: React.Dispatch<React.SetStateAction<string | null>>;
  loading: boolean;
  setUsersList: React.Dispatch<React.SetStateAction<iUserInfo[]>>;
  handleFormDashboard: () => void;
}

export const UserContext = createContext<iUserContext>({} as iUserContext);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [usersList, setUsersList] = useState<iUserInfo[]>([] as iUserInfo[]);
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
      api.defaults.headers.authorization = `Bearer ${data.accessToken}`;

      setUser(data);
      setIsAuthenticated(true);

      navigate("/dashboard");
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
          const { data } = await api.get<iUserInfo>(`/users/${id}`);
          setUser({
            accessToken: token,
            user: data,
          });
        } catch (error) {
          console.log(error);
          window.localStorage.clear();
        }
      }
      setLoading(false);
    };
    autoLogin();
  }, [user]);

  const editProfile = async (body: iUserEdit) => {
    const userId = localStorage.getItem("@user: id");
    try {
      const token = localStorage.getItem("@user: token");
      api.defaults.headers.authorization = `Bearer ${token}`;
      const { data } = await api.patch(`/users/${userId}`, body);
      toast.success("Perfil Atualizado!");
      setShowModal(null);
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

  const handleFormDashboard = () => {
    setIsAuthenticated(false);
    window.localStorage.clear();
    setUser(null);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        usersList,
        setUsersList,
        setUser,
        singIn,
        singUp,
        editProfile,
        followUsers,
        showModal,
        setShowModal,
        loading,
        handleFormDashboard,
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
