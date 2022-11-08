import { api } from "./api";

export interface iUserEdit {
  name: string;
  imageUrl: string;
  bio: string;
}

export const register = async (body: iUserEdit) => {
  const userId = localStorage.getItem("@user: id");
  const { data } = await api.patch<iUserEdit>(`/users/${userId}`, body);
  return data;
};
