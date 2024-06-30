"use client";

import MarqueeDemo from "@/components/marqueefilled";
import TextRevealByWord from "@/components/magicui/text-reveal";
import { MySkills } from "@/components/my-skills";
import Portfolio from "@/components/Portfolio";
import Certif from "@/components/Certif";
import Header from "@/components/Header";
import ThemeSwitch from "@/components/ThemeSwitch";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <main className="">

      <Header />

      <div id="skills">
      
      <MySkills />
      </div>
      ici les certifs
      <Projects  isDesktop={true} clientHeight={"100vh"} />
      <div className="">
        revoir cette page
        <Certif />
      </div>
      <div>
        <Portfolio />
      </div>
      <div className="relative flex justify-center items-center">
        <MarqueeDemo />
      </div>

      <div className="flex justify-center items-center mt-8">
        <TextRevealByWord
          text="Thanks for reading"
          className="w-full text-center"
        />
      </div>
    </main>
  );
}
