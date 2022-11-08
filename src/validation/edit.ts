import * as yup from "yup";
export const formSchemaEdit = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  imageUrl: yup.string().required("Imagem obrigatória"),
  bio: yup.string().required("Bio obrigatória"),
});
