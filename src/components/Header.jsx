import React from "react";
import { useState } from "react";

export const Header = ({ dark, setDark }) => {
  const toggleDarkMode = () => {
    setDark(!dark);
  };
  const symbol = "<SS/>";
  return (
    <header className="w-3/4 py-4 px-20 items-center m-auto box-border dark:bg-black">
      <nav className="flex flex-wrap justify-between items-center py-0 px-9">
        <div className="w-24 h-9">
          <span className="font-bold text-3xl dark:text-white">{symbol}</span>
        </div>
        <div className="flex gap-6 items-center dark:text-white">
          <p>About</p>
          <p>Work</p>
          <p>Testimonials</p>
          <p>Contact</p>
          <div
            className="flex py-1.5 justify-center items-center"
            onClick={toggleDarkMode}
          >
            <img className="dark:hidden" src="/Icon.svg"></img>
            <img className="hidden dark:flex" src="/Iconwhitemoon.svg"></img>
          </div>
          <button className="flex py-1 px-4 justify-center items-center gap-2 rounded xl bg-[#111827] text-white dark:bg-white dark:text-black">
            Download CV
          </button>
        </div>
      </nav>
    </header>
  );
};
