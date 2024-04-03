"use client";
import { useContext, useEffect, useState } from "react";
import { heart, heart_fill } from "@/public/assets";
import { gethandleAddHeart } from "@/utils/api";
import { MyContext } from "@/context/MyState";
import { toast } from "react-toastify";
import Image from "next/image";

import { IMovieDetail } from "@/types";

const BtnHeart = ({ movie }: { movie: IMovieDetail }) => {
  const { userinfo, userId } = useContext<any>(MyContext);
  const [like, setLike] = useState<string[]>([]);

  useEffect(() => {
    getLike();
  }, [userinfo?.heart]);

  const getLike = () =>
    setLike(userinfo?.heart?.map(({ id }: { id: string }) => id));

  const handleAddHeart = async (movie: IMovieDetail) =>
    gethandleAddHeart(userinfo, userId, movie);

  return (
    <div
      onClick={() =>
        userId != null
          ? handleAddHeart(movie)
          : toast.error("Sorry, you must log in")
      }
      className="top-2 right-2 absolute cursor-pointer"
    >
      <Image
        width={30}
        height={30}
        src={like?.includes(movie?.id) ? heart_fill : heart}
        alt="heart_icon"
      />
    </div>
  );
};

export default BtnHeart;
