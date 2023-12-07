import Image from "next/image";
import { Inter } from "next/font/google";
import { Container } from "postcss";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
    </main>
  );
}
