"use client";
import { useContext, useEffect, useState } from "react";
import { close, menu } from "@/public/assets";
import { MyContext } from "@/context/MyState";
import BtnLogIn_Out from "./BtnLogIn_Out";
import NavLink from "./NavLink";
import Image from "next/image";

const ToggleNav = () => {
  const { setUserId } = useContext<any>(MyContext);

  const [toggle, setToggle] = useState<boolean>(false);

  const storage = localStorage.getItem("user_NETFLIX");
  let getUserLocal: string = JSON.parse(storage!);

  useEffect(() => {
    setUserId(getUserLocal);
  }, [getUserLocal]);

  return (
    <div
      onClick={() => setToggle(!toggle)}
      className="flex mr-2 text-lg gap-7 md:hidden relative"
    >
      <Image
        src={toggle ? close : menu}
        alt="menu_close"
        width={30}
        height={30}
      />
      <div
        onClick={() => setToggle(!toggle)}
        className={`${
          toggle ? "" : "hidden"
        } p-6 black-gradient sidebar absolute top-10 right-0 w-[200px] z-10 rounded-xl md:hidden space-y-5`}
      >
        <NavLink />
        <BtnLogIn_Out />
      </div>
    </div>
  );
};

export default ToggleNav;
