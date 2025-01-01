import "./PreLoader.css";
import { preLoaderAnim } from "../animations/index";
import { useEffect } from "react";
const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader w-screen h-screen z-[200]">
      <div className="loader"></div>
    </div>
  );
};

export default PreLoader;
