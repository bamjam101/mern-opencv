import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Glowbox from "../components/Glowbox";

const Home = () => {
  const user = useSelector((state) => state.global.profile);

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);

  useEffect(() => {
    if (!user) {
      setIsUserLoggedIn(false);
    }
  }, []);
  return (
    <article className="relative h-auto w-full px-16 text-white">
      <header className="grid grid-cols-2 place-items-center w-full min-h-[80svh]">
        <div className="flex flex-col justify-center gap-4 pr-16">
          <h1 className="text-3xl font-bold">
            Giving Your Camera Lens More Meaning
          </h1>
          <h3 className="text-lg font-semibold">
            Make use of efficient tools based services to solve real-time
            problems.
          </h3>
          <p className="text-md">
            Enable your devices to yield calculations for you that could take a
            lot of your precious time out. Rest assured as the calculations
            yielded are near to good if not accurate.
          </p>
          {isUserLoggedIn ? (
            <div>
              <button className="px-6 py-3 hover:scale-[101%] transition-transform duration-200 text-sm uppercase font-bold rounded-lg bg-blue">
                Checkout Our Services
              </button>
            </div>
          ) : (
            <article className="flex flex-col gap-2">
              <header>
                <h4 className="text-sm">
                  Do not have an account? Go ahead and create one!
                </h4>
              </header>
              <div className="flex gap-4">
                <Link
                  to={"/register"}
                  className="px-4 py-2 hover:scale-[101%] transition-transform duration-200 text-center text-sm uppercase font-bold rounded-lg bg-blue"
                >
                  Register
                </Link>
                <Link
                  to={"/login"}
                  className="px-4 py-2 hover:scale-[101%] transition-transform duration-200 text-center text-sm uppercase font-bold rounded-lg bg-transparent border-2 border-blue"
                >
                  Login
                </Link>
              </div>
            </article>
          )}
        </div>
        <div className="grid place-items-center w-full h-full">
          <img
            className="object-contain w-[60%] animate-bounce ease-in-out duration-200"
            src="./rd-theme.png"
            alt="Background"
          />
        </div>
      </header>
      <main className="flex flex-col justify-center items-center w-full gap-2 mb-20">
        <header>
          <h2 className="text-lg text-center font-bold">Services</h2>
          <p className="text-center">Choose what you are looking for.</p>
          <section className="grid place-items-center gap-5 py-6">
            <article className="relative flex flex-col justify-center items-center gap-3 p-6 bg-transparent/20 rounded-lg">
              <Glowbox />
              <header className="mx-4 border-b-4 border-b-blue">
                <h4 className="text-lg font-bold">Neural Network Based </h4>
              </header>

              <p className="text-center text-sm">
                This tool lets you to track and have a count of people crossing
                the view of your camera lens. It can have a wind application in
                inspecting job and it can also be used for security use.
              </p>
              <form
                action="/upload"
                method="POST"
                enctype="multipart/form-data"
              >
                <input type="file" name="file" multiple class="btn" />
                <input
                  className="px-6 py-3 hover:scale-[101%] transition-transform duration-200 text-sm uppercase font-bold rounded-lg bg-blue border-2 border-blue"
                  type="submit"
                  value="Upload"
                  class="btn"
                />
              </form>
            </article>
          </section>
        </header>
      </main>
    </article>
  );
};

export default Home;
