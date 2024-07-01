import { useEffect, useRef } from "react";
import { MENULINKS, PROJECTS } from "../../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ProjectTile from "./ProjectTile/ProjectTile";

// Enregistrer le plugin ScrollTrigger avec GSAP
gsap.registerPlugin(ScrollTrigger);

const Projects = ({ isDesktop, clientHeight }) => {
  const sectionRef = useRef(null);
  const sectionTitleRef = useRef(null);

  useEffect(() => {
    let projectsScrollTrigger;
    let projectsTimeline;

    if (isDesktop) {
      [projectsTimeline, projectsScrollTrigger] = getProjectsSt();
    } else {
      const projectWrapper = sectionRef.current.querySelector(".project-wrapper");
      projectWrapper.style.width = "calc(100vw - 1rem)";
      projectWrapper.style.overflowX = "scroll";
    }

    const [revealTimeline, revealScrollTrigger] = getRevealSt();

    return () => {
      projectsScrollTrigger && projectsScrollTrigger.kill();
      projectsTimeline && projectsTimeline.kill();
      revealScrollTrigger && revealScrollTrigger.kill();
      revealTimeline && revealTimeline.progress(1);
    };
  }, [isDesktop]);

  const getRevealSt = () => {
    const revealTl = gsap.timeline({ defaults: { ease: "none" } });

    revealTl.from(
      sectionRef.current.querySelectorAll(".staggered-reveal"),
      { opacity: 0, duration: 0.5, stagger: 0.5 },
      "<"
    );

    const scrollTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top bottom",
      end: "bottom bottom",
      scrub: 0,
      animation: revealTl,
    });

    return [revealTl, scrollTrigger];
  };

  const getProjectsSt = () => {
    const timeline = gsap.timeline({ defaults: { ease: "none" } });
    const innerContainer = sectionRef.current.querySelector(".inner-container");
    const projectWrapper = sectionRef.current.querySelector(".project-wrapper");

    const sidePadding = (document.body.clientWidth - innerContainer.clientWidth) / 2;
    const elementWidth = projectWrapper.scrollWidth;
    const width = window.innerWidth - elementWidth;

    timeline
      .to(sectionRef.current, { x: width })
      .to(sectionTitleRef.current, { x: -width }, "<");

    const duration = (elementWidth / window.innerHeight) * 100;

    const scrollTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: `+=${duration}%`,
      scrub: true,
      pin: true,
      animation: timeline,
      pinSpacing: "margin",
    });

    return [timeline, scrollTrigger];
  };

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[2].ref}
      className={`${isDesktop && "min-h-screen"} w-full relative select-none section-container transform-gpu`}
    >
      <div className="flex flex-col justify-center h-full">
        <div className="flex flex-col inner-container transform-gpu" ref={sectionTitleRef}>
          <h1 className="text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">Mes certifications</h1>
          <h2 className="text-[1.65rem] font-medium md:max-w-lg max-w-sm mt-2 staggered-reveal">
            Some things I&apos;ve built with love, expertise and a pinch of magical ingredients.
          </h2>
        </div>
        <div className={`${clientHeight > 650 ? "mt-12" : "mt-8"} flex project-wrapper no-scrollbar w-fit staggered-reveal`}>
          {PROJECTS.map((project, index) => (
            <ProjectTile
              classes={index === PROJECTS.length - 1 ? "" : "mr-10 xs:mr-12 sm:mr-16"}
              project={project}
              key={project.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
