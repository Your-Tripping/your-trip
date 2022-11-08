import React, { useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";
import SearchUserCard from "../SearchUserCard";
import Trip from "../TrippingCard";
import * as S from "./searchDisplay.style";

const SearchDisplay = () => {
  const { filteredUsers, filteredPosts, filter } = useContext(SearchContext);

  return (
    <S.SearchResults>
      {filter === "Usuarios" ? (
        filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <SearchUserCard user={user}></SearchUserCard>
          ))
        ) : (
          <S.EmptySearch>Desculpe, nao encontramos nenhum resultado para sua busca</S.EmptySearch>
        )
      ) : filter === "Lugares" ? (
        filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => <Trip key={index} post={post} />)
        ) : (
          <S.EmptySearch>Desculpe, nao encontramos nenhum resultado para sua busca</S.EmptySearch>
        )
      ) : null}
    </S.SearchResults>
  );
};

export default SearchDisplay;
