import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

import { assets } from "@/assets/assets";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");

  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (currentState === "Sign Up") {
        // signup
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        // console.log(response.data);
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        // login
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);
  return (
    <div className="w-full flex justify-between gap-9">
      <img
        src={assets.contact_img}
        className="hidden sm:w-1/2 my-auto h-[90%]"
      />
      <div className="w-full sm:w-1/2">
        <form
          onSubmit={onSubmitHandler}
          className="flex flex-col text-start w-[90%] sm:max-w-96 m-auto my-6 sm:mt-14 gap-4 text-gray-800"
        >
          <div className="items-start gap-2 mb-2 mt-10">
            <p className="font-semibold text-xl">
              {currentState === "Login"
                ? "Log in to Urban Mart"
                : "Create an Account"}
            </p>
          </div>
          {currentState === "Login" ? (
            ""
          ) : (
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-800"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}

          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-800"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="w-full px-3 py-2 border border-gray-800"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-red-500 text-white font-light px-8 py-2 mt-2"
          >
            {currentState === "Login" ? "Sign In" : "Sign Up"}
          </button>
          <div className="w-full flex justify-center text-xs mt-2">
            {currentState === "Login" ? (
              <>
                <p>You don&apos;t have any account?</p>
                <p
                  onClick={() => setCurrentState("Sign Up")}
                  className="cursor-pointer underline ml-2"
                >
                  Create account
                </p>
              </>
            ) : (
              <>
                <p>You already have an account?</p>
                <p
                  onClick={() => setCurrentState("Login")}
                  className="cursor-pointer underline ml-2"
                >
                  Login
                </p>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
