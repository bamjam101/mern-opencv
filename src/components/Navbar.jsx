import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [fixed, setFixed] = useState(false);

  function onWindowScroll() {
    if (window.scrollY > 0) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onWindowScroll);
    return () => window.removeEventListener("scroll", onWindowScroll);
  }, []);
  return (
    <header
      className={`${
        fixed ? "fixed bg-dark" : "relative bg-transparent"
      } z-10 grid h-[8vh] w-full grid-cols-[30%_0_50%] gap-4 text-sm transition-colors duration-200 ease-linear md:grid-cols-[25%_25%_40%] lg:grid-cols-[10%_50%_auto]`}
    >
      <Link
        to={"/browse"}
        className="flex h-full w-full items-center justify-center"
      >
        <h1>MirrorDesk</h1>
      </Link>
      <nav className="invisible grid h-full place-items-start items-center lg:visible">
        <ul className="flex items-center justify-center gap-4 text-gray-300">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
