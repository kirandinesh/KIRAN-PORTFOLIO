/* eslint-disable react/prop-types */
import BouncingArrow from "@/components/ui/bounceArrow";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CircleArrowRight } from "lucide-react";

function ProjectCardTile({ proData }) {
  return (
    <div
      className="w-full h-full rounded-lg  flex justify-center 
    items-center relative overflow-hidden flex-shrink-0 flex-grow-0
    "
    >
      <div
        className="w-full h-[90px] lg:hidden 
        
     flex items-center 
      justify-center rounded-lg "
      >
        <Dialog>
          <DialogTrigger
            className="z-10  w-full  h-full
          flex items-center justify-center overflow-hidden
          "
          >
            <div
              className="relative flex w-full flex-col justify-center 
            px-2 overflow-hidden  py-6 font-sans sm:py-12 lg:hidden"
            >
              <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

              <div className="mx-auto flex w-full max-w-lg items-center justify-center">
                <div className="relative z-10 flex w-full cursor-pointer items-center overflow-hidden rounded-xl border border-slate-800 p-[1.5px]">
                  <div className="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#0ea5e9_20deg,transparent_120deg)]"></div>
                  <div className="relative z-20 flex w-full rounded-[0.60rem] bg-slate-900 p-2">
                    <div
                      className="flex w-full h-full items-center gap-2
                    sm:py-2
                    "
                    >
                      <div
                        className="w-[70px] h-[55px]
                      sm:w-[90px]
                      flex flex-shrink-0 rounded-lg overflow-hidden"
                      >
                        <img
                          className="w-full h-full object-center object-cover"
                          src={proData?.src}
                          alt="project image"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-grow">
                        <h3
                          className="font-subhead text-center
                         text-[0.8rem]  sm:text-[1.2rem]"
                        >
                          {proData?.title}
                        </h3>
                      </div>
                      <div className="animate-pulse p-1 rounded-full">
                        <CircleArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent
            className="w-[300px] h-[500px] bg-[#131313] rounded-lg
          text-secondary-2 overflow-hidden px-0 sm:w-[350px]
          "
          >
            <div className="w-full h-full flex mt-4 overflow-hidden">
              <div className=" flex  items-center rotate-90 ">
                <span
                  className={`w-2 h-2 bg-no-repeat bg-center bg-contain transform animate-bounceAlpha `}
                  style={{
                    backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHN0eWxlPi5zdDB7ZmlsbDojZmZmfTwvc3R5bGU+PHBhdGggY2xhc3M9InN0MCIgZD0iTTMxOS4xIDIxN2MyMC4yIDIwLjIgMTkuOSA1My4yLS42IDczLjdzLTUzLjUgMjAuOC03My43LjZsLTE5MC0xOTBjLTIwLjEtMjAuMi0xOS44LTUzLjIuNy03My43UzEwOSA2LjggMTI5LjEgMjdsMTkwIDE5MHoiLz48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzE5LjEgMjkwLjVjMjAuMi0yMC4yIDE5LjktNTMuMi0uNi03My43cy01My41LTIwLjgtNzMuNy0uNmwtMTkwIDE5MGMtMjAuMiAyMC4yLTE5LjkgNTMuMi42IDczLjdzNTMuNSAyMC44IDczLjcuNmwxOTAtMTkweiIvPjwvc3ZnPg==')`,
                  }}
                />
                <span
                  className={`w-3 h-3 bg-no-repeat bg-center bg-contain transform animate-bounceAlpha`}
                  style={{
                    backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHN0eWxlPi5zdDB7ZmlsbDojZmZmfTwvc3R5bGU+PHBhdGggY2xhc3M9InN0MCIgZD0iTTMxOS4xIDIxN2MyMC4yIDIwLjIgMTkuOSA1My4yLS42IDczLjdzLTUzLjUgMjAuOC03My43LjZsLTE5MC0xOTBjLTIwLjEtMjAuMi0xOS44LTUzLjIuNy03My43UzEwOSA2LjggMTI5LjEgMjdsMTkwIDE5MHoiLz48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzE5LjEgMjkwLjVjMjAuMi0yMC4yIDE5LjktNTMuMi0uNi03My43cy01My41LTIwLjgtNzMuNy0uNmwtMTkwIDE5MGMtMjAuMiAyMC4yLTE5LjkgNTMuMi42IDczLjdzNTMuNSAyMC44IDczLjcuNmwxOTAtMTkweiIvPjwvc3ZnPg==')`,
                  }}
                />
              </div>
              <div className=" w-full  overflow-y-auto rounded-lg">
                <div className="w-full  p-4 bg-gray-800 rounded-lg shadow-lg">
                  <div className="flex flex-col gap-4">
                    {/* Image */}
                    <div
                      className="relative w-full 
                    h-[150px] rounded-lg overflow-hidden bg-gray-200"
                    >
                      <img
                        loading="lazy"
                        src={proData?.src || "fallback-image-url.jpg"}
                        alt={proData?.title || "Fallback Title"}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    {/* Title */}
                    <div className="text-center">
                      <h1
                        className="text-lg font-bold text-white font-lato
                      "
                      >
                        {proData?.title || "Title"}
                      </h1>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-col items-center">
                      <h2
                        className="text-lg font-semibold
                      font-subhead
                      text-white"
                      >
                        Technologies
                      </h2>
                      <ul className="flex flex-wrap justify-center gap-2 mt-2">
                        {proData?.technologies?.map((item, index) => (
                          <li
                            key={index}
                            className="px-3 py-1 text-sm  text-white bg-blue-500 rounded-full font-texts font-semibold tracking-wider"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Description */}
                    <div className="text-center">
                      <h2 className="text-lg font-semibold text-white ">
                        Description
                      </h2>
                      <p className="mt-2 text-gray-400">
                        {proData?.description || "No description available."}
                      </p>
                    </div>

                    {/* Features */}
                    <div>
                      {proData?.features ? (
                        <h2 className="text-lg font-semibold text-white text-center">
                          Features
                        </h2>
                      ) : (
                        ""
                      )}
                      <ul className="mt-3 space-y-2">
                        {proData?.features?.map((item, index) => (
                          <li
                            key={index}
                            className="flex items-center  gap-2 text-gray-400 leading-5"
                          >
                            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full "></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <a
                      href={proData?.link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View project: ${
                        proData?.link || "No link available"
                      }`}
                      className="flex items-center justify-center gap-2"
                    >
                      <span className="font-header">View Project</span>
                      <BouncingArrow />
                    </a>
                  </div>
                </div>
              </div>
              <div className=" flex  items-center rotate-90">
                <span
                  className={`w-2 h-2 bg-no-repeat bg-center bg-contain transform animate-bounceAlpha `}
                  style={{
                    backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHN0eWxlPi5zdDB7ZmlsbDojZmZmfTwvc3R5bGU+PHBhdGggY2xhc3M9InN0MCIgZD0iTTMxOS4xIDIxN2MyMC4yIDIwLjIgMTkuOSA1My4yLS42IDczLjdzLTUzLjUgMjAuOC03My43LjZsLTE5MC0xOTBjLTIwLjEtMjAuMi0xOS44LTUzLjIuNy03My43UzEwOSA2LjggMTI5LjEgMjdsMTkwIDE5MHoiLz48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzE5LjEgMjkwLjVjMjAuMi0yMC4yIDE5LjktNTMuMi0uNi03My43cy01My41LTIwLjgtNzMuNy0uNmwtMTkwIDE5MGMtMjAuMiAyMC4yLTE5LjkgNTMuMi42IDczLjdzNTMuNSAyMC44IDczLjcuNmwxOTAtMTkweiIvPjwvc3ZnPg==')`,
                  }}
                />
                <span
                  className={`w-3 h-3 bg-no-repeat bg-center bg-contain transform animate-bounceAlpha`}
                  style={{
                    backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHN0eWxlPi5zdDB7ZmlsbDojZmZmfTwvc3R5bGU+PHBhdGggY2xhc3M9InN0MCIgZD0iTTMxOS4xIDIxN2MyMC4yIDIwLjIgMTkuOSA1My4yLS42IDczLjdzLTUzLjUgMjAuOC03My43LjZsLTE5MC0xOTBjLTIwLjEtMjAuMi0xOS44LTUzLjIuNy03My43UzEwOSA2LjggMTI5LjEgMjdsMTkwIDE5MHoiLz48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzE5LjEgMjkwLjVjMjAuMi0yMC4yIDE5LjktNTMuMi0uNi03My43cy01My41LTIwLjgtNzMuNy0uNmwtMTkwIDE5MGMtMjAuMiAyMC4yLTE5LjkgNTMuMi42IDczLjdzNTMuNSAyMC44IDczLjcuNmwxOTAtMTkweiIvPjwvc3ZnPg==')`,
                  }}
                />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* //large Screen */}

      <div
        className="hidden lg:flex
      
      "
      >
        <div className="w-60 h-80 bg-slate-800 p-3 flex flex-col gap-1 rounded-2xl">
          <div
            className="h-48 w-full bg-gray-700 rounded-xl flex-shrink-0
          overflow-hidden
          "
          >
            <img
              className="w-full h-full object-cover"
              src={proData?.src}
              alt={proData?.title}
            />
          </div>
          <div className="flex flex-col gap-4 ">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col w-full">
                <span
                  className="text-lg text-center 
                font-subhead"
                >
                  {proData?.title}
                </span>
              </div>
            </div>
            <Dialog>
              <DialogTrigger
                className="z-10  w-full  h-full
          flex items-center justify-center overflow-hidden
          "
              >
                <div
                  role="button"
                  className="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-md px-4 font-header"
                >
                  READ MORE
                </div>
              </DialogTrigger>
              <DialogContent
                className="w-[380px] h-[500px] bg-[#131313] rounded-lg
          text-secondary-2 overflow-hidden px-0 
          "
              >
                <div className="w-full h-full flex mt-4 overflow-hidden">
                  <div className=" flex  items-center rotate-90 ">
                    <span
                      className={`w-2 h-2 bg-no-repeat bg-center bg-contain transform animate-bounceAlpha `}
                      style={{
                        backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHN0eWxlPi5zdDB7ZmlsbDojZmZmfTwvc3R5bGU+PHBhdGggY2xhc3M9InN0MCIgZD0iTTMxOS4xIDIxN2MyMC4yIDIwLjIgMTkuOSA1My4yLS42IDczLjdzLTUzLjUgMjAuOC03My43LjZsLTE5MC0xOTBjLTIwLjEtMjAuMi0xOS44LTUzLjIuNy03My43UzEwOSA2LjggMTI5LjEgMjdsMTkwIDE5MHoiLz48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzE5LjEgMjkwLjVjMjAuMi0yMC4yIDE5LjktNTMuMi0uNi03My43cy01My41LTIwLjgtNzMuNy0uNmwtMTkwIDE5MGMtMjAuMiAyMC4yLTE5LjkgNTMuMi42IDczLjdzNTMuNSAyMC44IDczLjcuNmwxOTAtMTkweiIvPjwvc3ZnPg==')`,
                      }}
                    />
                    <span
                      className={`w-3 h-3 bg-no-repeat bg-center bg-contain transform animate-bounceAlpha`}
                      style={{
                        backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHN0eWxlPi5zdDB7ZmlsbDojZmZmfTwvc3R5bGU+PHBhdGggY2xhc3M9InN0MCIgZD0iTTMxOS4xIDIxN2MyMC4yIDIwLjIgMTkuOSA1My4yLS42IDczLjdzLTUzLjUgMjAuOC03My43LjZsLTE5MC0xOTBjLTIwLjEtMjAuMi0xOS44LTUzLjIuNy03My43UzEwOSA2LjggMTI5LjEgMjdsMTkwIDE5MHoiLz48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzE5LjEgMjkwLjVjMjAuMi0yMC4yIDE5LjktNTMuMi0uNi03My43cy01My41LTIwLjgtNzMuNy0uNmwtMTkwIDE5MGMtMjAuMiAyMC4yLTE5LjkgNTMuMi42IDczLjdzNTMuNSAyMC44IDczLjcuNmwxOTAtMTkweiIvPjwvc3ZnPg==')`,
                      }}
                    />
                  </div>
                  <div className=" w-full  overflow-y-auto rounded-lg">
                    <div className="w-full  p-4 bg-gray-800 rounded-lg shadow-lg">
                      <div className="flex flex-col gap-4">
                        {/* Image */}
                        <div
                          className="relative w-full 
                    h-[150px] rounded-lg overflow-hidden bg-gray-200"
                        >
                          <img
                            loading="lazy"
                            src={proData?.src || "fallback-image-url.jpg"}
                            alt={proData?.title || "Fallback Title"}
                            className="object-cover w-full h-full"
                          />
                        </div>

                        {/* Title */}
                        <div className="text-center">
                          <h1
                            className="text-lg font-bold text-white font-lato
                      "
                          >
                            {proData?.title || "Title"}
                          </h1>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-col items-center">
                          <h2
                            className="text-lg font-semibold
                      font-subhead
                      text-white"
                          >
                            Technologies
                          </h2>
                          <ul className="flex flex-wrap justify-center gap-2 mt-2">
                            {proData?.technologies?.map((item, index) => (
                              <li
                                key={index}
                                className="px-3 py-1 text-sm  text-white bg-blue-500 rounded-full font-texts font-semibold tracking-wider"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Description */}
                        <div className="text-center">
                          <h2 className="text-lg font-semibold text-white ">
                            Description
                          </h2>
                          <p className="mt-2 text-gray-400">
                            {proData?.description ||
                              "No description available."}
                          </p>
                        </div>

                        {/* Features */}
                        <div>
                          {proData?.features ? (
                            <h2 className="text-lg font-semibold text-white text-center">
                              Features
                            </h2>
                          ) : (
                            ""
                          )}
                          <ul className="mt-3 space-y-2">
                            {proData?.features?.map((item, index) => (
                              <li
                                key={index}
                                className="flex items-center  gap-2 text-gray-400 leading-5"
                              >
                                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full "></span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <span className="font-header">View Project</span>
                          <BouncingArrow />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" flex  items-center rotate-90">
                    <span
                      className={`w-2 h-2 bg-no-repeat bg-center bg-contain transform animate-bounceAlpha `}
                      style={{
                        backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHN0eWxlPi5zdDB7ZmlsbDojZmZmfTwvc3R5bGU+PHBhdGggY2xhc3M9InN0MCIgZD0iTTMxOS4xIDIxN2MyMC4yIDIwLjIgMTkuOSA1My4yLS42IDczLjdzLTUzLjUgMjAuOC03My43LjZsLTE5MC0xOTBjLTIwLjEtMjAuMi0xOS44LTUzLjIuNy03My43UzEwOSA2LjggMTI5LjEgMjdsMTkwIDE5MHoiLz48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzE5LjEgMjkwLjVjMjAuMi0yMC4yIDE5LjktNTMuMi0uNi03My43cy01My41LTIwLjgtNzMuNy0uNmwtMTkwIDE5MGMtMjAuMiAyMC4yLTE5LjkgNTMuMi42IDczLjdzNTMuNSAyMC44IDczLjcuNmwxOTAtMTkweiIvPjwvc3ZnPg==')`,
                      }}
                    />
                    <span
                      className={`w-3 h-3 bg-no-repeat bg-center bg-contain transform animate-bounceAlpha`}
                      style={{
                        backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHN0eWxlPi5zdDB7ZmlsbDojZmZmfTwvc3R5bGU+PHBhdGggY2xhc3M9InN0MCIgZD0iTTMxOS4xIDIxN2MyMC4yIDIwLjIgMTkuOSA1My4yLS42IDczLjdzLTUzLjUgMjAuOC03My43LjZsLTE5MC0xOTBjLTIwLjEtMjAuMi0xOS44LTUzLjIuNy03My43UzEwOSA2LjggMTI5LjEgMjdsMTkwIDE5MHoiLz48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzE5LjEgMjkwLjVjMjAuMi0yMC4yIDE5LjktNTMuMi0uNi03My43cy01My41LTIwLjgtNzMuNy0uNmwtMTkwIDE5MGMtMjAuMiAyMC4yLTE5LjkgNTMuMi42IDczLjdzNTMuNSAyMC44IDczLjcuNmwxOTAtMTkweiIvPjwvc3ZnPg==')`,
                      }}
                    />
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCardTile;
