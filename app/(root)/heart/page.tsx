import { Card_My_heart, HeroImgSignInUp } from "@/components/";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "heart",
  description:
    "شاهد الأفلام، الأفلام عبر الإنترنت، شاهد التلفزيون، التلفزيون عبر الإنترنت، عروض تلفزيونية عبر الأنترنت، شاهد العروض التلفزيونية، بث الأفلام، بث التلفزيون، بث مباشر، متابعة عبر الإنترنت، أفلام، شاهد أفلام من مصر، شاهد تلفزيون عبر الإنترنت، لن تحتاج للتنزيل، أفلام بوقتها الكامل",
};

const MyHeartPage = () => (
  <div className="relative">
    <HeroImgSignInUp height />

    <Card_My_heart />
  </div>
);

export default MyHeartPage;
