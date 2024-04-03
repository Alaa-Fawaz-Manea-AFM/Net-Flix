import { Loader_icon } from "@/public/assets";
import Image from "next/image";
const loading = () => (
  <span className="flex w-screen h-screen items-center justify-center">
    <Image src={Loader_icon} width={32} height={32} alt="" />
  </span>
);

export default loading;
