import * as yup from "yup";
export const formSchemaRegister = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("E-mail inválido"),
    imageUrl: yup.string().required("Imagem obrigatória"),
    bio: yup.string().required("Bio obrigatória"),
    password: yup.string().required("Senha obrigatória").min(6,"A senha precisa ter no mínimo 6  dígitos"),
    passwordConfirmation: yup.string().required("Senha obrigatória").oneOf([yup.ref('password')], "As senhas devem ser iguais"),
})

