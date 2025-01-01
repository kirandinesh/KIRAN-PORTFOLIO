import { ArrowRight } from "lucide-react";
import { lazy, Suspense } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { TypeAnimation } from "react-type-animation";
import { useScramble } from "use-scramble";
import Homepagesvg from "./Homepagesvg";
const Hero = lazy(() => import("@/components/Hero/Hero"));
function Home() {
  const { ref, replay } = useScramble({
    text: " Let's Connect",
  });

  return (
    <div
      id="home"
      className="section flex flex-col py-4 px-4 justify-between h-full 
      2xl:px-4   2xl:relative
      relative  backdrop-blur-lg overflow-hidden
      "
    >
      <div
        className="absolute w-[300px] top-[150px] left-[200px] h-[300px] z-[-1]
      sm:w-[400px] sm:h-[400px] sm:top-[180px] sm:left-[290px]
      bg-gradient-to-br blur-sm    opacity-30  transform -translate-x-1/2 -translate-y-1/2"
      >
        <Homepagesvg />
      </div>

      <div className="flex flex-col ">
        <h1
          className="font-header text-4xl leading-snug
        sm:text-5xl mobileL:text-4xl lg:text-6xl xl:text-6xl 2xl:text-6xl  
        "
        >
          Hello! I&apos;m <br />
          Kiran Dinesh
        </h1>
        <h2>
          <TypeAnimation
            sequence={[
              "I am a Web developer",
              1000,
              "I am a Full Stack developer",
              1000,
              "I am a MERN Stack developer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-xl font-subhead
            sm:text-2xl  xl:text-3xl 2xl:text-4xl
            "
          />
        </h2>
      </div>

      {/* hero */}
      <div className="flex-grow w-full h-full ">
        <Suspense fallback={<div>Loading...</div>}>
          <Hero />
        </Suspense>
      </div>
      {/* hero */}

      <div className="flex flex-col items-end gap-3 text-start py-14">
        <div className="flex flex-col">
          <p
            className="font-subhead font-semibold text-[1.2rem] text-right pb-2 sm:text-4xl lg:text-[2.5rem]
             xl:text-[2.5rem]  2xl:text-[2.5rem]
        "
          >
            Welcome to my personal portfolio,
          </p>
          <p
            className="text-right text-md 
          sm:text-3xl font-200  2xl:text-3xl font-subhead 
          "
          >
            where I showcase my work, skills and
            <br /> journey in the world of technology.
          </p>
        </div>

        <div
          className="gap-1 justify-center items-center cursor-pointer
         mt-4 text-yellow-500"
        >
          <AnchorLink
            href="#contact"
            aria-label="Navigate to contact section"
            className="flex justify-center items-center gap-1 p-1"
          >
            <span
              className="font-header text-lg
            tracking-wider sm:text-xl  xl:text-2xl 2xl:text-3xl"
              ref={ref}
              onMouseOver={replay}
              onFocus={replay}
            ></span>
            <span>
              <ArrowRight className="animate-rightBounce 2xl:w-8 2xl:h-8" />
            </span>
          </AnchorLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
