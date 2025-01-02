import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Linkedin } from "lucide-react";
import { BackgroundLines } from "@/components/ui/background-lines";
gsap.registerPlugin(ScrollTrigger, useGSAP);

function Contact() {
  const [isCompleted, setIsCompleted] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const titleRef = useRef(null);
  const cardBox = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_CONTACT_KEY);

    const response = await fetch(import.meta.env.VITE_CONTACT_API, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setIsCompleted(true);
      setTimeout(() => {
        setIsCompleted(false);
      }, 2000);

      setIsLoading(false);

      event.target.reset();
    } else {
      console.log("Error", data);
    }
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

      gsap.from("#SkillsectionTitle span", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#contact",
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
        trigger: "#contact",
        start: "top bottom",
        end: "center center",
        toggleActions: "restart complete restart none",
      },
    });

    /////-------------//////
    gsap.from(".borderbox1", {
      x: -100,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
        end: "bottom center",
        toggleActions: "restart complete restart none",
      },
    });

    gsap.from(".borderbox2", {
      x: 100,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        toggleActions: "restart complete restart none",
      },
    });
    gsap.from(".iconBox", {
      y: 100,
      rotate: "360deg",
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        toggleActions: "restart complete restart none",
      },
    });
    //////-----/////
    gsap.from(cardBox.current, {
      scale: 0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        toggleActions: "restart complete restart none",
      },
    });
  });
  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <div
      id="contact"
      className="relative section flex-grow py-4 px-4 overflow-hidden lg:py-16"
    >
      <div className="hidden md:flex w-full h-full absolute">
        <BackgroundLines />
      </div>
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
              CONTACT
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
          CONTACT
        </h1>
      </div>
      {/* /// */}
      <Card className="w-full shadow-lg rounded-lg bg-white max-w-md mx-auto my-10 lg:my-14">
        <div className="flex w-full items-center flex-col justify-center">
          <div className="max-w-4xl mx-auto sm:w-full md:w-full lg:w-[500px] mobileL:w-full">
            <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-800">
              <div
                className={`borderbox1 absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 ${
                  isCompleted ? "border-green-300" : "border-pink-500"
                }  rounded-tl-2xl`}
              ></div>
              <div
                className={`borderbox2 absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 ${
                  isCompleted ? "border-green-500" : "border-red-400"
                }  rounded-tr-2xl`}
              ></div>
              <div
                className={`borderbox1 absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 ${
                  isCompleted ? "border-green-300" : "border-yellow-500"
                }  rounded-bl-2xl`}
              ></div>
              <div
                className={`borderbox2 absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 ${
                  isCompleted ? "border-green-300" : "border-pink-500"
                }  rounded-br-2xl`}
              ></div>

              <div className="relative">
                <div
                  className={`absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-2 bg-gradient-to-r 
                    mobileL:px-3 xs:px-2
                    ${
                      isCompleted
                        ? "from-green-500 to-green-300"
                        : "from-pink-500 to-yellow-500"
                    }  rounded-full text-sm text-white font-subhead
                sm:px-7 sm: sm:text-lg sm:tracking-wider mobileL:text-[1.2rem] xs:text-[0.8rem]`}
                >
                  {isCompleted ? (
                    <span className="font-subhead">&#10004; Submited</span>
                  ) : (
                    <span>Let&apos;s Connect</span>
                  )}
                </div>
                <div
                  className="mx-auto flex items-center  py-5  font-semibold text-gray-500 flex-col"
                  ref={cardBox}
                >
                  <div className="flex flex-col sm:w-full sm:px-10 items-center">
                    <form onSubmit={onSubmit} className="w-full">
                      <div className="flex flex-col gap-4 ">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-lg font-medium text-white mb-1 font-subhead xs:text-base"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm font-lato xs:p-1"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-lg font-medium text-white mb-1 font-subhead xs:text-base"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm font-lato xs:p-1"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="message"
                            className="block text-lg font-medium text-white 
                            mb-1 xs:text-base"
                          >
                            Message
                          </label>
                          <textarea
                            name="message"
                            id="message"
                            rows="3"
                            required
                            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm font-latox xs:p-1"
                          ></textarea>
                        </div>

                        <button
                          type="submit"
                          className="group relative inline-flex overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                        >
                          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-gradient-to-r from-red-600 via-blue-600 to-blue-600"></span>

                          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-medium backdrop-blur-3xl transition-all duration-300 group-hover:bg-slate-950/90">
                            <svg
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              fill="none"
                              className={`mr-2 h-5 w-5 text-pink-500 transition-transform duration-300  group-hover:-translate-x-1 
                                ${loading ? "animate-leftBounce" : ""}`}
                            >
                              <path
                                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                                strokeWidth="2"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                              ></path>
                            </svg>

                            <span className="relative bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-semibold">
                              {loading ? (
                                <span className="xs:text-[0.9rem] mobile472:text-sm font-lato">
                                  Sending...
                                </span>
                              ) : (
                                <span className="xs:text-[0.65rem] mobile472:text-sm font-lato">
                                  SEND MESSAGE
                                </span>
                              )}
                            </span>

                            <svg
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              fill="none"
                              className={`ml-2 h-5 w-5 text-blue-500 transition-transform duration-300 group-hover:translate-x-1
                                ${loading ? "animate-rightBounce" : ""}`}
                            >
                              <path
                                d="M13 5l7 7-7 7M5 5l7 7-7 7"
                                strokeWidth="2"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  className="iconBox absolute -bottom-12 left-1/2 -translate-x-1/2 px-2 py-2 bg-[#0077B5] rounded-full text-sm text-white font-subhead
                sm:px-4 sm:py-4 sm:-bottom-[60px]
                "
                >
                  <a
                    href="https://www.linkedin.com/in/kirandinesh/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Contact;
