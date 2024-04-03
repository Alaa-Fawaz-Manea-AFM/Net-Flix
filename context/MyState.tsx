"use client";
import {
  Dispatch,
  useState,
  useEffect,
  createContext,
  SetStateAction,
} from "react";
import { getUserData } from "../utils/api";
import { IUsers } from "@/types";

interface IValue {
  user: IUsers[];
  userId: string;
  userinfo: IUsers | object;
  userEmail: string;
  setUser: Dispatch<SetStateAction<IUsers[]>>;
  setUserId: Dispatch<SetStateAction<string>>;
  setUserEmail: Dispatch<SetStateAction<string>>;
}

export const MyContext = createContext<IValue | null>(null);

const MyState = ({ children }: { children: React.ReactNode }) => {
  const [userId, setUserId] = useState<string>(
    JSON.parse(localStorage.getItem("user_NETFLIX")!)
  );
  const [user, setUser] = useState<IUsers[]>([]);
  const [userEmail, setUserEmail] = useState<string>("");

  useEffect(() => {
    getUserData(setUser);
  }, []);
  console.log(0);


  const [userinfo, setUserinfo] = useState<IUsers | any>({});

  useEffect(() => {
    setUserinfo(user.find((us) => us.user.uid === userId));
  }, [user, userId]);

  let value: IValue = {
    user,
    userId,
    setUser,
    userinfo,
    userEmail,
    setUserId,
    setUserEmail,
  };
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export default MyState;
