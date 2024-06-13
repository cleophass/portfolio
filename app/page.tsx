"use client";

import MarqueeDemo from "@/components/marqueefilled";
import TextRevealByWord from "@/components/magicui/text-reveal";
import { MySkills } from "@/components/my-skills";
import Portfolio from "@/components/Portfolio";
import Certif from "@/components/Certif";
import Header from "@/components/Header";
import HeaderMobile from "@/components/Headermobile";
import CertifMobile from "@/components/CertifMobile";
export default function Home() {
  


  return (
    <main className="">
      <div className="sm:block hidden"><Header/></div>
      <div className="sm:hidden block"><HeaderMobile/></div>
      
      
          <div id="skills"></div>
          <MySkills />
          <div className="hidden sm:flex"><Certif /></div>
          <div className="flex sm:hidden"><CertifMobile/></div>
    <div>
      <Portfolio/>

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
