import * as S from "./NotFoundPages.styles";
import { BsFillEmojiFrownFill } from "react-icons/bs";

export const NotFoundPage = () => {
  return (
    <S.Container>
      <div>
        <BsFillEmojiFrownFill />
        <h2>Que pena! Página não encontrada.</h2>
        <S.StyleLink to={"/"}>
          <p>Volte para a página principal</p>
        </S.StyleLink>
      </div>
    </S.Container>
  );
};
