import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef, lazy, Suspense } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "@/components/ui/card";
import projectManagementImg from "/assets/projectImg/backendApiCover.avif";

import ecommerceImg from "/assets/projectImg/EcommercePage.avif";

import portfolioImg from "/assets/projectImg/portFolioThumbline.avif";
import kalolsavamImg from "/assets/projectImg/kalolsavamImg.avif";
const ProjectCardTile = lazy(() => import("./ProjectCardTile"));

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Projects() {
  const titleRef = useRef(null);
  const projectCardRef = useRef(null);
  const projectData = [
    {
      id: 1,
      src: ecommerceImg,
      title: "E-Commerce Website",
      description: "A full-stack e-commerce platform with responsive design.",
      technologies: [
        "MERN Stack",
        "Redux Toolkit",
        "HTML5",
        "CSS3",
        "JavaScript",
      ],
      features: [
        "User authentication and secure login.",
        "Product management and add-to-cart functionality.",
        "RESTful APIs for efficient backend operations.",
      ],
      link: "https://mern-e-commerce-website-1-v5bp.onrender.com",
    },
    {
      id: 2,
      src: kalolsavamImg,
      title: "Kannur University Kalolsavam Website",
      description:
        "A dynamic website for Kannur University's Kalolsavam, displaying real-time event results and schedules.",
      technologies: [
        "React.js",
        "Context API",
        "Node.js",
        "MongoDB",
        "Express.js",
      ],
      features: [
        "Updates of college base points.",
        "Points tracking for each event.",
        "Event schedule and result publishing.",
        "Admin panel for event and point management.",
      ],
      link: "https://kannur-university-kalolsavam-2wto.onrender.com",
    },
    {
      id: 3,
      src: projectManagementImg,
      title: "E-Commerce Backend API",
      description:
        "Comprehensive backend solutions for product and user management.",
      technologies: ["Node.js", "Express.js", "MongoDB"],
      features: ["Add-to-cart functionality.", "Efficient database handling."],
    },
    {
      id: 4,
      src: portfolioImg,
      title: "Personal Portfolio Website",
      description:
        "A responsive and visually appealing website showcasing my projects, skills, and experience.",
      technologies: ["React", "Tailwind CSS", "HTML5", "JavaScript"],
      link: "https://kirandineshportfolio.netlify.app",
    },
  ];

  useGSAP(() => {
    if (titleRef.current) {
      let clutter = "";
      const h1Title = titleRef.current;
      const splitTitleText = h1Title.textContent.split("");

      splitTitleText.forEach((element) => {
        clutter += `<span class='inline-block opacity-1'>${element}</span>`;
      });

      h1Title.innerHTML = clutter;

      gsap.from("#ProjectSectionTitle span", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#project",
          start: "top bottom",
          end: "center center",
          toggleActions: "restart complete restart none",
        },
      });
    }

    ////////-----------////////
    gsap.from(projectCardRef.current, {
      scale: 0,
      opacity: 0,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: `#project`,
        start: "top 60%",
        toggleActions: "play none restart reverse",
      },
    });
    gsap.to(".textBox", {
      width: 300,
      duration: 2,
      scrollTrigger: {
        trigger: "#project",
        start: "top bottom",
        end: "center center",
        toggleActions: "restart complete restart none",
      },
    });
  });

  return (
    <div id="project" className="section flex-grow py-4 px-4 overflow-hidden">
      {/* Title Section */}
      <div className="xl:hidden pb-5 lg:flex lg:justify-center">
        <div className="textBox bg-secondary-1 w-0 bg-clip-text">
          <div className="w-[19rem]  xs:pr-10">
            <h1
              className="text-4xl font-subhead text-center 
            font-extrabold tracking-widest text-transparent
            xl:text-6xl xs:text-4xl 
            "
            >
              PROJECTS
            </h1>
          </div>
        </div>
      </div>

      <div className="hidden xl:flex justify-center items-center">
        <h1
          className="Maintitle text-5xl font-subhead text-center 
                font-extrabold tracking-widest 
                xl:text-6xl"
          id="ProjectSectionTitle"
          ref={titleRef}
        >
          PROJECTS
        </h1>
      </div>

      {/* /// */}

      {/*  Main Section */}
      <div className="w-full  xl:p-16 2xl:px-32 ">
        <Card
          ref={projectCardRef}
          className="w-full overflow-hidden 
        "
        >
          <div
            className="w-full overflow-hidden flex flex-col
           justify-center items-center  gap-5 py-6
           z-[-2] lg:grid lg:grid-cols-3 lg:px-11 
           xl:grid-cols-4 2xl:px-12 2xl:grid-cols-4"
          >
            {projectData.map((proData, index) => (
              <Suspense
                key={index}
                fallback={
                  <div className="h-64 bg-gray-300 animate-pulse rounded-lg"></div>
                }
              >
                <ProjectCardTile proData={proData} />
              </Suspense>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Projects;
