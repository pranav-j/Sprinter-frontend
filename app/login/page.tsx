"use client";
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from "react";
import { login } from "@/redux/slices/userSlice";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function Home() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const dispatch = useAppDispatch();
  // const isLoggedIn = useAppSelector((state) => state.loggedInReducer.isLoggedIn);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // useEffect(() => {
  //   console.log("isLoggedIn....", isLoggedIn);
    
  // }, [isLoggedIn]);

  // const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
  //       e.preventDefault();
  //       try {
  //           const response = await axios.post("http://localhost:3030/api/login", { email, password }, {withCredentials: true});
  //           if (response.status === 200) {
  //             // dispatch(setLoggedIn());
  //             router.push("/dashBoard");
  //           } else {
  //             // handle error response
  //             console.log("Login failed");
  //           }
  //         } catch (error) {
  //           console.error("Error logging in:", error);
  //         }  
  //   };

  const loggedInUser = useAppSelector((state) => state.userReducer.user);

  useEffect(() => {
    console.log("loggedInUser..............", loggedInUser);    
  }, [loggedInUser]);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setEmailError("");
    setPasswordError("");

    let isValid = true;
    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    }
    if (isValid) {
      try {
        dispatch(login({email, password}))
        .unwrap()
        .then(() => {
          router.push("/dashBoard");
        })
      } catch (error) {
        console.error("Error logging in:", error);
      }
    }
  
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-300">
      <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white shadow-lg rounded-xl p-8 pb-3 mt-8">
        <h2 className="text-2xl font-bold mb-4 text-center text-black">
          Welcome to
        </h2>
        <div className="flex justify-center items-center bg-white rounded-lg p-2 mt-4">
          <div className="bg-black rounded-md h-8 p-4 flex justify-center items-center">
            <span className="text-white text-lg font-bold  ">SPRINTER</span>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
          <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              className={`mt-4 block w-full py-2 border-b-2 focus:outline-none focus:border-blue-500 sm:text-sm text-black`}
              placeholder="Email"
            />
            {/* Display email error */}
            {emailError && <p className="text-red-500 text-xs">{emailError}</p>}
          </div>
          <div className="mb-4">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                className="mt-4 block w-full py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 sm:text-sm   text-black"
                placeholder="Password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 px-3 flex items-center"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#C0C0C0"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#C0C0C0"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                )}
              </button>
            </div>
            {passwordError && <p className="text-red-500 text-xs">{passwordError}</p>}
          </div>
          <div className="text-sm">
            <a
              href="#"
              className=" hover:underline   text-sm"
            >
              Forgot your password?
            </a>
          </div>
          <div>
            <button
              type="submit"
              className="mt-4 w-full bg-black  text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mb-10  "
            >
              LOGIN
            </button>
            <p className="mt-4 text-center text-gray-600   text-xs">
              Don't have an account?{" "}
              <a
                href="#"
                className="font-bold text-blue-600 hover:underline   text-xs"
              >
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
