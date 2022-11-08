import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { iPlace, iPost, useTripContext } from "../../contexts/TrippingContext";
import { tripSchema } from "../../validation/trip";

import { TfiPencil, TfiArrowLeft } from "react-icons/tfi";

import { Button } from "../Button/button.style";
import { Input } from "../Input/input.style";
import { Form } from "../Forn/form.style";
import * as S from "./addTrip.style";
import { Error } from "../ErrorMessage/formError.style";
import AddPlace from "../AddPlaceModal";
import { useUserContext } from "../../contexts/UserContext";
import { Text } from "../Text";

const AddTrip = () => {
  const [places, setPlaces] = useState([] as iPlace[]);
  const [post, setPost] = useState({} as iPost);

  const { showModal, setShowModal, user } = useUserContext();
  const { createPost } = useTripContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iPost>({
    resolver: yupResolver(tripSchema),
  });

  const handlePost = (body: iPost) => {
    createPost({
      ...body,
      userId: user?.user.id,
      username: user?.user.name,
      profileUrl: user?.user.imageUrl,
      places: places,
    });
  };

  const normalizeText = (text: string) =>
    text.length > 100 ? `${text.substring(0, 100)}...` : text;

  return (
    <>
      <S.Box>
        <S.BackLink to="/dashboard">
          <TfiArrowLeft />
        </S.BackLink>
        <S.FormTitle tag="h3" size="size1">
          Guia turístico
        </S.FormTitle>
        <Form background={false} onSubmit={handleSubmit(handlePost)}>
          <label>
            Titulo:
            <Error>{errors.title?.message}</Error>
            <Input
              placeholder="Digite o título aqui..."
              {...register("title")}
            />
          </label>
          <label>
            País:
            <Error>{errors.country?.message}</Error>
            <Input
              placeholder="Digite o nome do País aqui..."
              {...register("country")}
            />
          </label>
          <label>
            Local:
            <Error>{errors.location?.message}</Error>
            <Input
              placeholder="Digite o nome do Local aqui..."
              {...register("location")}
            />
          </label>
          <Button
            buttonType="tertiary"
            onClick={(e) => {
              e.preventDefault();
              setShowModal("addTrip");
            }}
          >
            Adicionar Parada
          </Button>
          <S.PostButton buttonType="primary">Postar</S.PostButton>
        </Form>
        <ul>
          {places.map(({ name, description, image }) => (
            <S.Place>
              <img src={image} alt={name} />
              <div>
                <Text tag="h5">{name}</Text>
                <p>{normalizeText(description)}</p>
              </div>
              <button>
                <TfiPencil />
              </button>
            </S.Place>
          ))}
        </ul>
      </S.Box>
      {showModal === "addTrip" ? (
        <AddPlace setPlaces={setPlaces} places={places} />
      ) : null}
    </>
  );
};

export default AddTrip;
