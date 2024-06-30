"use client";
import React, { useState } from "react";
import Card from "./ui/Card";
import TypingAnimation from "./magicui/typing-animation";
import useIntersectionObserver from "@/hook/useIntersectionObserver";
import solution250 from "../public/solution250.jpeg";
import roadAccidentDashboard from "../public/streamlit.png";
import bodyScan from "../public/BodyScanIcon.png";

export default function Portfolio() {
  const [isTyping, setIsTyping] = useState(false);

  const handleIntersection = () => {
    setIsTyping(true);
  };

  const [ref] = useIntersectionObserver(handleIntersection);

  return (
    <div className="flex flex-col items-center justify-center h-full gap-10">
      <div ref={ref} className="w-full">
        {isTyping && <TypingAnimation text="Portfolio" className="text-6xl dark:text-white" duration={60} />}
      </div>
      <div className="flex flex-col sm:flex-row justify-between gap-20">
        <Card
          title="Solution 250"
          description="Conception d'une application mobile pour rendre le festival Pete The Monkey toujours plus agréable."
          imageSrc={solution250.src} 
          altText="Festival App"
          link="https://github.com/jeandtx/Solution250"
        />
        <Card
          title="BodyScan"
          description="Conception d'une application mobile pour rendre le festival Pete The Monkey toujours plus agréable."
          imageSrc={bodyScan.src}
          altText="Festival App"
          link=""
        />
        <Card
          title="Road Accident Dashboard"
          description="Conception d'une application mobile pour rendre le festival Pete The Monkey toujours plus agréable."// Utilisation d'une URL de chaîne de caractères
          imageSrc={roadAccidentDashboard.src}
          altText="Festival App"
          link="https://car-accident-dashboard.streamlit.app/"
        />
      </div>
    </div>
  );
}
