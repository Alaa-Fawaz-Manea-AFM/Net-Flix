import { Check_User_Login, HeroImgSignInUp } from "@/components";

const LayoutAuth = ({ children }: { children: React.ReactNode }) => (
  <Check_User_Login>
    <section className="flex items-center flex-col h-screen w-full">
      <div className="z-[-1020] absolute">
        <HeroImgSignInUp />
      </div>
      <div className="mt-32 absolute max-xsm:px-5 px-16 pt-12 pb-5 bg-black flex flex-col gap-5 w-4/5 md:w-[512px] rounded-2xl">
        {children}
      </div>
    </section>
  </Check_User_Login>
);

export default LayoutAuth;
