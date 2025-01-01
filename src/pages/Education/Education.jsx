/* eslint-disable react/prop-types */
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Education = ({ educationList }) => {
  const educationRef = useRef([]);

  return (
    <div
      className="max-w-4xl mx-auto p-4 w-full flex justify-center"
      id="educationTab"
    >
      <div className="sm:w-full">
        <h2
          className="text-4xl font-bold text-center text-gray-100
          font-subhead tracking-wider mb-8"
        >
          Education
        </h2>

        <div className="grid gap-6 w-full relative">
          <div className="absolute top-10 left-0 w-24 h-24 z-[1] bg-gradient-to-br from-blue-400 to-yellow-500 rounded-full animate-pulse opacity-20 blur-lg transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-5 right-0 w-24 h-24 z-[1] bg-gradient-to-br from-red-500 to-grey-500 rounded-full animate-pulse opacity-30 blur-lg transform translate-x-1/2 translate-y-1/2"></div>

          {educationList.map((education, index) => (
            <div
              ref={(el) => (educationRef.current[index] = el)}
              key={index}
              className=" bg-gray-800/80 backdrop-blur-lg border border-gray-700
              p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"
            >
              <h3
                className="text-xl font-semibold text-blue-400
                sm:text-2xl text-center mb-3 tracking-wide"
              >
                {education.degree.toUpperCase()}
              </h3>
              <p className="text-gray-300 text-base sm:text-lg text-center mb-2">
                {education.institution}
              </p>
              <p className="text-gray-400 text-sm sm:text-base text-center">
                {education.duration}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
