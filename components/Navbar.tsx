import Scroll_Header from "./Scroll_Header";
import BtnLogIn_Out from "./BtnLogIn_Out";
import ToggleNav from "./ToggleNav";
import NavLink from "./NavLink";
import Link from "next/link";

const Navbar = () => (
  <Scroll_Header>
    <div className="flex items-center md:gap-7">
      <Link href="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      <div className="max-md:hidden">
        <NavLink />
      </div>
    </div>

    <div className="max-md:hidden">
      <BtnLogIn_Out />
    </div>
    <ToggleNav />
  </Scroll_Header>
);

export default Navbar;
