import { getData, request } from "@/utils/api";
import { star } from "@/public/assets";
import { IMovieDetail } from "@/types";
import Image from "next/image";

const Hero = async () => {
  let movies = await getData(request?.requestPopular as string);

  let movie: IMovieDetail =
    movies?.[Math.floor(Math.random() * movies?.length)];

  return (
    <div className="h-screen w-screen relative">
      <Image
        src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
        alt="Net_flix_images"
        fill
        className="object-cover"
      />
      <div className="w-full h-3/4 absolute px-5 sm:px-20 max-sm:top-1/4 sm:top-[40%] flex flex-col items-start ">
        <div className="md:w-3/4 flex flex-col gap-5">
          <span className="text-5xl">{movie?.original_title}</span>
          <div className="flex items-center gap-5">
            {movie?.release_date}
            <span className="flex items-center">
              {movie?.vote_average}{" "}
              <Image src={star} alt="star_icon" width={20} height={20} />
            </span>
          </div>
          <span className="leading-normal line-clamp-5">{movie?.overview}</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
