import { useEffect, useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, useGSAP);

function Career() {
  const titleRef = useRef(null);
  const tabRef = useRef(null);

  const [activeTab, setActiveTab] = useState("education");
  //EDUCATION
  const educationList = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution:
        "St. Thomas College of Engineering and Technology, Kannur, Kerala",
      duration: "08/2020 - 05/2024",
    },
    {
      degree: "Plus Two",
      institution: "St. Joseph’s Higher Secondary School, Thalassery, Kerala",
      duration: "06/2018 - 05/2020",
    },
  ];

  //EXPERIENCE

  const experiences = [
    {
      title: "MERN Stack Intern",
      company: "Zoople Technologies",
      location: "Kochi",
      duration: "07/2024 - 10/2024",
      responsibilities: [
        "Developed dynamic and responsive websites.",
        "Built and maintained backend modules using Node.js and MongoDB.",
      ],
    },
  ];
  const handleActiveTab = (value) => {
    setActiveTab(value);
  };
  useGSAP(() => {
    if (titleRef.current) {
      let clutter = "";
      const h1Title = titleRef.current;
      const splitTitleText = h1Title.textContent.split("");

      splitTitleText.forEach((element) => {
        clutter += `<span class='inline-block opacity-1'>${element}</span>`;
      });

      h1Title.innerHTML = clutter;

      gsap.from("#CareersectionTitle span", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#education",
          start: "top bottom",
          end: "center center",
          toggleActions: "restart complete restart none",
        },
      });
    }

    //text animation

    ////////-----------////////
    gsap.to(".textBox", {
      width: 300,
      duration: 2,
      scrollTrigger: {
        trigger: "#education",
        start: "top bottom",
        end: "center center",
        toggleActions: "restart complete restart none",
      },
    });

    gsap.to(tabRef.current, {
      scale: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#education",
        start: "top bottom",
        end: "center center",
        toggleActions: "restart complete restart none",
      },
    });
  });
  useEffect(() => {
    gsap.to(".tab-content", {
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: "#education",
        start: "top 70%",
        toggleActions: "restart complete restart none",
      },
      onComplete: () => {
        gsap.to(".tab-content", { opacity: 1, duration: 0.5 });
      },
    });
  }, [activeTab]);
  return (
    <div id="education" className="section flex-grow py-4 px-4 overflow-hidden">
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
              CAREER
            </h1>
          </div>
        </div>
      </div>

      <div className="hidden xl:flex justify-center items-center">
        <h1
          className="Maintitle text-5xl font-subhead text-center 
                font-extrabold tracking-widest 
                xl:text-6xl"
          id="CareersectionTitle"
          ref={titleRef}
        >
          CAREER
        </h1>
      </div>

      {/* /// */}

      {/* CAREER OVERVIEW */}

      <div className="w-full">
        <Tabs defaultValue="education">
          {/* Tabs List */}
          <div className="flex justify-center">
            <TabsList
              ref={tabRef}
              className="flex space-x-4 bg-gray-800 p-2 rounded-lg scale-0
              lg:mt-5 xl:mt-10
              "
            >
              <TabsTrigger
                value="education"
                onClick={() => handleActiveTab("education")}
                className={`px-3 py-1 rounded-lg transition-all 
                  flex gap-2
                  duration-300                   
                  ${activeTab === "education" ? "bg-gray-700 " : ""} `}
              >
                {activeTab === "education" ? (
                  <div className="w-6 aspect-square rounded-full relative flex justify-center items-center animate-[spin_3s_linear_infinite] z-40 bg-[conic-gradient(white_0deg,white_300deg,transparent_270deg,transparent_360deg)] before:animate-[spin_2s_linear_infinite] before:absolute before:w-[60%] before:aspect-square before:rounded-full before:z-[80] before:bg-[conic-gradient(white_0deg,white_270deg,transparent_180deg,transparent_360deg)] after:absolute after:w-3/4 after:aspect-square after:rounded-full after:z-[60] after:animate-[spin_3s_linear_infinite] after:bg-[conic-gradient(#065f46_0deg,#065f46_180deg,transparent_180deg,transparent_360deg)]">
                    <span className="absolute w-[85%] aspect-square rounded-full z-[60] animate-[spin_5s_linear_infinite] bg-[conic-gradient(#34d399_0deg,#34d399_180deg,transparent_180deg,transparent_360deg)]"></span>
                  </div>
                ) : (
                  ""
                )}
                <span className="font-lato font-semibold tracking-wider">
                  EDUCATION
                </span>
              </TabsTrigger>
              <TabsTrigger
                value="experience"
                onClick={() => handleActiveTab("experience")}
                className={`px-2 py-1 rounded-lg transition-all 
                  flex gap-2
                  duration-300 ${
                    activeTab === "experience"
                      ? "bg-gray-700  focus:bg-gray-700"
                      : " "
                  } `}
              >
                {activeTab === "experience" ? (
                  <div className="w-6 aspect-square rounded-full relative flex justify-center items-center animate-[spin_3s_linear_infinite] z-40 bg-[conic-gradient(white_0deg,white_300deg,transparent_270deg,transparent_360deg)] before:animate-[spin_2s_linear_infinite] before:absolute before:w-[60%] before:aspect-square before:rounded-full before:z-[80] before:bg-[conic-gradient(white_0deg,white_270deg,transparent_180deg,transparent_360deg)] after:absolute after:w-3/4 after:aspect-square after:rounded-full after:z-[60] after:animate-[spin_3s_linear_infinite] after:bg-[conic-gradient(#065f46_0deg,#065f46_180deg,transparent_180deg,transparent_360deg)]">
                    <span className="absolute w-[85%] aspect-square rounded-full z-[60] animate-[spin_5s_linear_infinite] bg-[conic-gradient(#34d399_0deg,#34d399_180deg,transparent_180deg,transparent_360deg)]"></span>
                  </div>
                ) : (
                  ""
                )}
                <span
                  className="font-lato font-semibold tracking-wider
                
                "
                >
                  EXPERIENCE
                </span>
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Tabs Content */}
          <TabsContent value="education" className="tab-content">
            <Education educationList={educationList} />
          </TabsContent>
          <TabsContent value="experience" className="tab-content">
            <Experience experiences={experiences} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Career;
