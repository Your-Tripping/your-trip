import { useUserContext } from "../../contexts/UserContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { formSchemaEdit } from "../../validation/edit";
import { iUserEdit } from "../../services/edit";

import { Error } from "../ErrorMessage/formError.style";
import { Input } from "../Input/input.style";
import * as S from "./editProfile.style";
import { Button } from "../Button/button.style";

const EditProfile: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserEdit>({
    resolver: yupResolver(formSchemaEdit),
  });
  const { editProfile, setShowModal } = useUserContext();
  return (
    <S.Container>
      <S.RegisterForm background onSubmit={handleSubmit(editProfile)}>
        <div>
          <S.Exit
            onClick={() => {
              setShowModal(null);
              document.body.style.position = "";
              document.body.style.padding = "0";
            }}
          >
            x
          </S.Exit>
          <S.Title color="grey4" fontWeight={700} tag="h2" size="size1">
            Atualizar dados
          </S.Title>
          <S.NewDiviser />
        </div>
        <S.Label htmlFor="name">Nome</S.Label>
        <Error>{errors?.name?.message}</Error>
        <Input
          id="name"
          placeholder="Digite seu novo nome"
          type="text"
          {...register("name")}
        />
        <S.Label htmlFor="img">Imagem</S.Label>
        <Error>{errors?.imageUrl?.message}</Error>
        <Input
          id="img"
          placeholder="Sua nova foto do perfil"
          type="text"
          {...register("imageUrl")}
        />
        <S.Label htmlFor="bio">Bio</S.Label>
        <Error>{errors?.bio?.message}</Error>
        <Input
          id="bio"
          placeholder="Digite sua nova bio"
          type="text"
          {...register("bio")}
        />
        <Button buttonType="tertiary" type="submit">
          Editar
        </Button>
      </S.RegisterForm>
    </S.Container>
  );
};

export default EditProfile;
