"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";

gsap.registerPlugin(ScrollTrigger);

interface ProjectProps {
  image: {
    src: string;
  };
  title: string;
  description: string;
  tools: string;
}

const Project: React.FC<ProjectProps> = ({ image, title, description,tools}) => {
  const projectRef = useRef(null);
  const cardRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const projectElement = projectRef.current;
    const cardElement = cardRef.current;
    const textElement = textRef.current;

    gsap.set(cardElement, { opacity: 0, x: '-50%' }); // Initial position off-screen to the left
    gsap.set(textElement, { opacity: 0, x: '40vh' }); // Initial position off-screen to the right

    gsap.to(cardElement, {
      x: 0,
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: projectElement,
        start: 'top 80%',
        end: 'top 50%',
        scrub: true,
      },
    });

    gsap.to(textElement, {
      x: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: projectElement,
        start: 'top 80%',
        end: 'top 50%',
        scrub: true,
      },
    });
  }, []);

  return (
    <div ref={projectRef} className="flex flex-row justify-center gap-60 items-center my-8">
      <div ref={cardRef} className="max-w-sm">
        <NeonGradientCard className="items-center justify-center text-center" imageSrc={image.src}>
          <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
          </span>
        </NeonGradientCard>
      </div>
      <div className='flex flex-col gap-10 w-72  'ref={textRef}>
      <div  className="">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-2">{description}</p>
      </div>
      <div ref={textRef} className="">
        <h3 className="text-xl font-bold">Outils utilisés</h3>
        <p className="mt-2">{tools}</p>
      </div>
      </div>
      
    </div>
  );
};

export default Project;
