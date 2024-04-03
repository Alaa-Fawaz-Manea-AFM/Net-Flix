"use client";
import { MyContext } from "@/context/MyState";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

const Check_User_Login = ({ children }: { children: React.ReactNode }) => {
  const { userId }: any = useContext(MyContext);
  let router = useRouter();
  useEffect(() => {
    if (userId) return router.push("/");
  }, [userId]);

  return <>{children}</>;
};

export default Check_User_Login;
