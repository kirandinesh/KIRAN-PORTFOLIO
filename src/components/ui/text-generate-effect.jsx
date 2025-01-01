import { motion, useAnimate } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "../../utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 1,
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  const resetRef = useRef(false);

  useEffect(() => {
    if (resetRef.current) {
      animate(
        "span",
        { opacity: 0, filter: filter ? "blur(10px)" : "none" },
        { duration: 0 }
      );
    }
  }, [animate, filter]);

  const renderWords = () => (
    <motion.div
      ref={scope}
      onViewportEnter={() => {
        resetRef.current = true;
        wordsArray.forEach((_, idx) => {
          animate(
            `span:nth-child(${idx + 1})`,
            { opacity: 1, filter: filter ? "blur(0px)" : "none" },
            { duration: duration, delay: idx * 0.01 } // Staggered delay
          );
        });
      }}
      onViewportLeave={() => {
        resetRef.current = true;
        wordsArray.forEach((_, idx) => {
          animate(
            `span:nth-child(${idx + 1})`,
            { opacity: 0, filter: filter ? "blur(10px)" : "none" },
            { duration: 0 }
          );
        });
      }}
    >
      {wordsArray.map((word, idx) => (
        <motion.span
          key={idx}
          className={cn(
            "opacity-0 dark:text-white text-secondary-1",
            filter ? "blur-lg" : ""
          )}
        >
          {word}{" "}
        </motion.span>
      ))}
    </motion.div>
  );

  return (
    <div className={cn("font-semibold", className)}>
      <div className="mt-4">
        <div
          className="dark:text-white text-black text-md text-justify 
        font-texts 2xl:text-lg"
        >
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
