import React from "react";
import { Tags } from "./Tags";

const projects = [
  {
    name: "Fiskill",
    image: "/pic1.png",
    usedTechnologies: [
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
    ],
  },
  {
    name: "News site",
    image: "/pic1.png",
    usedTechnologies: [
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
    ],
  },
  {
    name: "Todo Application",
    image: "/pic1.png",
    usedTechnologies: [
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
    ],
  },
];

export const Work = () => {
  return (
    <section className="flex flex-col flex-wrap w-screen bg-white justify-center py-[96px] px-[80px]  m-auto dark:bg-black">
      <div className="flex  py-0 px-8  flex-col gap-12  items-center justify-center self-stretch rounded-xl">
        <container className="flex flex-col gap-4 py-o px-8 ">
          <div>
            <p className="text-sm text-center text-[#4b5563] rounded-xl justify-center items-center m-auto w-[115px] h-7  bg-[#E5E7EB] py-1 px-5">
              Work
            </p>
          </div>
          <div>
            <p className="text-center items-center dark:text-[#D1D5DB]">
              Some of the noteworthy projects I have built:
            </p>
          </div>
        </container>
        {projects.map((project, index) => (
          <WorkCard reverse={index % 2 == 1} project={project} />
        ))}
      </div>
    </section>
  );
};

const WorkCard = (props) => {
  const { reverse, project } = props;

  return (
    <container className="flex flex-col flex-wrap gap-12 items-center dark:text-[#D1D5DB]">
      <div
        className={`flex p-8 rounded-xl justify-center items-center ${
          reverse && "flex-row-reverse"
        }`}
      >
        <div className="flex w-[576px] h-[480px] p-12 bg-[#F9FAFB] dark:bg-[#374252]">
          <img src={project.image}></img>
        </div>
        <div className="flex flex-col p-12 w-[576px] h-[480px] gap-4  dark:bg-[#1F2937]">
          <div>
            <p className="text-lg font-semibold">{project.name}</p>
          </div>
          <div className="">
            <p className="text-base leading-6 decoration-[#4B5563]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </p>
          </div>
          <div className="flex flex-wrap ">
            {project.usedTechnologies.map((tag, index) => {
              return <Tags text={tag} />;
            })}
          </div>
          <div className="w-6 h-6">
            <img src="/Iconfinal.svg"></img>
          </div>
        </div>
      </div>
    </container>
  );
};
