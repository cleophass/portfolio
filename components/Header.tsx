"use client";

import React, {useRef } from "react";
import TypingAnimation from "@/components/magicui/typing-animation";
import RetroGrid from "@/components/magicui/retro-grid";
import ShimmerButton from "@/components/magicui/shimmer-button";

import RobotCanvas from "./three/Robot";
import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
  const container = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    const marqueeSection = document.getElementById("skills");
    if (marqueeSection) {
      marqueeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen" ref={container}>
      <RetroGrid />
      <ThemeSwitch />
      <div className="p-14 sm:flex min-h-screen hidden sm:flex-row items-center ">
        <div className="w-1/2 flex flex-col relative pb-32">
          <div className="flex pb-4">
            <TypingAnimation
              className="text-5xl font-bold text-black dark:text-white"
              text={"Hi, I'm Cléophas \n A Creative Developer"}
              duration={50}
            />

          </div>
          <div className="py-6  "> linkedin github etc etc</div>
          <div className="">
            <ShimmerButton
              className="toanimate shadow-2xl button"
              onClick={handleButtonClick}
            >
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Discover
              </span>
            </ShimmerButton>
          </div>
        </div>
        <div className="w-1/2 sm:flex hidden relative justify-center pr-24">
          <RobotCanvas />
        </div>
      </div>
      <div className="sm:hidden min-h-screen grid grid-rows-3">
        <div className=""></div>
        <div className="flex flex-col justify-center items-center p-4 gap-8">
          <TypingAnimation
            className="text-3xl font-bold text-black dark:text-white text-center"
            text={"Hey there! I'm Cléophas\nand I'm a Data Engineer"}
            duration={50}
          />
          <ShimmerButton
            className="shadow-2xl mt-4"
            onClick={handleButtonClick}
          >
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Discover
            </span>
          </ShimmerButton>
        </div>
      </div>
    </div>
  );
}
