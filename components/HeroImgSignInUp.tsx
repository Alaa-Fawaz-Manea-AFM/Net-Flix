import { log_in } from "@/public/assets";
import Image from "next/image";

const HeroImgSignInUp = ({ height }: { height?: boolean }) => (
  <section
    className={`${
      height ? "opacity-40" : "opacity-70"
    } relative h-screen w-screen`}
  >
    <Image
      fill
      src={log_in}
      alt="background_Img"
      className="object-cover w-full h-full"
    />
  </section>
);

export default HeroImgSignInUp;
