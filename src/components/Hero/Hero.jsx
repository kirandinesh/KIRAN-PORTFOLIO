import hero from "/assets/hero.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
function Hero() {
  useGSAP(() => {
    gsap.to(".square1", {
      x: 100,
      y: -165,
      delay: 1,
      duration: 1,
    });
    gsap.to(".square2", {
      x: -100,
      y: 175,
      delay: 1,
      duration: 1,
    });
    gsap.to(".squareimg", {
      x: 0,
      y: -15,
      scale: 1,
      delay: 1,
      duration: 1,
    });
  });
  return (
    <div className="h-full w-full flex flex-col justify-center ">
      <div className="flex  flex-col w-full h-full items-center justify-center relative lg:hidden sm:scale-[145%] mobileL:scale-[150%]">
        <div className="squareimg scale-0 opacity-1 mt-10 overflow-hidden absolute bg-yellow-500 z-0 rounded-lg h-44 shadow-md shadow-slate-300">
          <img
            src={hero}
            alt="hero image"
            loading="lazy"
            className="w-full h-full object-contain  "
          />
        </div>
        <div className=" z-10  translate-x-[3.4rem] -translate-y-[4.5rem]">
          <div className="w-16 h-5 bg-yellow-500"></div>
          <div className="w-16 h-5 bg-yellow-500 rotate-90 translate-x-[1.35rem] translate-y-[0.9rem] "></div>
        </div>
        <div className=" rotate-180 -translate-x-[2.9rem] translate-y-[5.4rem]">
          <div className="w-16 h-5 bg-slate-500"></div>
          <div className="w-16 h-5 bg-slate-500 rotate-90 translate-x-[1.85rem] translate-y-[0.15rem] "></div>
        </div>
      </div>

      {/* //////////// */}
      <div className="hidden lg:flex  flex-col w-full h-full items-center justify-center relative">
        <div className="squareimg scale-0 opacity-1 overflow-hidden absolute bg-yellow-500 z-0 rounded-lg h-80 shadow-md shadow-slate-300">
          <img src={hero} alt="" className="w-auto h-full object-contain  " />
        </div>
        <div className="square1 z-10  translate-x-[1rem] translate-y-[2.5rem]">
          <div className="w-36 h-10 bg-yellow-500"></div>
          <div className="w-36 h-10 bg-yellow-500 rotate-90 translate-x-[3.3rem] translate-y-[0.9rem] "></div>
        </div>
        <div className="square2 rotate-180 -translate-x-[1rem] -translate-y-[2.5rem]">
          <div className="w-36 h-10 bg-slate-500"></div>
          <div className="w-36 h-10 bg-slate-500 rotate-90 translate-x-[3.3rem] translate-y-[0.9rem] "></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
