import { HerPageSlid } from "@/components";

export const metadata = () => {
  return {
    title: "Popular",
  };
};

const PopularPagae = async () => (
  <div className="flex justify-center flex-wrap w-full gap-5">
    <HerPageSlid title="Popular" nameReq="requestPopular" />
  </div>
);

export default PopularPagae;
