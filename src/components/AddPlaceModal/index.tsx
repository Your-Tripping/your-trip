import { Button } from "../Button/button.style";
import { Form } from "../Forn/form.style";
import { Input } from "../Input/input.style";
import { Container } from "../Loading/loading.style";


const AddPlace = () => {
  return (
    <Container>
      <Form background>
        <label>
          Titulo:
          <Input placeholder="titulo" />
        </label>
        <label>
          Url de imagm:
          <Input placeholder="Url da imagem" />
        </label>
        <label>
          Descrição:
          <Input placeholder="descrição longa" />
        </label>
        <Button buttonType="tertiary">Adicionar</Button>
      </Form>
    </Container>
  );
};

export default AddPlace;