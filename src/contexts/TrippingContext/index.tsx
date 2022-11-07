import { createContext, ReactNode, useState } from "react";

interface iPost {
  id?: number;
  userId?: number;
  username?: string;
  country?: string;
  imageUrl?: string;
  title?: string;
  location: string;
  places?: [
    {
      id: number;
      name: string;
      image: string;
      description: string;
    }
  ];
}

interface iTrippingContext{
    posts: []iPost;
}

export const TrippingContext = createContext();

const TrippingProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState([] as Array<iPost>);

  return (
    <TrippingContext.Provider value={{posts}}>
      {children}
    </TrippingContext.Provider>
  );
};

export default TrippingProvider;
