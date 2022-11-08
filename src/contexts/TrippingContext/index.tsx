import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { iUserInfo, useUserContext } from "../UserContext";

export interface iPost {
  id?: number;
  userId: string | undefined ;
  username: string | undefined;
  country: string;
  profileUrl: string | undefined;
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
  id?: number;
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
  const [followUser, setFollowUser] = useState([] as iPost[]);

  const navigate = useNavigate()

  const cachePosts = async () => {
    const { data: postsData } = await api.get("/posts");
    setPosts(postsData);
    const { data: userPostsData } = await api.get(
      `/posts/?userId=${localStorage.getItem("userId")}`
    );
    setUserPosts(userPostsData);
    const { data: follower } = await api.get(
      `/followers/?${window.localStorage.getItem("@user: id")}`
    );
    setFollowUser(follower)
  };

  const cacheUsers = async () => {
    const { data } = await api.get<iUserInfo[]>("/users");
    setUsersList(data);
  };

  const { setUsersList } = useUserContext();

  const createPost = async (post: iPost) => {
    
    try {
      await api.post("/posts", post);
      toast.success("Viagem postada!")
      cachePosts()
      navigate("/dashboard")
    } catch (error) {
      console.error(error);
      toast.error("Ops! Algo esta errado!")    
    }
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