import React from "react";

export const Hero = () => {
  return (
    <section className="box-border w-3/4 flex m-auto py-24 px-20 justify-between items-start ">
      <div className="flex py-0 px-8 items-start gap-12 w-screen justify-between flex-wrap">
        <div className="flex flex-col justify-center gap-12 w-[768px]">
          <div className="flex flex-col justify-center gap-2">
            <div>
              <h1 className="font-['inter'] text-6xl non-italic font-semibold leading-[72px] tracking-[-1.2px] ">
                Hi, I’m Sagar 👋
              </h1>
            </div>
            <div>
              <p className="text-#4b5563 text-base font-normal leading-6">
                I'm a full stack developer (React.js & Node.js) with a focus on
                creating (and occasionally designing) exceptional digital
                experiences that are fast, accessible, visually appealing, and
                responsive. Even though I have been creating web applications
                for over 7 years, I still love it as if it was something new.
              </p>
            </div>
          </div>
          <div className="location-group">
            <div className="location">
              <img src="/Icon-1.svg" style={{ width: 24, height: 24 }}></img>
              <p>Ahmedabad, India</p>
            </div>
            <div className="group">
              <div className="w-2 h-2 rounded-3xl bg-[#10b981]"></div>
              <p>Available for new projects</p>
            </div>
          </div>
          <div className="actions">
            <img src="Icon3.svg"></img>
            <img src="Icon2.svg"></img>
            <img src="Icon4.svg"></img>
          </div>
        </div>
        <div className="column-2">
          <img src="/Column.png"></img>
        </div>
      </div>
    </section>
  );
};
