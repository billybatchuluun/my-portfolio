import React from "react";
//Icons
import { Javascript } from "@/components/Icons/Javascript";
import { Typescript } from "@/components/Icons/Typescript";
import { ReactIcon } from "@/components/Icons/ReactIcon";
import { NextJS } from "@/components/Icons/NextJS";
import { NodeJS } from "@/components/Icons/NodeJS";
import { ExpressJS } from "@/components/Icons/ExpressJS";
import { NestJS } from "@/components/Icons/NestJS";
import { SocketIO } from "@/components/Icons/SocketIO";
import { PostgreSQL } from "@/components/Icons/PostgreSQL";
import { MongoDB } from "@/components/Icons/MongoDB";
import { SassScss } from "@/components/Icons/SassScss";
import { Tailwindcss } from "@/components/Icons/Tailwindcss";
import { Figma } from "@/components/Icons/Figma";
import { Cypress } from "@/components/Icons/Cypress";
import { Storybook } from "@/components/Icons/Storybook";
import { Git } from "@/components/Icons/Git";
const iconData = [
  { icon: <Javascript />, title: "Javascript" },
  { icon: <Typescript />, title: "Typescript" },
  { icon: <ReactIcon />, title: "React" },
  { icon: <NextJS />, title: "Next.js" },
  { icon: <NodeJS />, title: "Node.js" },
  { icon: <ExpressJS />, title: "Express" },
  { icon: <NestJS />, title: "Nest.js" },
  { icon: <SocketIO />, title: "Socket.io" },
  { icon: <PostgreSQL />, title: "PostgreSQL" },
  { icon: <MongoDB />, title: "MongoDB" },
  { icon: <SassScss />, title: "Sass/Scss" },
  { icon: <Tailwindcss />, title: "Tailwindcss" },
  { icon: <Figma />, title: "Figma" },
  { icon: <Cypress />, title: "Cypress" },
  { icon: <Storybook />, title: "Storybook" },
  { icon: <Git />, title: "Git" },
];

export const Skills = () => {
  return (
    <section className="flex flex-wrap w-screen box-border  bg-white m-auto dark:bg-black, dark:bg-black">
      <div className="flex w-screen flex-wrap  items-center py-[96px] px-[80px]  flex-col gap-12 m-auto">
        <container className="flex flex-col gap-4 py-o px-8 w-[1216px]">
          <div>
            <p className="text-sm text-center text-[#4b5563] justify-center items-center m-auto w-[75px] h-7 rounded-xl bg-[#E5E7EB] py-1 px-5">
              Skills
            </p>
          </div>
          <div>
            <p className="text-center items-center dark:text-white">
              The skills, tools and technologies I am really good at:
            </p>
          </div>
        </container>
        <container className="flex flex-col flex-wrap gap-12 w-3/4 ">
          <div className="grid grid-cols-8 gap-x-8 gap-y-12 ">
            {iconData.map((data, index) => {
              console.log(data.icon);
              return (
                <div className="flex flex-col items-center min-w-fit">
                  {data.icon}
                  <p>{data.title}</p>
                </div>
              );
            })}
          </div>
          <div className="bg-[#E5E7EB]"></div>
        </container>
      </div>
    </section>
  );
};
