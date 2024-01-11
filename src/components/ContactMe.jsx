import React from "react";

export const ContactMe = () => {
  return (
    <section className="flex flex-col w-3/4 bg-white justify-center py-[96px] px-[80px] gap-12 m-auto dark:bg-black">
      <div className="flex flex-col gap-4">
        <div>
          <p className="text-sm text-center text-[#4b5563] rounded-xl justify-center items-center m-auto w-[122px] h-7  bg-[#E5E7EB] py-1 px-5">
            Get in touch
          </p>
        </div>
        <div className="flex justify-center">
          <p className="text-center items-center text-xl justify-center w-[576px] dark:text-[#D1D5DB]">
            What’s next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-center gap-5 items-center ">
          <div className="w-5 h-5">
            <img src="/Iconemail.svg"></img>
          </div>
          <div>
            <p className="text-4xl dark:text-[#F9FAFB]">
              reachsagarshah@gmail.com
            </p>
          </div>
          <div className="w-5 h-5">
            <img src="/Iconbutton.svg"></img>
          </div>
        </div>
        <div className="flex justify-center gap-5 items-center">
          <div className="w-5 h-5">
            <img src="/Iconphone.svg"></img>
          </div>
          <div>
            <p className="text-4xl dark:text-[#F9FAFB]">+91 8980500565</p>
          </div>
          <div className="w-5 h-5">
            <img src="/Iconbutton.svg" className=""></img>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center">
        <div>
          <p className="text-base dark:text-[#F9FAFB]">
            You may also find me on these platforms!
          </p>
        </div>
        <div className="actions">
          <img className="dark:hidden" src=" Icon3.svg"></img>
          <img className="hidden dark:flex" src="Iconwhitegithub.svg"></img>
          <img className="dark:hidden" src="Icon2.svg"></img>
          <img className="hidden dark:flex" src="Iconwhitetwitter.svg"></img>
          <img className="dark:hidden" src="Icon4.svg"></img>
          <img className="hidden dark:flex" src="Iconwhitepic.svg"></img>
        </div>
      </div>
    </section>
  );
};
