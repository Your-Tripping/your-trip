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
import { toast } from "react-toastify";

interface iAddTripProps {
  setPlaces: React.Dispatch<React.SetStateAction<iPlace[]>>;
  places: iPlace[];
  setPlaceModal: React.Dispatch<React.SetStateAction<boolean>>;
  currentPlace: iPlace | null;
}

const AddPlace = ({
  setPlaces,
  places,
  setPlaceModal,
  currentPlace,
}: iAddTripProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iPlace>({
    resolver: yupResolver(placeSchema),
  });

  const addPlace = (body: iPlace) => {
    const newPlace = [...places, body];
    setPlaces(newPlace);
    setPlaceModal(false);
    toast.success("Lugar Adicionado!");
  };

  const editPlace = (body: iPlace) => {
    const newPlaces = places.filter(
      (place) => place.name !== currentPlace?.name
    );
    setPlaces([...newPlaces, body]);
    toast.success("Lugar editado!");
  };

  const deletePlace = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    const filteredPlaces = places.filter(place => place.name !== currentPlace?.name);
    setPlaces(filteredPlaces)
    toast.success("Lugar Deletado!")
    setPlaceModal(false)
  };

  return (
    <Container>
      <S.AddPlaceForm
        background
        onSubmit={
          currentPlace ? handleSubmit(editPlace) : handleSubmit(addPlace)
        }
      >
        <S.CloseButton
          onClick={(e) => {
            e.preventDefault();
            setPlaceModal(false);
          }}
        >
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
        {!currentPlace && <Button buttonType="tertiary">Adicionar</Button>}
        {currentPlace && <Button buttonType="tertiary">Editar</Button>}
        {currentPlace && <Button buttonType="tertiary" onClick={deletePlace}>Deletar</Button>}
      </S.AddPlaceForm>
    </Container>
  );
};

export default AddPlace;
