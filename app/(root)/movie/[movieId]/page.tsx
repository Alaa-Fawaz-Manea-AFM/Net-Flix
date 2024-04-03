import { getDataDetails } from "@/utils/api";
import { notFound } from "next/navigation";
import { star } from "@/public/assets";
import { IMovieDetail } from "@/types";
import { Suspense } from "react";
import { Metadata } from "next";
import Image from "next/image";

type IParamsDetails = { params: { movieId: string } };

export async function generateMetadata({
  params: { movieId },
}: IParamsDetails): Promise<Metadata> {
  try {
    let { overview, original_title, backdrop_path }: IMovieDetail =
      await getDataDetails(movieId);
    const imgage = `https://image.tmdb.org/t/p/original${backdrop_path}`;
    return {
      title: original_title,
      description: overview,
      openGraph: {
        images: [imgage],
      },
    };
  } catch (error) {
    return {
      title: "not-foud",
      description: "The page you are looking for does not exits.",
    };
  }
}

const MovieDetailsPage = async ({ params: { movieId } }: IParamsDetails) => {
  let movieDetail: IMovieDetail;
  try {
    movieDetail = await getDataDetails(movieId);
  } catch (error) {
    notFound();
  }

  const {
    genres,
    runtime,
    tagline,
    overview,
    vote_count,
    poster_path,
    vote_average,
    release_date,
    backdrop_path,
    original_title,
    production_companies,
  } = movieDetail;

  return (
    <div className="w-screen h-screen pb-10 space-y-20">
      <div className="relative w-screen h-[70vh]">
        <Suspense
          fallback={
            <div className="relative w-screen h-[70vh] bg-gray-500 animate-pulse" />
          }
        >
          <Image
            fill
            src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
            alt="images"
            className="object-cover"
          />
        </Suspense>
      </div>
      <div className="w-4/5 mx-auto ">
        <div className="md:w-full flex flex-col md:flex-row justify-center items-start gap-10 w-4/5 mx-auto">
          <Suspense
            fallback={
              <div className="md:w-full flex flex-col md:flex-row justify-center items-start gap-10 w-4/5 mx-auto bg-gray-500 animate-pulse" />
            }
          >
            <Image
              src={`https://image.tmdb.org/t/p/original${poster_path}`}
              width={300}
              height={400}
              alt="images movies"
              className="rounded-xl"
            />
          </Suspense>

          <div className="flex flex-1 flex-col sm:ml-5">
            <div className="shadow_poster_r mb-2 flex flex-col items-start">
              <h3 className="sm:text-5xl text-xl font-bold text-start mb-2">
                {original_title}
              </h3>
              <p className="text-secondary">{tagline}</p>
              <div className="flex items-center gap-3">
                <span className="flex items-center text-base text-secondary">
                  {vote_average}
                  <Image src={star} alt="star_icon" width={20} height={20} />
                </span>
                <span className="text-base text-secondary">{`(${vote_count}) votes`}</span>
              </div>
              <span className="text-secondary">{runtime} mins</span>
              <span className="text-secondary">{`Release date: ${release_date}`}</span>
              <div className="flex gap-2 my-5 flex-wrap">
                {genres?.map((genre, index) => (
                  <span
                    key={index}
                    className="rounded-3xl p-2 border-2 border-secondary text-secondary"
                  >
                    {genre?.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <span className="text-2xl font-semibold block">Synopsis</span>
          <span className="text-s0 text-secondary columns-2 text-justify">
            {overview}
          </span>
        </div>
        {production_companies?.length ? (
          <h2 className="text-2xl xs:text-4xl mb-5 text-center">
            Production companies
          </h2>
        ) : (
          ""
        )}
        <div className="flex flex-wrap items-end justify-center gap-5">
          {production_companies?.map((company, index) => (
            <div key={index}>
              {company?.logo_path && (
                <div className="flex gap-8 flex-col items-center">
                  <Suspense
                    fallback={
                      <div className="w-[200px] h-[200px] bg-gray-500 animate-pulse" />
                    }
                  >
                    <Image
                      width={200}
                      height={200}
                      className="object-cover bg-white p-2"
                      src={`https://image.tmdb.org/t/p/original${company?.logo_path}`}
                      alt="NetFlex"
                    />
                  </Suspense>
                  <span>{company?.name}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
