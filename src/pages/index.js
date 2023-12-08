import Image from "next/image";
import { Inter } from "next/font/google";
import { Container } from "postcss";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
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
import { Poor_Story } from "next/font/google";
import { Git } from "@/components/Icons/Git";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const iconData = [
    //   { icon: <Javascript />, title: "javascript" },
    //   { icon: <Cypress />, title: "cypress" },
    //   { icon: <ExpressJS />, title: "express" },
    //   { icon: <Figma />, title: "figma" },
    //   { icon: <MongoDB />, title: "mongoDB" },
  ];

  return (
    <main>
      <Header />
      <Hero />
      <About />
      {/* <Skills> */}
      <section className="w-[1440px] h-[560px] bg-white m-auto">
        <div className="flex w-[1280px] h-[358px] py-[96px] px-[80px]  flex-col gap-12 m-auto">
          <container className="flex flex-col gap-4 py-o px-8 w-[1216px]">
            <div>
              <p className="text-sm text-center text-[#4b5563] justify-center items-center m-auto w-[75px] h-7 rounded-xl bg-[#E5E7EB] py-1 px-5">
                Skills
              </p>
            </div>
            <div>
              <p className="text-center items-center">
                The skills, tools and technologies I am really good at:
              </p>
            </div>
          </container>
          <container className="flex flex-col gap-12 bg-[#E5E7EB] w-[1216px] h-[248px]">
            <div className="bg-[#E5E7EB]">
              {/* <Cypress />
              <ExpressJS />
              <Figma /> */}
              {iconData.map((data, index) => {
                console.log(data.icon);
                return (
                  <div>
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
      {/* </Skills> */}
    </main>
  );
}
