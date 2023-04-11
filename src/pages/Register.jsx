import React from "react";
import Glowbox from "../components/Glowbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  const handleRegistration = () => {};
  return (
    <div className="relative h-screen w-screen px-16 text-white">
      <header className="h-[8vh] flex items-center">
        <h1 className="text-2xl font-bold ">MirrorDesk</h1>
      </header>
      <Glowbox top="0" left="0" opacity="0.1" />
      <main className="grid place-items-center grid-cols-2 min-h-[92vh]">
        <section className="grid place-items-center w-full">
          <img
            className="object-contain w-full h-full"
            src="./register-bg.png"
            alt="Register"
          />
        </section>
        <section className="grid place-items-start w-full px-16">
          <form
            onSubmit={handleRegistration}
            className="flex flex-col gap-3 w-[50%]"
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
              />
            </div>
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
              Register
            </button>
            <Glowbox right="0" bottom="0" opacity="0.1" />
          </form>
        </section>
      </main>
      <Glowbox bottom="0" left="0" opacity="0.1" />
    </div>
  );
};

export default Register;
