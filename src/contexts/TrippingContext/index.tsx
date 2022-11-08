import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import { api } from "../../services/api";
import { iUserInfo, UserContext, useUserContext } from "../UserContext";

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

interface iEditPost {
  country?: string;
  imageUrl?: string;
  title?: string;
  location?: string;
  places?: iPlace[];
}

export interface iPlace {
  id: number;
  name: string;
  image: string;
  description: string;
}

interface iTrippingContext {
  posts: iPost[];
  userPosts: iPost[];
  cachePosts: () => void;
  createPost: (post: iPost) => void;
  editPost: (post: iEditPost, id: number) => void;
  randomPost: iPost;
  setRandom: React.Dispatch<React.SetStateAction<iPost>>;
  showRandom: boolean;
  setShowRandom: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TrippingContext = createContext<iTrippingContext>(
  {} as iTrippingContext
);

const TrippingProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState([] as iPost[]);
  const [userPosts, setUserPosts] = useState([] as iPost[]);
  const [randomPost, setRandom] = useState({} as iPost);
  const [showRandom, setShowRandom] = useState(false);

  const { updateUsersList } = useContext(UserContext);

  const cachePosts = async () => {
    const { data: postsData } = await api.get("/posts");
    setPosts(postsData);
    const { data: userPostsData } = await api.get(
      `/posts/?userId=${localStorage.getItem("userId")}`
    );
    setUserPosts(userPostsData);
  };

  const cacheUsers = async () => {
    const { data } = await api.get<iUserInfo[]>("/users");
    updateUsersList(data);
  };

  const createPost = async (post: iPost) => {
    await api.post("/posts", post);
  };

  const editPost = async (post: iEditPost, id: number) => {
    await api.patch(`/posts/${id}`, post);
  };

  useEffect(() => {
    cachePosts();
    cacheUsers();
  }, []);

  useEffect(() => {
    setRandom(posts[Math.floor(Math.random() * posts.length)]);
  }, [posts]);
  useEffect(() => {
    setRandom(posts[Math.floor(Math.random() * posts.length)]);
  }, [showRandom]);
  return (
    <TrippingContext.Provider
      value={{
        posts,
        userPosts,
        cachePosts,
        createPost,
        editPost,
        randomPost,
        setRandom,
        showRandom,
        setShowRandom,
      }}
    >
      {children}
    </TrippingContext.Provider>
  );
};

export default TrippingProvider;

export const useTripContext = () => {
  const context = useContext(TrippingContext);
  return context;
};
