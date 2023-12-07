import React from 'react'

export const Header = () => {
  return (
    <header className="w-[1440px] h-[68px] py-4 px-20 justify-between items-center m-auto">
        <nav className="flex justify-between items-center py-0 px-9">
          <div className="w-24 h-9">
            <img src="/_.png"></img>
          </div>
          <div className="flex gap-6 items-center">
            <p>About</p>
            <p>Work</p>
            <p>Testimonials</p>
            <p>Contact</p>
            <div className="flex py-1.5 justify-center items-center">
              <img src="/Icon.svg"></img>
            </div>
            <button className="flex py-1 px-4 justify-center items-center gap-2 rounded xl bg-[#111827] text-white">
              Download CV
            </button>
          </div>
        </nav>
      </header>
  )
}
