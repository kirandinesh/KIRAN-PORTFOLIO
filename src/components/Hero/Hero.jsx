import hero from "/assets/hero.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
function Hero() {
  useGSAP(() => {
    gsap.to(".box1", {
      x: 65,
      delay: 1,
      opacity: 1,
      duration: 1,
    });
    gsap.to(".box2", {
      x: 84,
      delay: 1,
      opacity: 1,
      duration: 1,
    });
    gsap.to(".box3", {
      x: 31,
      delay: 1,
      opacity: 1,
      duration: 1,
    });
    gsap.to(".box4", {
      x: 110,
      delay: 1,
      opacity: 1,
      duration: 1,
    });
    gsap.to(".box5", {
      x: 61,
      delay: 1,
      duration: 1,
      opacity: 1,
    });
    gsap.to(".box6", {
      x: 20,
      delay: 1,
      duration: 1,
      opacity: 1,
    });
    gsap.to(".box7", {
      x: 20,
      delay: 1,
      duration: 1,
      opacity: 1,
    });
    gsap.to(".box8", {
      x: 60,
      delay: 1,
      duration: 1,
      opacity: 1,
    });
    gsap.to(".boxred", {
      x: -100,
      y: 100,
      delay: 1,
      duration: 1,
      opacity: 1,
    });
    gsap.to(".boxblue", {
      x: 120,
      y: -20,
      delay: 1,
      duration: 1,
      opacity: 1,
    });
    gsap.to(".boxgreen", {
      x: -120,
      y: -70,
      delay: 1,
      duration: 1,
      opacity: 1,
    });
    gsap.to(".boxyellow", {
      x: 141,
      y: -37,
      delay: 1,
      duration: 1,
      opacity: 1,
    });
    gsap.to(".homeimg", {
      opacity: 1,
      delay: 2,
      duration: 1,
    });
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
      <div className="flex flex-col justify-center overflow-hidden gap-0 sm:items-center lg:hidden">
        <div
          className="box1 w-2/4 h-10 bg-yellow-500  overflow-hidden relative opacity-100  
        sm:translate-x-28 
    "
        >
          <img
            className="w-full absolute -top-2 sm:w-full
          
      "
            src={hero}
            alt=""
          />
        </div>
        <div
          className="box2 w-2/4 h-10 overflow-hidden opacity-100 bg-yellow-500 translate-x-48 relative 
   sm:-translate-x-28
    "
        >
          <img
            className="w-full absolute -top-12 -left-5
        
      "
            src={hero}
            alt=""
          />
        </div>
        <div
          className="box3 w-2/4 h-10 bg-yellow-500 translate-x-2 relative overflow-hidden opacity-100
   sm:translate-x-24
    "
        >
          <img
            className="w-full absolute -top-[5.5rem] left-8 lg:w-full 
        
        "
            src={hero}
            alt=""
          />
        </div>
        <div
          className="box4 w-2/4 h-10 bg-yellow-500 translate-x-40 overflow-hidden opacity-100
     sm:-translate-x-24
    "
        >
          <img
            className="w-full absolute -top-[8.5rem] -left-12   mobileL:-top-[8rem] "
            src={hero}
            alt=""
          />
        </div>
        <div
          className="box5 w-2/4 h-10 bg-yellow-500 translate-x-6 overflow-hidden opacity-100 
    sm:translate-x-20
    "
        >
          <img
            className="w-full absolute -top-[11rem] left-0 mobileL:-top-[10.5rem] 
        "
            src={hero}
            alt=""
          />
        </div>
        <div
          className="box6 hidden sm:block w-2/4 h-10 bg-yellow-500 translate-x-6 overflow-hidden opacity-100 
    sm:-translate-x-20
    
    "
        >
          <img
            className="w-full absolute -top-[13rem] left-10"
            src={hero}
            alt="Hero Image"
          />
        </div>
        <div
          className="box7 hidden  sm:block w-2/4 h-10 bg-yellow-500 overflow-hidden opacity-100
        sm:translate-x-16 lg:translate-x-32 
    
    "
        >
          <img
            className="w-full absolute -top-[15.5rem] left-10 "
            src={hero}
            alt="Hero Image"
          />
        </div>
        <div className="box8 hidden md:block w-2/4 h-10 bg-yellow-500 -translate-x-32 overflow-hidden opacity-100 ">
          <img
            className="w-full absolute -top-[18rem] left-0"
            src={hero}
            alt="Hero Image"
          />
        </div>
      </div>
      <div className="hidden lg:flex flex-col w-full h-full items-center justify-center relative xl:hidden">
        <div className="homeimg opacity-0 absolute w-60 h-3/6  rotate-45 top-15 right-75 overflow-hidden">
          <img
            src={hero}
            alt=""
            className="w-full h-full object-contain scale-150 translate-x-8 translate-y-8 -rotate-45 "
          />
        </div>
        <div className="boxred  w-2/5 h-10 bg-[#CCCCCC] shadow-lg shadow-yellow-500 rotate-45 translate-y-0 -translate-x-0"></div>
        <div className="boxblue  w-2/5 h-12 bg-[#CCCCCC] shadow-lg shadow-yellow-500  rotate-45 -translate-y-0 translate-x-28"></div>
        <div className="boxgreen  w-2/5 h-12 bg-[#CCCCCC] shadow-md  -rotate-45 -translate-y-5 translate-x-8"></div>
        <div className="boxyellow  w-2/5 h-10 bg-[#CCCCCC] shadow-md  -rotate-45 translate-x-40  -translate-y-32"></div>
      </div>

      <div className="hidden xl:flex   flex-col w-full h-full items-center justify-center relative">
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

      {/* 2xl */}
      {/* <div className="hidden 2xl:flex justify-between">
        <div>
          <h1 className="text-9xl font-header ">Kiran</h1>
        </div>
        <div className="hidden xl:flex  flex-col w-full h-full items-center justify-center relative">
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
        <div>
          <h1 className="text-9xl font-header text-slate-600">Dinesh</h1>
        </div>
      </div> */}
    </div>
  );
}

export default Hero;
