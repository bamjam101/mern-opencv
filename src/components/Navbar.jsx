import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { setLogout } from "../feature/global-slice";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromLocalStorage, setInLocalStorage } from "../utlis";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.global.profile);

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
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
    return () => {
      window.removeEventListener("scroll", onWindowScroll);
      window.removeEventListener("click", onWindowClick);
    };
  }, []);
  return (
    <header
      className={`h-[8vh] flex items-center justify-between transition-colors duration-300 ease-linear ${
        fixed ? "bg-black" : "bg-transparent"
      }`}
    >
      <h1 className="text-2xl font-bold cursor-pointer">MirrorDesk</h1>
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
              className="cursor-pointer rounded-md px-3 py-2 text-white/80 hover:bg-gray-800 hover:text-white/90"
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
