import * as yup from "yup";

export const searchSchema = yup.object().shape({
    filter: yup.string().required("Campo obrigatorio"),
    target: yup.string().required("Campo obrigatorio"),
  });