import AnimatedCursor from "react-animated-cursor";
import { lazy, Suspense } from "react";
import Home from "./pages/Home/Home";
import NavBar from "./pages/NavBar/NavBar";
import PreLoader from "./components/PreLoader/PreLoader";

const About = lazy(() => import("./pages/About/About"));
const Skills = lazy(() => import("./pages/Skills/Skills"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const Career = lazy(() => import("./pages/Career/Career"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Footer = lazy(() => import("./components/Footer/Footer"));

const App = () => {
  return (
    <div className="w-screen h-screen ">
      <PreLoader />
      <div className="hidden lg:flex">
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: "yellow",
          }}
          outerStyle={{
            border: "3px solid yellow",
          }}
        />
      </div>
      <NavBar />
      <div className="w-full flex-grow h-full mt-10 p-5">
        <Home />
        <Suspense fallback={<div>loading</div>}>
          <About />
          <Skills />
          <Projects />
          <Career />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
