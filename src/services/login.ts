import { iUser } from "../contexts/UserContext";
import { api } from "./api";

export interface iUserLogin{
    email: string
    password: string
}


export const login = async (body: iUserLogin) => {
  console.log(body);
  const { data } = await api.post<iUser>("/login", body);
  return data;
};
