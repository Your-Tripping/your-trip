import { createContext, ReactNode, useContext, useState } from "react";
import { TrippingContext } from "../TrippingContext";
import { iUserInfo, UserContext } from "../UserContext";

export interface iPost {
  id: number;
  userId: number;
  username: string;
  country: string;
  profileUrl: string;
  title: string;
  location: string;
  places: iPlace[];
}

interface iPlace {
  id: number;
  name: string;
  image: string;
  description: string;
}

interface iSearchContext {
  filteredPosts: iPost[];
  filteredUsers: iUserInfo[];
  filter: string;
  applyFilter: (filter: string, input: string) => void;
}

export const SearchContext = createContext<iSearchContext>(
  {} as iSearchContext
);

const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [filteredPosts, setFilteredPosts] = useState([] as iPost[]);

  const [filteredUsers, setFilteredUsers] = useState([] as iUserInfo[]);

  const { usersList } = useContext(UserContext);

  const { posts } = useContext(TrippingContext);

  const [filter, setFilter] = useState("none");

  const applyFilter = (filter: string, input: string) => {
    setFilter(filter);
    switch (filter) {
      case "Usuarios":
        setFilteredUsers(
          usersList.filter((user) =>
            processString(user.name).includes(processString(input))
          )
        );
        console.log(usersList)
        break;
      case "Lugares":
        setFilteredPosts(
          posts.filter((post) =>
            processString(post.location).includes(processString(input))
          )
        );
        break;
    }
  };

  const processString = (string: string) => {
    return string
      .toLowerCase()
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "");
  };

  return (
    <SearchContext.Provider
      value={{ filteredUsers, filteredPosts, filter, applyFilter }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
