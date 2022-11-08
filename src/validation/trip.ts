import * as yup from "yup";
export const tripSchema = yup.object().shape({
  country: yup.string().required("Preencha este campo!"),
  title: yup.string().required("Preencha este campo!"),
  location: yup.string().required("Preencha este campo!"),
});

export const placeSchema =  yup.object().shape({
  name: yup.string().required("Preencha este campo!"),
  image: yup.string().required("Preencha este campo!"),
  description: yup.string().required("Preencha este campo!"),
});
