import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const PDF_FILE_URL = `${import.meta.env.VITE_URL}/Kiran_Dinesh_Resume.pdf`;

function About() {
  const words = `I'm Kiran Dinesh, a passionate Full Stack Developer from Kannur, Kerala. I specialize in creating responsive frontends and scalable backends using the MERN stack (MongoDB, Express.js, React, Node.js). I recently completed my B.Tech in Computer Science and Engineering from St. Thomas College of Engineering and Technology.
`;
  const aboutBox1ref = useRef();
  const aboutBox2ref = useRef();
  const aboutBox3ref = useRef();

  const titleRef = useRef(null);

  useGSAP(() => {
    if (titleRef.current) {
      let clutter = "";
      const h1Title = titleRef.current;
      const splitTitleText = h1Title.textContent.split("");

      splitTitleText.forEach((element) => {
        clutter += `<span class='inline-block opacity-1'>${element}</span>`;
      });

      h1Title.innerHTML = clutter;

      gsap.from("#sectionTitle span", {
        y: 40,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#about",
          start: "top bottom",
          end: "center center",
          toggleActions: "restart complete restart none",
        },
      });
    }
  }, []);
  const aboutmeData = [
    {
      title: "Frontend Development",
      content:
        "Crafting intuitive and responsive UI designs using React, HTML5, CSS3, Bootstrap, and Tailwind CSS.",
      boxname: aboutBox1ref,
    },
    {
      title: "Backend Development",
      content:
        " Developing robust and scalable backend services with Node.js and Express.js, integrated with MongoDB for database management.",
      boxname: aboutBox2ref,
    },
    {
      title: "Full Stack Projects",
      content:
        "Building end-to-end web applications with seamless functionality and user experience.",
      boxname: aboutBox3ref,
    },
  ];

  const downloadFileAtURL = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  useGSAP(() => {
    gsap.to(".textBox", {
      width: 300,
      duration: 2,
      scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        end: "center center",
        toggleActions: "restart complete restart none",
      },
    });

    gsap.to(".cardbox", {
      scale: 1,
      duration: 1,
      scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        end: "center center",
        toggleActions: "restart complete restart none",
      },
    });

    // Box name animations
    gsap.to(aboutBox1ref.current, {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#whatCard",
        start: "top center",
        end: "bottom center",
        toggleActions: "restart complete restart none",
      },
    });

    gsap.to(aboutBox2ref.current, {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#whatCard",
        start: "top center",
        end: "bottom center",
        toggleActions: "restart complete restart none",
      },
    });

    gsap.to(aboutBox3ref.current, {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#whatCard",
        start: "top center",
        end: "bottom center",
        toggleActions: "restart complete restart none",
      },
    });

    gsap.to("#resumeBox", {
      x: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: "#about",
        start: "top center",

        toggleActions: "restart complete restart none",
      },
    });

    gsap.to(".aboutcard2", {
      scale: 1,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
        toggleActions: "restart complete restart none",
      },
    });
  });

  return (
    <div id="about" className="section py-4 px-4 overflow-hidden">
      <div className="xl:hidden pb-5 lg:flex lg:justify-center ">
        <div className="textBox bg-secondary-1 w-0 bg-clip-text ">
          <div className="w-[19rem]  xs:pr-10">
            <h1
              className="text-4xl font-subhead text-center 
            font-extrabold tracking-widest text-transparent
            xl:text-6xl xs:text-4xl 
            "
            >
              ABOUT ME
            </h1>
          </div>
        </div>
      </div>
      <div className="hidden xl:flex justify-center items-center">
        <h1
          className="Maintitle text-5xl font-subhead text-center 
            font-extrabold tracking-widest 
            xl:text-6xl 
            "
          ref={titleRef}
          id="sectionTitle"
        >
          ABOUT ME
        </h1>
      </div>

      {/* main-content */}
      <div
        className=" flex w-full justify-center items-center gap-3 flex-col
      md:gap-12 lg:flex-row md:pt-10 lg:pt-10 xl:p-16 2xl:px-32 2xl:py-20
      "
      >
        <div className="w-full lg:flex lg:flex-col lg:gap-2 ">
          <Card className="cardbox w-full scale-0">
            <CardHeader
              className="text-2xl text-center font-header pt-4
            2xl:text-3xl
            "
            >
              Who am I ?
            </CardHeader>
            <CardContent className="md:px-14">
              <TextGenerateEffect words={words} />
            </CardContent>
          </Card>

          <Card
            id="resumeBox"
            className="hidden lg:block justify-center items-center opacity-0"
          >
            <CardHeader
              className="text-2xl text-center font-header pt-4
             2xl:text-3xl
            "
            >
              Want to Learn More ?
            </CardHeader>
            <CardContent className="z-50">
              <div className="w-full  text-center">
                <span className="text-base font-texts  2xl:text-lg">
                  Download my resume to get a detailed look at my skills,
                  experience, and projects.
                </span>
              </div>
              <div
                className="p-5 w-full flex justify-center items-center z-[100]
      "
              >
                <button
                  className="relative rounded-full bg-blue-500 
                px-4 py-2 font-mono font-bold text-white 
                transition-colors duration-300 ease-linear before:absolute 
                before:right-1/2 before:top-1/2 before:z-[1] before:h-3/4 
                before:w-2/3 before:origin-bottom-left before:-translate-y-1/2 
                before:translate-x-1/2 before:animate-ping before:rounded-full 
                before:bg-blue-500 hover:bg-blue-700 hover:before:bg-blue-700"
                  onClick={() => downloadFileAtURL(PDF_FILE_URL)}
                >
                  Download Resume
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
        <div id="whatCard" className="w-full">
          <Card className="aboutcard2 scale-0 opacity-0">
            <CardHeader
              className="text-2xl text-center font-header p-3
             2xl:text-3xl
            "
            >
              What I Do
            </CardHeader>
            <CardContent
              className=" gap-3 flex flex-col overflow-hidden 
            md:flex-row lg:flex-col
            "
            >
              <div
                className="w-full bg-gradient-to-br from-darkGray
                 to-gray-700 rounded-md gap-2 flex flex-col p-4 opacity-0
                  translate-x-56 "
                ref={aboutmeData[0].boxname}
              >
                <div
                  className="text-center font-subhead md:text-[1.3rem] 
                md:leading-6  2xl:text-2xl
                "
                >
                  {aboutmeData[0].title}
                </div>
                <div
                  className="text-left font-texts 
                md:text-center 2xl:text-lg
                "
                >
                  {aboutmeData[0].content}
                </div>
              </div>
              <div
                className="w-full bg-gradient-to-br from-darkGray to-gray-700 rounded-md gap-2 flex flex-col p-4 opacity-0 -translate-x-56"
                ref={aboutmeData[1].boxname}
              >
                <div
                  className="text-center font-subhead
                md:text-[1.3rem]  2xl:text-2xl
                md:leading-6 
                "
                >
                  {aboutmeData[1].title}
                </div>
                <div
                  className="text-left font-texts md:text-center 
                2xl:text-lg
                "
                >
                  {aboutmeData[1].content}
                </div>
              </div>{" "}
              <div
                className="w-full bg-gradient-to-br from-darkGray to-gray-700 rounded-md gap-2 flex flex-col p-4 opacity-0 translate-x-56"
                ref={aboutmeData[2].boxname}
              >
                <div
                  className="text-center font-subhead
                md:text-[1.3rem] 
                md:leading-6 2xl:text-2xl
                "
                >
                  {aboutmeData[2].title}
                </div>
                <div
                  className="text-left font-texts md:text-center
                2xl:text-lg
                "
                >
                  {aboutmeData[2].content}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div
          className="p-5 w-full flex justify-center items-center
      lg:hidden
      "
        >
          <button
            className="relative rounded-full bg-blue-500 px-4 py-2 font-mono font-bold text-white transition-colors duration-300 ease-linear before:absolute before:right-1/2 before:top-1/2 before:-z-[1] before:h-3/4 before:w-2/3 before:origin-bottom-left before:-translate-y-1/2 before:translate-x-1/2 before:animate-ping before:rounded-full before:bg-blue-500 hover:bg-blue-700 hover:before:bg-blue-700"
            onClick={() => downloadFileAtURL(PDF_FILE_URL ? PDF_FILE_URL : "")}
          >
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
