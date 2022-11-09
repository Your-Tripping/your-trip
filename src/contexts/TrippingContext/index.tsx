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
import { useUserContext } from "../UserContext";

export interface iPost {
  id?: number | undefined;
  userId: string | undefined;
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

export interface iFollow {
  followername: string | undefined;
  userId: string;
  username: string;
}

interface iTrippingContext {
  posts: iPost[];
  userPosts: iPost[];
  cachePosts: () => void;
  createPost: (post: iPost) => void;
  editPost: (post: iEditPost, id: number) => void;
  deletePost: (id: number) => void;
  randomPost: iPost;
  setRandom: React.Dispatch<React.SetStateAction<iPost>>;
  showRandom: boolean;
  setShowRandom: React.Dispatch<React.SetStateAction<boolean>>;
  currentPost: iPost;
  setCurrentPost: React.Dispatch<React.SetStateAction<iPost>>;
  followUser: iPost[];
  follow: (body: iFollow) => void;
  unfollow: (id: iFollow) => void;
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
  const [currentPost, setCurrentPost] = useState({} as iPost);

  const {setShowModal} = useUserContext()

  const navigate = useNavigate();

  const cachePosts = async () => {
    const { data: postsData } = await api.get("/posts/?_sort=id&_order=desc");
    setPosts(postsData);

    const { data: userPostsData } = await api.get(
      `/posts/?userId=${window.localStorage.getItem("@user: id")}`
    );
    setUserPosts(userPostsData);
    const { data: follower } = await api.get(
      `/followers/?${window.localStorage.getItem("@user: id")}`
    );

    setFollowUser(follower);
  };

  const createPost = async (post: iPost) => {
    try {
      await api.post("/posts", post);
      toast.success("Viagem postada!");
      cachePosts();
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      toast.error("Ops! Algo esta errado!");
    }
  };

  const editPost = async (post: iEditPost, id: number) => {
    try {
      await api.patch(`/posts/${id}`, post);
      toast.success("Post editado!");
      cachePosts();
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      toast.error("Ops! Algo esta errado!");
    }
  };

  const deletePost = async (id: number) => {
    try {
      await api.delete(`/posts/${id}`);
      toast.success("Viagem deletada!")
      cachePosts()
      navigate("/dashboard")
    } catch (error) {
      console.error(error);
      toast.error("Ops! Algo esta errado!");
    }
  };

  // Rota: Seguir usuário:
  const follow = (body: iFollow) => {
    try {
      api.post("/followers", body);
    } catch (error) {
      console.log(error);
    }

    cachePosts();
  };

  // Rota: Seguir usuário:
  const unfollow = (id: iFollow) => {
    try {
      api.delete(`/followers/?${id}`);
    } catch (error) {
      console.log(error);
    }

    cachePosts();
  };

  useEffect(() => {
    cachePosts();
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
        currentPost,
        setCurrentPost,
        deletePost,
        followUser,
        follow,
        unfollow,
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
