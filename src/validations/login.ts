import * as yup from "yup"

export const loginSchema = yup.object().shape({
    email: yup.string().required("Campo obrigaório!!"),
    password: yup.string().required("Campo obrigaório!!")
})