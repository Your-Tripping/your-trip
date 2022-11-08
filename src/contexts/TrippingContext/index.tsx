import { createContext, ReactNode, useState } from "react";
import { api } from "../../services/api";

interface iPost {
  id: number;
  userId: number;
  username: string;
  country: string;
  imageUrl: string;
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
}

export const TrippingContext = createContext<iTrippingContext>(
  {} as iTrippingContext
);

const TrippingProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState([] as iPost[]);
  const [userPosts, setUserPosts] = useState([] as iPost[]);

  const cachePosts = async () => {
    const { data: postsData } = await api.get("/posts");
    setPosts(postsData);
    const { data: userPostsData } = await api.get(`/posts/?userId=${localStorage.getItem("userId")}`);
    setUserPosts(userPostsData);
  };

  const createPost = async (post: iPost) => {
    await api.post("/posts", post);
  };

  const editPost = async (post: iEditPost, id: number) => {
    await api.patch(`/posts/${id}`, post);
  };

  return (
    <TrippingContext.Provider
      value={{ posts, userPosts, cachePosts, createPost, editPost }}
    >
      {children}
    </TrippingContext.Provider>
  );
};

export default TrippingProvider;
