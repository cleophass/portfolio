"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ProjectProps {
  image: string;
  title: string;
  description: string;
}

const Project: React.FC<ProjectProps> = ({ image, title, description }) => {
  const projectRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const projectElement = projectRef.current;
    const imageElement = imageRef.current;
    const textElement = textRef.current;

    gsap.set(imageElement, {opacity:0, x: '-80%' }); // Initial position off-screen to the left
    gsap.set(textElement, {opacity:0,x: '80vh' }); // Initial position off-screen to the right

    gsap.to(imageElement, {
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
    <div ref={projectRef} className="flex flex-col md:flex-row items-center my-8">
      <img ref={imageRef} src={image} alt={title} className="w-full object-cover" />
      <div ref={textRef} className="">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
};

export default Project;
