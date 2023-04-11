import Glowbox from "../components/Glowbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { getFromLocalStorage } from "../utlis";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setProfile } from "../feature/global-slice";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = getFromLocalStorage("PROFILE");

  const [error, setError] = useState("");
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (event) => {
    event.preventDefault();
    const users = getFromLocalStorage("USERLIST");
    console.log(data);
    users?.map((user) => {
      console.log("saved user: ", user);
      if (user.email === data.email) {
        if (user.password === data.password) {
          dispatch(setProfile(user));
          navigate("/");
        } else {
          setError("Wrong Credentials");
          alert(error);
        }
      }
    });
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);
  return (
    <div className="relative h-screen w-full px-16 text-white">
      <Navbar />
      <main className="grid place-items-center grid-cols-2 min-h-[92vh]">
        <section className="grid place-items-center w-full">
          <form
            onSubmit={handleLogin}
            className="flex flex-col w-[70%] gap-3 bg-transparent/20 rounded-2xl px-16 py-10"
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
            <button className="w-full px-4 py-2 hover:scale-[101%] transition-transform duration-200 text-center text-sm uppercase font-bold rounded-lg bg-blue">
              Login
            </button>
            <Glowbox right="0" top="100%" left="100%" bottom="0" />
            <p className="text-xs text-center">
              New User? Go to{" "}
              <Link style={{ color: "gold" }} to={"/register"}>
                Register
              </Link>
            </p>
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

export default Login;
