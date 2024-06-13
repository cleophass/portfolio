"use client";

import React from "react";
import TypingAnimation from "@/components/magicui/typing-animation";
import RetroGrid from "@/components/magicui/retro-grid";
import ShimmerButton from "@/components/magicui/shimmer-button";

export default function HeaderMobile() {
    const handleButtonClick = () => {
        const marqueeSection = document.getElementById("skills");
        if (marqueeSection) {
            marqueeSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="min-h-screen grid grid-rows-3">
            <div className=""></div>
            <RetroGrid />
            <div className=" flex flex-col justify-center items-center p-4 gap-8">
                <TypingAnimation
                    className="text-3xl font-bold text-black dark:text-white text-center"
                    text={"Hey there! I'm Cléophas\nand I'm a Data Engineer"}
                    duration={50}
                />
                <ShimmerButton className="shadow-2xl mt-4" onClick={handleButtonClick}>
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                        Discover
                    </span>
                </ShimmerButton>
            </div>
        </div>
    );
}
