import { FormLog_in_Up } from "@/components";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "log-in",
};

const SignUpPage = () => (
  <>
    <Link href="/">
      <h1 className="text-red-600 text-4xl font-bold cursor-pointer text-center">
        NETFLIX
      </h1>
    </Link>
    <h2 className="text-3xl text-center">Sign Up</h2>

    <FormLog_in_Up title="Sign Up" link="login" />
  </>
);
export default SignUpPage;
