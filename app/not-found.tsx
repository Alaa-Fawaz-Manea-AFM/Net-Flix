import Link from "next/link";

const notFound = () => (
  <div className="flex w-full flex-col items-center justify-center gap-5 pt-32">
    <h1 className="text-xl sm:text-3xl">Sorry, not found page,</h1>
    <Link href="/" className="text-xl" type="button">
      <b>Go to Home Page</b>
    </Link>
  </div>
);

export default notFound;
