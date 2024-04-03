import {  ProgressLayOut } from "@/components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Roboto } from "next/font/google";
import MyState from "@/context/MyState";
import { Metadata } from "next";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  metadataBase: new URL("https://AlaaFawaz/"),
  title: {
    default: "Net Flix",
    template: "Net Flix - %s",
  },
  description:
    "شاهد الأفلام، الأفلام عبر الإنترنت، شاهد التلفزيون، التلفزيون عبر الإنترنت، عروض تلفزيونية عبر الأنترنت، شاهد العروض التلفزيونية، بث الأفلام، بث التلفزيون، بث مباشر، متابعة عبر الإنترنت، أفلام، شاهد أفلام من مصر، شاهد تلفزيون عبر الإنترنت، لن تحتاج للتنزيل، أفلام بوقتها الكامل",
  verification: {
    google: "google-site-verification=123123123",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@alaa_fawaz",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ProgressLayOut>
          <MyState>
            {children}
          </MyState>
        </ProgressLayOut>
        <ToastContainer />
      </body>
    </html>
  );
}
