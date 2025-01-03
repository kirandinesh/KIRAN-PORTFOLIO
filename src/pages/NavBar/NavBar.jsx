import { MenuIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

function NavBar() {
  const [menuBar, setMenuBar] = useState(false);
  const [active, setActive] = useState("home");

  const listData = [
    { title: "home", label: "HOME" },
    { title: "about", label: "ABOUT" },
    { title: "skills", label: "SKILLS" },
    { title: "project", label: "PROJECT" },
    { title: "education", label: "CAREER OVERVIEW" },
    { title: "contact", label: "CONTACT" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom >= 80) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenuBar = () => {
    setMenuBar(!menuBar);
  };

  return (
    <div className="bg-primary-background">
      {/* Desktop Navbar */}
      <nav className="hidden lg:flex fixed top-0 left-0 right-0  z-50 shadow-md justify-end items-center">
        <ul
          className="flex justify-center gap-8 py-4 px-16 font-subhead font-semibold bg-primary-background rounded-full
        2xl:text-lg tracking-wider
        "
        >
          {listData.map((item) => (
            <li key={item.title}>
              <ScrollLink
                to={item.title}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className={`cursor-pointer font-semibold ${
                  active === item.title
                    ? "text-yellow-500 transition-colors"
                    : "text-white"
                }`}
                onClick={() => setActive(item.title)}
              >
                {item.label}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navbar */}
      <header className="lg:hidden fixed top-0 left-0 right-0   font-subhead font-semibold bg-primary-background  z-10 shadow-md">
        <div className="flex justify-between items-center px-4 py-3">
          <h1 className="text-white font-bold">Portfolio</h1>
          <MenuIcon
            className="text-white cursor-pointer"
            onClick={toggleMenuBar}
          />
        </div>
        {menuBar && (
          <ul className="flex flex-col  font-subhead font-semibold bg-primary-background  items-center p-4">
            {listData.map((item) => (
              <li key={item.title} className="py-2">
                <ScrollLink
                  to={item.title}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className={`cursor-pointer font-semibold ${
                    active === item.title ? "text-highlight" : "text-white"
                  }`}
                  onClick={() => {
                    setActive(item.title);
                    setMenuBar(false);
                  }}
                >
                  {item.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        )}
      </header>
    </div>
  );
}

export default NavBar;
