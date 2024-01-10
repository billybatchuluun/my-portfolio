import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Work } from "@/components/Work";
import { ContactMe } from "@/components/ContactMe";
import { Footer } from "@/components/Footer";
import { useState } from "react";

export default function Home() {
  const [dark, setDark] = useState(false);
  return (
    <main className={`${dark ? "dark" : ""}`}>
      <Header setDark={setDark} dark={dark} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Work />
      <ContactMe />
      <Footer />
    </main>
  );
}
