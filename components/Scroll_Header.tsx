"use client";
import { useEffect, useState } from "react";

const Scroll_Header = ({ children }: { children: React.ReactNode }) => {
  const [scroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    window.onscroll = () => {
      setScroll(window.pageYOffset === 0 ? false : true);
    };
  }, []);

  return (
    <header
      className={`${
        scroll ? "bg-black/[0.5]" : "bg-transparent"
      } flex items-center justify-between font-semibold md:px-10 px-5 py-5 sm:py-4 z-[100] fixed top-0 w-full`}
    >
      {children}
    </header>
  );
};

export default Scroll_Header;
