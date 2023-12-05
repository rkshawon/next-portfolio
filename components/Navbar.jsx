"use client";

import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const navItem = [
  {
    id: "home",
    item: "Home",
  },
  ,
  {
    id: "about",
    item: "About",
  },
  {
    id: "skills",
    item: "Skill",
  },
  {
    id: "project",
    item: "Project",
  },
  {
    id: "contact",
    item: "Contact",
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="flex justify-between items-center h-20 bg-black px-10">
      <h1 className=" font-bold text-3xl">Rk Shawon</h1>
      <div
        className="text-2xl cursor-pointer md:hidden relative "
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <RxCross2 /> : <IoMenu />}
        <div>
          {isMenuOpen && (
            <div className="h-40 border transition-all w-28 p-2 text-base absolute right-0 shadow rounded bg-black">
              {navItem.map((nav) => {
                return (
                  <div
                    key={nav.id}
                    className=" w-[80px] mr-2 text-white font-semibold cursor-pointer mt-1"
                  >
                    {nav.item}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <div className="md:flex justify-around items-center hidden">
        {navItem.map((nav) => {
          return (
            <div
              key={nav.id}
              className=" w-[80px] mr-2 text-white font-semibold cursor-pointer"
            >
              {nav.item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
