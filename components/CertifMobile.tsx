"use client";
import React from "react";
import SparklesText from "@/components/magicui/sparkles-text";
import CredlyBadge from "@/components/credlybadge";
import useIntersectionObserver from "@/hook/useIntersectionObserver";

export default function CertifMobile() {
  const [ref, isVisible] = useIntersectionObserver(() => {
    console.log("Component is visible!");
  });

  return (
    <div className="w-full flex flex-col items-center p-4 py-14 sm:py-0">
      
        <SparklesText text="Certifications" />
        <div
        
        className={`transition-opacity duration-1500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="flex flex-col" ref={ref}>
          <CredlyBadge />
          <div className="text-center ">
            <h2 className="text-2xl font-semibold mb-4">What is this Certification?</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              This certification is a recognition of the skills and knowledge you have acquired. It is awarded by Credly,
              a leading provider of digital credentials. Displaying this badge demonstrates your expertise in a specific area
              and is a testament to your commitment to professional development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
