import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { setLogout } from "../feature/global-slice";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromLocalStorage, setInLocalStorage } from "../utlis";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((state) => state.global.profile);

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
  const [isHomePage, setIsHomePage] = useState(false);
  const [fixed, setFixed] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  function handleProfileClick(event) {
    event.stopPropagation();
    setShowProfileMenu(!showProfileMenu);
  }

  function onWindowClick() {
    if (showProfileMenu) {
      setShowProfileMenu(false);
    }
  }

  function handleSignOut() {
    dispatch(setLogout());
    removeItemFromLocalStorage("PROFILE");
    navigate("/login");
  }

  function onWindowScroll() {
    if (window.scrollY > 0) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onWindowScroll);
    window.addEventListener("click", onWindowClick);
    if (!user) {
      setIsUserLoggedIn(false);
    }
    if (location.pathname === "/") {
      setIsHomePage(true);
    }
    return () => {
      window.removeEventListener("scroll", onWindowScroll);
      window.removeEventListener("click", onWindowClick);
    };
  }, [user]);
  return (
    <header
      className={`min-h-[8vh] flex items-center z-50 w-full justify-between ${
        isHomePage ? "px-16" : "px-0"
      } transition-colors duration-200 ease-in-out ${
        fixed ? "fixed top-0 bg-black" : "static bg-transparent"
      }`}
    >
      <Link to={"/"} className="text-2xl font-bold cursor-pointer">
        MirrorDesk
      </Link>
      <section className="relative">
        {isUserLoggedIn && (
          <button
            className="flex items-center gap-2"
            onClick={handleProfileClick}
          >
            <FontAwesomeIcon className="text-white font-md" icon={faUser} />
            <p className="text-sm capitalize">{user?.name}</p>
          </button>
        )}
        {showProfileMenu ? (
          <ul className="absolute flex w-[100px] list-none flex-col justify-center gap-4 rounded-md bg-dark px-1 py-1 text-sm top-[1.4rem]">
            <li
              className="cursor-pointer z-50 rounded-md px-3 py-2 text-white/80 bg-gray-700 hover:bg-gray-800 hover:text-white/90"
              onClick={handleSignOut}
            >
              Log Out
            </li>
          </ul>
        ) : null}
      </section>
    </header>
  );
};

export default Navbar;
