import React from "react";
import Glowbox from "../components/Glowbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  const handleLogin = () => {};
  return (
    <div className="relative h-screen w-screen px-16 text-white">
      <header className="h-[8vh] flex items-center">
        <h1 className="text-2xl font-bold ">MirrorDesk</h1>
      </header>
      <Glowbox right="100%" top="0" left="0" bottom="100%" opacity="0.1" />
      <main className="grid place-items-center grid-cols-2 min-h-[92vh]">
        <section className="grid place-items-center w-full">
          <form
            onSubmit={handleLogin}
            className="flex flex-col gap-3 bg-transparent/20 rounded-2xl px-16 py-10"
          >
            <h2 className="text-xl font-semibold">Sign In</h2>
            <p className="text-semibold text-xs my-1">
              Login to use the services
            </p>
            <div className="flex gap-3 items-center hover:scale-[101%] transition-transform duration-200 hover:border-blue border-light rounded-lg p-2 border-2">
              <FontAwesomeIcon icon={faEnvelope} />
              <input
                type="text"
                className="rounded-md px-2 py-1 bg-transparent w-full text-sm  outline-none"
                placeholder="Email"
              />
            </div>
            <div className="flex gap-3 items-center hover:scale-[101%] transition-transform duration-200 hover:border-blue border-light rounded-lg p-2 border-2">
              <FontAwesomeIcon icon={faKey} />
              <input
                type="password"
                className="rounded-md px-2 py-1 bg-transparent w-full text-sm  outline-none"
                placeholder="Password"
              />
            </div>
            <button className="w-full px-4 py-2 hover:scale-[101%] transition-transform duration-200 text-center text-sm uppercase font-bold rounded-lg bg-blue">
              Login
            </button>
            <Glowbox
              right="0"
              top="100%"
              left="100%"
              bottom="0"
              opacity="0.1"
            />
          </form>
        </section>
        <section className="grid place-items-center w-full">
          <img
            className="object-contain w-full h-full"
            src="./login-bg.png"
            alt="Login"
          />
        </section>
      </main>
    </div>
  );
};

export default Register;
