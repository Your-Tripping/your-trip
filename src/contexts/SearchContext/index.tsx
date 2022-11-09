import { createContext, ReactNode, useContext, useState } from "react";
import { iPost, TrippingContext } from "../TrippingContext";
import { iUserInfo, UserContext } from "../UserContext";

interface iSearchContext {
  filteredPosts: iPost[];
  filteredUsers: iUserInfo[];
  filter: string;
  target: string;
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

  const [target, setTarget] = useState("");

  const applyFilter = (filter: string, input: string) => {
    setFilter(filter);
    setTarget(input)
    switch (filter) {
      case "Usuarios":
        setFilteredUsers(
          usersList.filter((user) =>
            processString(user.name).includes(processString(input))
          )
        );
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
      value={{ filteredUsers, filteredPosts, filter, applyFilter, target }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
