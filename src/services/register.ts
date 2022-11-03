import { api } from "./api";

export interface iUserRegister {
  name: string;
  email: string;
  imageUrl: string;
  bio: string;
  password: string;
}

export const register = async (body: iUserRegister) => {
  const { data } = await api.post("/register", body);
  return data;
};
