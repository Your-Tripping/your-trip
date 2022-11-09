import React, { useContext } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import SearchDisplay from "../../components/SearchDisplay";
import { SearchContext } from "../../contexts/SearchContext";
import * as S from "./SearchResult.style";

const SearchPage = () => {
  const { filter, target } = useContext(SearchContext);

  return (
    <S.SearchMain>
      <Header></Header>
      <div>
        <Link to={"/dashboard"}>
          <AiOutlineArrowLeft />
        </Link>
        {filter !== "none" && <p>Mostrando resultados para: <span>{target}</span></p>}
      </div>
      <SearchDisplay></SearchDisplay>
    </S.SearchMain>
  );
};

export default SearchPage;
