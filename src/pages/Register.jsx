import React from "react";
import Glowbox from "../components/Glowbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "../feature/global-slice";
import { getFromLocalStorage, updateUserListInLocalStorage } from "../utlis";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = getFromLocalStorage("PROFILE");

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegistration = (event) => {
    event.preventDefault();
    dispatch(setProfile(data));
    updateUserListInLocalStorage(data);
    navigate("/");
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);
  return (
    <div className="relative h-screen w-full px-16 text-white">
      <Navbar />
      <Glowbox top="0" left="0" />
      <main className="grid place-items-center grid-cols-2 min-h-[92vh]">
        <section className="grid place-items-center w-full">
          <img
            className="object-contain w-[60%]"
            src="./register-bg.png"
            alt="Register"
          />
        </section>
        <section className="grid place-items-start w-full px-16">
          <form
            onSubmit={handleRegistration}
            className="flex flex-col gap-3 w-[70%] bg-transparent/20 px-16 py-10 rounded-2xl"
          >
            <h2 className="text-xl font-semibold">Create Your Account</h2>
            <p className="text-semibold text-xs my-1">
              Created for interaction that changes the game
            </p>
            <div className="flex gap-3 items-center hover:scale-[101%] transition-transform duration-200 hover:border-blue border-light rounded-lg p-2 border-2">
              <FontAwesomeIcon className="text-white font-md" icon={faUser} />
              <input
                type="text"
                className="rounded-md px-2 py-1 bg-transparent w-full text-sm  outline-none"
                placeholder="Username"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                required
              />
            </div>
            <div className="flex gap-3 items-center hover:scale-[101%] transition-transform duration-200 hover:border-blue border-light rounded-lg p-2 border-2">
              <FontAwesomeIcon icon={faEnvelope} />
              <input
                type="text"
                className="rounded-md px-2 py-1 bg-transparent w-full text-sm  outline-none"
                placeholder="Email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                required
              />
            </div>
            <div className="flex gap-3 items-center hover:scale-[101%] transition-transform duration-200 hover:border-blue border-light rounded-lg p-2 border-2">
              <FontAwesomeIcon icon={faKey} />
              <input
                type="password"
                className="rounded-md px-2 py-1 bg-transparent w-full text-sm  outline-none"
                placeholder="Password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 hover:scale-[101%] transition-transform duration-200 text-center text-sm uppercase font-bold rounded-lg bg-blue"
            >
              Register
            </button>
            <p className="text-xs text-center">
              Already have an account? Go to{" "}
              <Link style={{ color: "gold" }} to={"/login"}>
                Login
              </Link>
            </p>
            <Glowbox right="0" bottom="0" />
          </form>
        </section>
      </main>
      <Glowbox bottom="0" left="0" />
    </div>
  );
};

export default Register;
