import { IMovieDetail, ISlider } from "@/types";
import { BtnHeart } from ".";
import { getData } from "@/utils/api";
import { info } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";

const Slider = async ({ title, req }: ISlider) => {
  const movies: IMovieDetail[] = await getData(req);

  return (
    <div className="sm:w-[95%] max-sm:w-full max-sm:px-2 mx-auto my-5">
      <h1 className="text-5xl mb-16">{title}</h1>

      <div className="flex h-72 flex-wrap flex-col justify-center w-full gap-5 overflow-x-auto">
        {movies?.map((movie) => (
          <div
            key={movie.id}
            className={`${
              movie.backdrop_path ? "w-56 h-56 relative group" : "sr-only"
            }`}
          >
            <Image
              fill
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt="netflix"
              className="object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full items-center justify-center bg-black/[0.4] hidden group-hover:flex line-clamp-1">
              {movie.title}
              <Link
                href={`/movie/${movie.id}`}
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

export default Slider;
