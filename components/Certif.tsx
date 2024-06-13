"use client";
import React from "react";
import SparklesText from "@/components/magicui/sparkles-text";
import CredlyBadge from "@/components/credlybadge";
import useIntersectionObserver from "@/hook/useIntersectionObserver";

export default function Certif() {
  const [ref, isVisible] = useIntersectionObserver(() => {
    console.log("Component is visible!");
  });

  return (
    <div className="w-full flex flex-col items-center p-4 sm:py-0">
      
        <SparklesText text="Certifications" />
        <div
        
        className={`py-20 transition-opacity duration-1500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="flex flex-col md:flex-row items-center my-12 gap-12">
          <div className="pb-48">
          <CredlyBadge />
          </div>
          <div className="md:ml-8 mt-8 md:mt-0 max-w-md text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-4">What is this Certification?</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              This certification is a recognition of the skills and knowledge you have acquired. It is awarded by Credly,
              a leading provider of digital credentials. Displaying this badge demonstrates your expertise in a specific area
              and is a testament to your commitment to professional development.
            </p>
            <div ref={ref}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
