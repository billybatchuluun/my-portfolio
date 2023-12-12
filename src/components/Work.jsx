import React from "react";
import { Tags } from "./Tags";

export const Work = () => {
  const tags = [
    "React",
    "Next.js",
    "Typescript",
    "Nest.js",
    "PostgreSQL",
    "Tailwindcss",
    "Figma",
    "Cypress",
    "Storybook",
    "Git",
  ];
  return (
    <section className="flex flex-col w-screen bg-white justify-center py-[96px] px-[80px]  m-auto ">
      <div className="flex  py-0 px-8  flex-col gap-12  items-center justify-center self-stretch rounded-xl">
        <container className="flex flex-col gap-4 py-o px-8 ">
          <div>
            <p className="text-sm text-center text-[#4b5563] rounded-xl justify-center items-center m-auto w-[115px] h-7  bg-[#E5E7EB] py-1 px-5">
              Work
            </p>
          </div>
          <div>
            <p className="text-center items-center">
              Some of the noteworthy projects I have built:
            </p>
          </div>
        </container>
        <container className="flex flex-col gap-12 items-center">
          <div className="flex p-8 rounded-xl  bg-white justify-center items-center">
            <div className="flex lg:w-[480px] p-12 bg-[#F9FAFB]">
              <img src="/pic1.png"></img>
            </div>
            <div className="flex flex-col p-12 w-[576px] gap-4">
              <div>
                <p className="text-lg font-semibold">Fiskil</p>
              </div>
              <div className="">
                <p className="text-base leading-6 decoration-[#4B5563]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante
                  ipsum primis in faucibus orci luctus et ultrices posuere
                  cubilia curae.
                </p>
              </div>
              <div className="flex flex-wrap">
                {tags.map((tag, index) => {
                  return <Tags text={tag} />;
                })}
              </div>
              <div className="w-6 h-6">
                <img src="/Iconfinal.svg"></img>
              </div>
            </div>
          </div>
        </container>
        <container className="flex flex-col gap-12 items-center">
          <div className="flex p-8 rounded-xl  bg-white justify-center items-center">
            <div className="flex flex-col p-12 w-[576px] gap-4">
              <div>
                <p className="text-lg font-semibold">Fiskil</p>
              </div>
              <div className="">
                <p className="text-base leading-6 decoration-[#4B5563]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante
                  ipsum primis in faucibus orci luctus et ultrices posuere
                  cubilia curae.
                </p>
              </div>
              <div className="flex flex-wrap">
                {tags.map((tag, index) => {
                  return <Tags text={tag} />;
                })}
              </div>
              <div className="w-6 h-6">
                <img src="/Iconfinal.svg"></img>
              </div>
            </div>
            <div className="flex lg:w-[480px] p-12 bg-[#F9FAFB]">
              <img src="/pic1.png"></img>
            </div>
          </div>
        </container>
        <container className="flex flex-col gap-12 items-center">
          <div className="flex p-8 rounded-xl  bg-white justify-center items-center">
            <div className="flex lg:w-[480px] p-12 bg-[#F9FAFB]">
              <img src="/pic1.png"></img>
            </div>
            <div className="flex flex-col p-12 w-[576px] gap-4">
              <div>
                <p className="text-lg font-semibold">Fiskil</p>
              </div>
              <div className="">
                <p className="text-base leading-6 decoration-[#4B5563]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante
                  ipsum primis in faucibus orci luctus et ultrices posuere
                  cubilia curae.
                </p>
              </div>
              <div className="flex flex-wrap">
                {tags.map((tag, index) => {
                  return <Tags text={tag} />;
                })}
              </div>
              <div className="w-6 h-6">
                <img src="/Iconfinal.svg"></img>
              </div>
            </div>
          </div>
        </container>
      </div>
    </section>
  );
};
