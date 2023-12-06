"use client";

import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const navItem = [
  {
    id: "home",
    item: "Home",
    offSet: 0,
  },
  ,
  {
    id: "about",
    item: "About",
    offSet: 700,
  },
  {
    id: "project",
    item: "Project",
    offSet: 1200,
  },
  {
    id: "contact",
    item: "Contact",
    offSet: 3000,
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavItemClick = (offSet) => {
    window.scrollTo({ top: offSet, behavior: "smooth" });
    setIsMenuOpen(false);
  };

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
            <div className="h-32 border transition-all w-28 p-2 text-base absolute right-0 shadow rounded bg-black ">
              {navItem.map((nav) => {
                return (
                  <div
                    onClick={() => handleNavItemClick(nav.offSet)}
                    key={nav.id}
                    className=" w-[80px] mr-1 text-white font-semibold cursor-pointer mt-1 hover:text-green-200"
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
              onClick={() => handleNavItemClick(nav.offSet)}
              key={nav.id}
              className=" w-[80px] mr-2 text-white font-semibold cursor-pointer border-b-2 border-black hover:border-b-2 hover:border-white transition-all text-center"
            >
              {nav.item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
