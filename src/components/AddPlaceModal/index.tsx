import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { iPlace } from "../../contexts/TrippingContext";
import { placeSchema } from "../../validation/trip";

import { GrClose } from "react-icons/gr";
import { Error } from "../ErrorMessage/formError.style";

import { Button } from "../Button/button.style";
import { Input } from "../Input/input.style";
import { Container } from "../Loading/loading.style";
import * as S from "./addPlaceModal.style";
import { useUserContext } from "../../contexts/UserContext";
import { toast } from "react-toastify";

interface iAddTripProps {
  setPlaces: React.Dispatch<React.SetStateAction<iPlace[]>>;
  places: iPlace[];
}

const AddPlace = ({ setPlaces, places }: iAddTripProps) => {
  const { setShowModal } = useUserContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iPlace>({
    resolver: yupResolver(placeSchema),
  });

  const logg = (body: iPlace) => {
    const newPlace = [...places, body];
    setPlaces(newPlace);
    setShowModal(null);
    toast.success("Lugar Adicionado!");
  };

  return (
    <Container>
      <S.AddPlaceForm background onSubmit={handleSubmit(logg)}>
        <S.CloseButton onClick={() => setShowModal(null)}>
          <GrClose />
        </S.CloseButton>
        <S.ModalTitle tag="h3">Parada</S.ModalTitle>
        <label>
          Titulo:
          <Error>{errors.name?.message}</Error>
          <Input placeholder="titulo" {...register("name")} />
        </label>
        <label>
          Url de imagm:
          <Error>{errors.image?.message}</Error>
          <Input placeholder="Url da imagem" {...register("image")} />
        </label>
        <label>
          Descrição:
          <Error>{errors.image?.message}</Error>
          <Input placeholder="descrição longa" {...register("description")} />
        </label>
        <Button buttonType="tertiary">Adicionar</Button>
      </S.AddPlaceForm>
    </Container>
  );
};

export default AddPlace;
