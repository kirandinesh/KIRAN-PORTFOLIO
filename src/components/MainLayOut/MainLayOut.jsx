import About from "@/pages/About/About";
import Home from "@/pages/Home/Home";
import NavBar from "@/pages/NavBar/NavBar";

function MainLayOut() {
  return (
    <div className=" flex flex-col h-dvh overflow-x-hidden">
      <div className="fixed top-0 left-0 right-0 z-10 ">
        <NavBar />
      </div>
      <main className="flex flex-col w-full flex-grow ">
        <section className="h-full mt-10">
          <Home />
          <About />
        </section>
      </main>
    </div>
  );
}

export default MainLayOut;
