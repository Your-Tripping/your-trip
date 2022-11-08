import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import * as S from "./searchBar.style";
import { useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";
import { useNavigate } from "react-router-dom";

interface iSearchParams {
  filter: string;
  target: string;
}

const searchSchema = yup.object().shape({
  filter: yup.string().required("Campo obrigatorio"),
  target: yup.string().required("Campo obrigatorio"),
});

const SearchBar = () => {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<iSearchParams>({
    resolver: yupResolver(searchSchema),
  });

  const { applyFilter } = useContext(SearchContext);

  const applySearch = (data: iSearchParams) => {
    applyFilter(data.filter, data.target)
    navigate("/search")
  };

  return (
    <S.SearchForm onSubmit={handleSubmit(applySearch)}>
      <S.SearchFilter {...register("filter")}>
        <option value="" hidden disabled>
          Buscar por...
        </option>
        <option value="Usuarios">Usuarios</option>
        <option value="Lugares">Lugares</option>
      </S.SearchFilter>
      <S.SearchInput
        type="text"
        {...register("target")}
        placeholder="Digite aqui sua busca"
      />
      <S.SearchButton type="submit">
        <S.SearchIcon />
      </S.SearchButton>
    </S.SearchForm>
  );
};

export default SearchBar;
