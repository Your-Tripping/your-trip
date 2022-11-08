import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { iPlace, iPost } from "../../contexts/TrippingContext";
import { tripSchema } from "../../validation/trip";

import { TfiPencil } from "react-icons/tfi";

import { Button } from "../Button/button.style";
import { Input } from "../Input/input.style";
import { Form } from "../Forn/form.style";
import * as S from "./addTrip.style";
import { Error } from "../ErrorMessage/formError.style";
import AddPlace from "../AddPlaceModal";

export const AddTrippingModal = () => {
  const [places, setPlaces] = useState([] as iPlace[]);

  const {register, handleSubmit, formState: errors } = useForm<iPost>({
    resolver: yupResolver(tripSchema)
  });

  const addPlace = (body: iPost) => console.log(body);
  

  return (
    <S.Box>
      <S.FormTitle tag="h3" size="size1">
        Guia turístico
      </S.FormTitle>
      <Form background={false} onSubmit={handleSubmit(addPlace)}>
        <label>
          Titulo:
          <Input placeholder="Digite o título aqui..." {...register("title")}/>
          {/* <Error>{errors.title?.message}</Error> */}
        </label>
        <label>
          País:
          <Input placeholder="Digite o nome do País aqui..." {...register("country")}/>
          {/* <Error>{errors.country?.message}</Error> */}
        </label>
        <label>
          Local:
          <Input placeholder="Digite o nome do Local aqui..." {...register("location")} />
          {/* <Error>{errors.location?.message}</Error> */}
        </label>
          <Button buttonType="tertiary">Adicionar Parada</Button>
      </Form>
      <ul>
        
      </ul>
      <AddPlace/>
    </S.Box>
  );
};
