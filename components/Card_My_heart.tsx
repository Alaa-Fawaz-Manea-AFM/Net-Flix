"use client";
import { removeMyHeart } from "@/utils/api";
import { MyContext } from "@/context/MyState";
import { check } from "@/public/assets";
import { IMovieDetail } from "@/types";
import { useContext } from "react";
import Image from "next/image";

const Card_My_heart = () => {
  const { userinfo, userId } = useContext<any>(MyContext);

  const handleRemoveMyHeart = async (id: string) =>
    removeMyHeart(userinfo, userId, id);

  return (
    <>
      {userinfo?.heart === undefined || userinfo?.heart?.length === 0 ? (
        <div className="text-7xl max-xsm:text-3xl w-full flex sm:justify-center px-5 sm:p-0 sm:w-4/5 text-white absolute top-[30%] right-1/2 translate-x-1/2">
          There are no favorite movies
        </div>
      ) : (
        <div className="flex flex-wrap h-64 flex-col gap-5 overflow-x-auto scroll-smooth absolute top-[40%] px-10">
          {userinfo?.heart?.map((movie: IMovieDetail) => (
            <div key={movie.backdrop_path} className="w-56 h-56 relative group">
              {movie?.backdrop_path && (
                <>
                  <Image
                    fill
                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                    alt="backdrop_path"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-full items-center justify-center bg-black/[0.4] hidden group-hover:flex line-clamp-2">
                    {movie.title}
                    <div
                      onClick={() => handleRemoveMyHeart(movie.id)}
                      className="top-2 right-2 absolute cursor-pointer"
                    >
                      <Image
                        width={30}
                        height={30}
                        src={check}
                        alt="remove My List"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Card_My_heart;
