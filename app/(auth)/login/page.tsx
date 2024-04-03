import { FormLog_in_Up } from "@/components";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "log-in",
};

const LoginPage = () => (
  <>
    <Link href="/">
      <h1 className="text-red-600 text-4xl font-bold cursor-pointer text-center">
        NETFLIX
      </h1>
    </Link>
    <h2 className="text-3xl text-center">log In</h2>
    <FormLog_in_Up title="Log In" link="signup" />
  </>
);

export default LoginPage;
