/* eslint-disable react/prop-types */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger, useGSAP);

const Experience = ({ experiences }) => {
  const educationRef = useRef([]);

  return (
    <div className="max-w-4xl mx-auto p-2 w-full flex justify-center">
      <div className="sm:w-full">
        <h2
          className="text-4xl font-bold text-center text-gray-100 
       font-subhead tracking-wider 
      mb-5"
        >
          Experience
        </h2>

        <div className="relative space-y-8 w-full">
          <div className="absolute top-10 left-0 w-24 h-24 z-[1] bg-gradient-to-br from-blue-400 to-yellow-500 rounded-full animate-pulse opacity-20 blur-lg transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-5 right-0 w-24 h-24 z-[1] bg-gradient-to-br from-red-500 to-grey-500 rounded-full animate-pulse opacity-30 blur-lg transform translate-x-1/2 translate-y-1/2"></div>
          {experiences.map((experience, index) => (
            <div
              key={index}
              ref={(el) => (educationRef.current[index] = el)}
              className="relative bg-gray-800/80 backdrop-blur-lg border border-gray-700
              p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"
            >
              <h3
                className="text-xl tracking-wider font-subhead text-blue-400
              sm:text-center sm:text-[1.9rem] sm:mb-3
              md:text-center md:text-[2.1rem] md:mb-3 xs:text-lg
              "
              >
                {experience.title.toUpperCase()}
              </h3>
              <p
                className="text-gray-300 text-[1.05rem] mt-1 font-lato
              sm:text-center sm:text-[1.2rem] 
              md:text-center md:text-[1.4rem] xs:text-[0.93rem]  
              "
              >
                {experience.company} | {experience.location}
              </p>
              <p
                className="text-gray-400 text-sm font-texts
              sm:text-center sm:text-[1.15rem]
              md:text-center md:text-[1.2rem]
              "
              >
                {experience.duration}
              </p>

              <ul
                className="list-disc pl-5 mt-4  text-gray-200
              font-texts text-[0.9rem] text-left 
              sm:text-left sm:text-[1.05rem]
              md:text-left md:text-[1.2rem] xs:text-[0.9rem] 
            "
              >
                {experience.responsibilities.map((task, taskIndex) => (
                  <li key={taskIndex}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
