import { HerPageSlid } from "@/components";

export const metadata = () => {
  return {
    title: "Trending",
  };
};

const TrendingPagae = async () => (
  <div className="flex justify-center flex-wrap w-full gap-5">
    <HerPageSlid title="Trending" nameReq="fetchTrending" />
  </div>
);

export default TrendingPagae;
