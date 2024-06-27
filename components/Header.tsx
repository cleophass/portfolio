"use client";

import React, { useEffect, useRef } from "react";
import TypingAnimation from "@/components/magicui/typing-animation";
import Image from "next/image";
import RetroGrid from "@/components/magicui/retro-grid";
import ShimmerButton from "@/components/magicui/shimmer-button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import RobotCanvas from "./three/Robot";
export default function Header() {
  const container = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    const marqueeSection = document.getElementById("skills");
    if (marqueeSection) {
      marqueeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  
  return (
    <div className="sm:flex min-h-screen sm:flex-col" ref={container}>
      <RetroGrid />

      <div className="flex flex-row sm:p-16">
        <div className="flex flex-col sm:w-1/2 relative items-center justify-center">
          <div className="flex items-end sm:h-1/2 pb-4">
            <TypingAnimation
              className="text-3xl sm:text-5xl font-bold text-black dark:text-white"
              text={"Hey there! I'm Cléophas\nand I'm a Data Engineer"}
              duration={50}
            />
          </div>
          <div className="flex items-start h-1/2 pt-4">
            <ShimmerButton className="toanimate shadow-2xl button" onClick={handleButtonClick}>
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Discover
              </span>
            </ShimmerButton>
          </div>
        </div>

        <div className="sm:flex hidden w-1/2 relative justify-center ">
        <RobotCanvas />
        </div>
      </div>
    </div>
  );
}
