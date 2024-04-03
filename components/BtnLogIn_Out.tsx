"use client";
import { useContext } from "react";
import { MyContext } from "@/context/MyState";
import { off_on } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";

const BtnLogIn_Out = () => {
  const { userId, setUserId } = useContext<any>(MyContext);

  const handleSignOut = () => {
    localStorage.clear();
    setUserId("");
  };

  return (
    <div className="flex items-start md:items-center gap-2 xs:flex-col">
      {userId ? (
        <div className="flex items-center gap-2 cursor-pointer">
          <Image
            onClick={handleSignOut}
            src={off_on}
            width={30}
            height={30}
            alt="menu_close"
          />
        </div>
      ) : (
        <div className="flex items-center flex-col md:flex-row gap-2">
          <Link href="/login">
            <button>Log in</button>
          </Link>
          <Link href="/signup">
            <button className="bg-red-600 px-6 py-2 rounded-md">Sign Up</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default BtnLogIn_Out;
