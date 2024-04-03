import { Links } from "@/utils/api";
import Link from "next/link";
import React from "react";

const NavLink = () => (
  <ul className="flex text-lg gap-4 flex-col md:flex-row">
    {Links.map((link) => (
      <Link
        key={link}
        href={`/${link[0].toLowerCase()}${link.slice(1)}`}
        className="w-fit"
      >
        {link}
      </Link>
    ))}
  </ul>
);

export default NavLink;
