import { getData, request } from "@/utils/api";
import { BtnHeart } from "@/components";
import { info } from "@/public/assets";
import { IMovieDetail } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface IHerPage {
  title: string;
  nameReq: string;
}

const HerPageSlid = async ({ title, nameReq }: IHerPage) => {
  let data: IMovieDetail[];
  try {
    data = await getData(request[nameReq]);
  } catch (error) {
    throw Error;
  }
  let movies: IMovieDetail[] = await data;

  return (
    <div className="w-11/12 mx-auto py-32">
      <h1 className="text-5xl mb-10">{title}</h1>
      <div className="flex flex-wrap gap-5 justify-center">
        {movies.map((movie) => (
          <div
            key={movie?.id}
            className={`${
              movie?.backdrop_path
                ? "w-11/12 ssm:w-56 h-56 relative group"
                : "sr-only"
            }`}
          >
            <Image
              fill
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt="netflix"
              className="object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full items-center justify-center bg-black/[0.4] hidden group-hover:flex line-clamp-1">
              {movie?.title}
              <Link
                href={`/movie/${movie?.id}`}
                className="absolute bottom-0 right-0 flex items-center gap-2 p-2 bg-black/[0.6] text-xl font-semibold text-white rounded-md"
              >
                <Image src={info} alt="info_icon" width={30} height={30} />
              </Link>
              <BtnHeart movie={movie} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HerPageSlid;
