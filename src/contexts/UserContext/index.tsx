import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { iUserLogin, login } from "../../services/login";
import { iUserRegister, register } from "../../services/register";
import { iUserEdit } from "../../services/edit";

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
  editProfile: (body: iUserEdit) => void;
  followUsers: (id: string) => void;
  showModal: string | null;
  setShowModal: React.Dispatch<React.SetStateAction<string | null>>;
}

const UserContext = createContext<iUserContext>({} as iUserContext);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [showModal, setShowModal] = useState<string | null>(null);

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
      navigate("/dashboard");
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

  const editProfile = async (body: iUserEdit) => {
    const userId = localStorage.getItem("@user: id");
    try {
      const token = localStorage.getItem("@user: token");
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
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
