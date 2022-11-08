import { createContext, ReactNode, useState, useEffect, useContext } from "react";
import { api } from "../../services/api";

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

export interface iEditPost {
  country?: string;
  imageUrl?: string;
  title?: string;
  location?: string;
  places?: iPlace[];
}

interface iPlace {
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
  showRandom: boolean;
  setShowRandom: React.Dispatch<React.SetStateAction<true | false>>;
}

const TrippingContext = createContext<iTrippingContext>(
  {} as iTrippingContext
);

const TrippingProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState([] as iPost[]);
  const [userPosts, setUserPosts] = useState([] as iPost[]);
  const [randomPost, setRandomPost] = useState({} as iPost);
  const [showRandom, setShowRandom] = useState(false);

  const cachePosts = async () => {
    const { data: postsData } = await api.get<iPost[]>("/posts");
    setPosts(postsData);
    const { data: userPostsData } = await api.get(`/posts/?userId=${localStorage.getItem("userId")}`);
    setUserPosts(userPostsData);
  };

  useEffect(() => {
    cachePosts()
  },[])

  useEffect(() => {
    setRandomPost(posts[Math.floor(Math.random() * posts.length)]);
  }, []);

  const createPost = async (post: iPost) => await api.post("/posts", post);

  const editPost = async (post: iEditPost, id: number) => await api.patch(`/posts/${id}`, post);

  return (
    <TrippingContext.Provider
      value={{ posts, userPosts, cachePosts, createPost, editPost, showRandom, setShowRandom, randomPost }}
    >
      {children}
    </TrippingContext.Provider>
  );
};

export default TrippingProvider;

export const useTrippingContext = () => {
  const context = useContext(TrippingContext)
  return context
};
