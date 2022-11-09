import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { iPlace, iPost, useTripContext } from "../../contexts/TrippingContext";
import { tripSchema } from "../../validation/trip";

import { TfiPencil, TfiArrowLeft } from "react-icons/tfi";

import { useUserContext } from "../../contexts/UserContext";

import { Button } from "../Button/button.style";
import { Input } from "../Input/input.style";
import { Form } from "../Form/form.style";
import * as S from "./addTrip.style";
import { Error } from "../ErrorMessage/formError.style";
import AddPlace from "../AddPlaceModal";
import { Text } from "../Text";

import ImageNotFound from "../../assets/img/noImage.png";

const AddTrip = () => {
  const [places, setPlaces] = useState([] as iPlace[]);
  const [placeModal, setPlaceModal] = useState<boolean>(false);
  const [currentPlace, setCurrentPlace] = useState<iPlace | null>(null);
  const [defaultImage, setDefaultImage] = useState<boolean>(false);
  const { showModal, setShowModal, user } = useUserContext();
  const { createPost, currentPost, editPost, deletePost } = useTripContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iPost>({
    resolver: yupResolver(tripSchema),
  });

  useEffect(() => {
    showModal === "editTrip" && setPlaces(currentPost.places);
  }, []);

  const handlePost = (body: iPost) => {
    const data = {
      ...body,
      userId: user?.user.id,
      username: user?.user.name,
      profileUrl: user?.user.imageUrl,
      places: places,
    };

    showModal === "editTrip"
      ? editPost(data, currentPost.id as number)
      : createPost(data);
  };

  const normalizeText = (text: string) =>
    text.length > 100 ? `${text.substring(0, 100)}...` : text;

  return (
    <>
      <S.Box>
        <S.BackLink to="/dashboard" onClick={() => setShowModal(null)}>
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
              placeholder={`${
                showModal !== "editTrip"
                  ? "Digite o título aqui..."
                  : currentPost?.title
              }`}
              {...register("title")}
            />
          </label>
          <label>
            País:
            <Error>{errors.country?.message}</Error>
            <Input
              placeholder={`${
                showModal !== "editTrip"
                  ? "Digite o nome do país aqui..."
                  : currentPost?.country
              }`}
              {...register("country")}
            />
          </label>
          <label>
            Local:
            <Error>{errors.location?.message}</Error>
            <Input
              placeholder={`${
                showModal !== "editTrip"
                  ? "Digite o nome do local aqui..."
                  : currentPost?.location
              }`}
              {...register("location")}
            />
          </label>
          <Button
            buttonType="tertiary"
            onClick={(e) => {
              e.preventDefault();
              setPlaceModal(true);
            }}
          >
            Adicionar parada
          </Button>
          {showModal === "editTrip" && (
            <Button buttonType="tertiary">Editar</Button>
          )}
          {showModal === "editTrip" && (
            <Button
              buttonType="tertiary"
              onClick={(e) => {
                e.preventDefault();
                deletePost(currentPost.id as number);
              }}
            >
              Deletar
            </Button>
          )}
          {showModal === "editTrip" ? null : (
            <S.PostButton buttonType="primary">Postar</S.PostButton>
          )}
        </Form>
        <ul>
          {places.map((place, index) => (
            <S.Place key={index}>
              <img
                src={defaultImage ? ImageNotFound : place.image}
                alt={place.name}
                onError={() => setDefaultImage(true)}
              />
              <div>
                <Text tag="h5">{place.name}</Text>
                <p>{normalizeText(place.description)}</p>
              </div>
              <button
                onClick={() => {
                  setCurrentPlace(place);
                  setPlaceModal(true);
                }}
              >
                <TfiPencil />
              </button>
            </S.Place>
          ))}
        </ul>
      </S.Box>
      {placeModal && (
        <AddPlace
          setPlaces={setPlaces}
          places={places}
          setPlaceModal={setPlaceModal}
          currentPlace={currentPlace}
        />
      )}
    </>
  );
};

export default AddTrip;
