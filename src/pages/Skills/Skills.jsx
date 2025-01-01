import { Card, CardContent } from "@/components/ui/card";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, useGSAP);

function Skills() {
  const titleRef = useRef(null);
  const skillRefs = useRef([]);
  const textRefs = useRef([]);
  const skillBox = useRef(null);

  const skillsData = [
    { skillName: "HTML", degree: 90, skillColor: "#E44D26" },
    { skillName: "JS", degree: 70, skillColor: "#F7DF1E" },
    { skillName: "React", degree: 65, skillColor: "#61DAFB" },
    { skillName: "CSS3", degree: 50, skillColor: "#1572B6" },
    { skillName: "Bootstrap", degree: 50, skillColor: "#563D7C" },
    {
      skillName: (
        <>
          Tailwind
          <br />
          CSS
        </>
      ),
      degree: 40,
      skillColor: "#06B6D4",
    },
    {
      skillName: (
        <>
          Redux <br /> Toolkit
        </>
      ),
      degree: 45,
      skillColor: "#764ABC",
    },
    { skillName: "Node.js", degree: 60, skillColor: "#8CC84B" },
    { skillName: "Express.js", degree: 50, skillColor: "#4D4D4D" },
    { skillName: "MongoDB", degree: 55, skillColor: "#47A248" },
    { skillName: "Git", degree: 70, skillColor: "#F1502F" },
    {
      skillName: (
        <>
          RESTFULL <br /> APIs
        </>
      ),
      degree: 50,
      skillColor: "#659B41",
    },
    { skillName: "Photoshop", degree: 60, skillColor: "#31A8FF" },
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

      gsap.from("#SkillsectionTitle span", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#skills",
          start: "top bottom",
          end: "center center",

          toggleActions: "restart complete restart none",
        },
      });
    }
    // skills animatation

    skillRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.fromTo(
          ref,
          {
            background: `conic-gradient(${skillsData[index].skillColor} 0%, #161616 0)`,
          },
          {
            background: `conic-gradient(${skillsData[index].skillColor} ${skillsData[index].degree}%, #161616 0)`,
            duration: 3,

            ease: "power3.out",
            scrollTrigger: {
              trigger: "#skills",
              start: "top bottom",
              end: "bottom center",
              scrub: true,
              toggleActions: "restart complete restart none",
            },
          }
        );
        gsap.to(textRefs.current, {
          opacity: 1,
          duration: 2,
          scrollTrigger: {
            trigger: ref,
            start: "top bottom",
            end: "center center",
            toggleActions: "restart complete restart none",
          },
        });
      }
    });

    //text animation

    ////////-----------////////
    gsap.to(".textBox", {
      width: 300,
      duration: 2,
      scrollTrigger: {
        trigger: "#skills",
        start: "top bottom",
        end: "center center",
        toggleActions: "restart complete restart none",
      },
    });
    ////----------/////
    gsap.from(skillBox.current, {
      y: 300,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#skills",
        start: "top 80%",
        toggleActions: "restart complete restart none",
      },
    });
  });

  return (
    <div id="skills" className="section flex-grow py-4 px-4 overflow-hidden">
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
              SKILLS
            </h1>
          </div>
        </div>
      </div>

      <div className="hidden xl:flex justify-center items-center">
        <h1
          className="Maintitle text-5xl font-subhead text-center 
                font-extrabold tracking-widest 
                xl:text-6xl"
          id="SkillsectionTitle"
          ref={titleRef}
        >
          SKILLS
        </h1>
      </div>
      {/* /// */}

      {/* Skill Main Section */}
      <div className="w-full xl:p-16 2xl:px-32 ">
        <Card
          className="overflow-hidden w-full flex justify-center items-center
        py-4 
        "
        >
          <CardContent className="overflow-hidden" ref={skillBox}>
            {/* SKILLS */}
            <div
              className="grid grid-cols-2 gap-4 
          sm:grid-cols-3
          md:gap-10
          2xl:gap-10
          lg:grid-cols-4
          xl:grid-cols-5
          mobilexL:grid-cols-3
          mobile472:gap-5
          xs:gap-3
          xs:grid-cols-2
          "
            >
              {skillsData.map((skill, index) => (
                <div
                  className="w-[120px] h-[120px] bg-slate-800 rounded-full 
              flex justify-center items-center 
              sm:w-[150px] sm:h-[150px]
              md:w-[180px] md:h-[180px]
              lg:w-[190px] lg:h-[190px]
              xl:w-[170px] xl:h-[170px]
              2xl:w-[200px] 2xl:h-[200px]
              mobile472:w-[150px] mobile472:h-[150px]
              xs:w-[105px] xs:h-[105px]
              "
                  ref={(el) => (skillRefs.current[index] = el)}
                  key={index}
                >
                  <div
                    className="w-[110px] h-[110px] bg-black 
                rounded-full relative opacity-70
                sm:w-[140px] sm:h-[140px]
                md:w-[170px] md:h-[170px]
                lg:w-[180px] lg:h-[180px]
                xl:w-[160px] xl:h-[160px]
                2xl:w-[190px] 2xl:h-[190px]
              mobile472:w-[140px] mobile472:h-[140px]
              xs:w-[95px] xs:h-[95px]"
                  ></div>
                  <div
                    className="w-[90px] h-[90px] bg-[#131313] 
                rounded-full absolute border-[5px] border-slate-700
                 shadow-[0px_5px_5px_0px_black,inset_0px_2px_0px_6px_black] 
                 xs:shadow-[0px_2px_2px_0px_black,inset_0px_2px_0px_6px_black] 
                 flex justify-center items-center
                 sm:w-[110px] sm:h-[110px]
                 md:w-[140px] md:h-[140px]
                 md:border-[10px]
                 lg:w-[150px] lg:h-[150px]
                 lg:border-[12px]
                 xl:w-[135px] xl:h-[135px]
                 xl:border-[8px]
                 2xl:w-[150px] 2xl:h-[150px]
                 2xl:border-[14px]
                 xs:w-[90px] xs:h-[90px]
                 xs:border-[5px]
                 "
                  >
                    <div
                      className="flex flex-col justify-center items-center opacity-0"
                      ref={(el) => (textRefs.current[index] = el)}
                    >
                      <h1
                        className="font-subhead
                        xs:text-sm 
                      sm:text-xl
                      md:text-2xl
                      lg:text-2xl
                      xl:text-2xl
                      2xl:text-3xl
                      "
                        style={{ color: skill.skillColor }}
                      >
                        {skill.degree}%
                      </h1>
                      <h1
                        className="font-subhead text-[12.5px] text-center
                    xs:text-[13px]
                    sm:text-[16px] 
                    md:text-[20px] 
                    lg:text-[22px] 
                    xl:text-[20px] 
                    2xl:text-[21px] 
                    "
                      >
                        {skill.skillName}
                      </h1>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Skills;
