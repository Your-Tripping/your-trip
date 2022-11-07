import { Button } from "../Button/button.style";
import { Input } from "../Input/input.style";
import { Form } from "../Forn/form.style";
import * as S from "./addTrip.style";

export const AddTrippingModal = () => {



  return (
    <S.Box>
        <h2>Guia turístico</h2>
      <Form>
        <label>
          Titulo:
          <Input placeholder="Digite o título aqui..."/>
        </label>
        <label>
          País:
          <Input placeholder="Digite o nome do País aqui..."/>
        </label>
        <label>
          Local:
          <Input placeholder="Digite o nome do Local aqui..."/>
          <Button buttonType="primary">Adicionar Parada</Button>
        </label>
      </Form>
      <ul>
        <li></li>
      </ul>
    </S.Box>
    );
};
