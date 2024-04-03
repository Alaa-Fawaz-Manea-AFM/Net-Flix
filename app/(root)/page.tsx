import { arrReq, request } from "@/utils/api";
import { Hero, Skiliton_Slider, Slider } from "@/components";
import { Suspense } from "react";

const HomePage = () => {
  const skiltonArr = Array.from({ length: arrReq.length });
  return (
    <div className="overflow-hidden">
      <Hero />
      <div className="py-10">
        <Suspense
          fallback={
            <>
              {skiltonArr.map((arr) => (
                <Skiliton_Slider />
              ))}
            </>
          }
        >
          {arrReq?.map((arr: any) => (
            <Slider key={arr.name} title={arr.name} req={request[arr.req]} />
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default HomePage;
