import { HerPageSlid } from "@/components";

export const metadata = () => {
  return {
    title: "Horror",
  };
};

const HorrorPagae = async () => (
  <div className="flex justify-center flex-wrap w-full gap-5">
    <HerPageSlid title="Horror" nameReq="requestHorror" />
  </div>
);

export default HorrorPagae;
