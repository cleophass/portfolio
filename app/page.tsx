"use client";
import TypingAnimation from "@/components/magicui/typing-animation";
import Image from "next/image";
import RetroGrid from "@/components/magicui/retro-grid";
import MarqueeDemo from "@/components/marqueefilled";
import ShimmerButton from "@/components/magicui/shimmer-button";
import TextRevealByWord from "@/components/magicui/text-reveal";
import { IconCloudDemo } from "@/components/CloudDemo";
import { MySkills } from "@/components/my-skills";

export default function Home() {
  const handleButtonClick = () => {
    const marqueeSection = document.getElementById("marquee");
    if (marqueeSection) {
      marqueeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="">
      <div className="flex min-h-screen flex-col">
        <RetroGrid />

        <div className="flex flex-row p-16">
          <div className="flex flex-col w-1/2 relative items-center justify-center">
            <div className="flex items-end h-1/2 pb-4">
              <TypingAnimation
                className="text-5xl font-bold text-black dark:text-white"
                text={"Hey there! I'm Cléophas\nand I'm a Data Engineer"}
                duration={50}
              />
            </div>
            <div className="flex items-start h-1/2 pt-4">
              <ShimmerButton className="shadow-2xl" onClick={handleButtonClick}>
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Discover
                </span>
              </ShimmerButton>
            </div>
          </div>

          <div className="w-1/2 relative flex justify-center items-center h-[500px]">
            <Image
              className="relative"
              src="/profilpicture.jpg"
              alt="Profile Picture"
              width={360}
              height={360}
              priority
            />
          </div>
        </div>

          </div>
        <div id="marquee" className="relative flex justify-center items-center">
          <MarqueeDemo />
        </div>

        <div className="flex flex-col w-full">
        <div className="mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">My Skills</h2>
        </div>
        <div className="flex flex-row">
          
      <div className="w-1/2">
     
     <MySkills/>
     
        
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <IconCloudDemo />
      </div>
      {/* <div className="w-1/3">
     
     <MySkills/>
     
        
      </div> */}
      </div>
    </div>
        <div className="">
          <h1>Certif</h1>
          {/* <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="4bd254d8-ad08-423c-b28c-25fbeea86c41" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script> */}
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
