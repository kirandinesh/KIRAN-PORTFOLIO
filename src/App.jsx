import AnimatedCursor from "react-animated-cursor";
import { lazy, Suspense } from "react";
import NavBar from "./pages/NavBar/NavBar";
import PreLoader from "./components/PreLoader/PreLoader";
import Footer from "./components/Footer/Footer";

const About = lazy(() => import("./pages/About/About"));
const Home = lazy(() => import("./pages/Home/Home"));
const Skills = lazy(() => import("./pages/Skills/Skills"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const Career = lazy(() => import("./pages/Career/Career"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

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
        <Suspense fallback={<div>loading</div>}>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Career />
          <Contact />
        </Suspense>
        <Footer />
      </div>
    </div>
  );
};

export default App;
