import React from "react";
import { Header } from "../../components/Header";
import SearchDisplay from "../../components/SearchDisplay";
import * as S from "./SearchResult.style"

const SearchPage = () => {
  return (
    <S.SearchMain>
      <Header></Header>
      <SearchDisplay></SearchDisplay>
    </S.SearchMain>
  );
};

export default SearchPage;
