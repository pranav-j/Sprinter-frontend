"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { OAuth } from "@/redux/slices/userSlice";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import React, { useState } from "react";
 
const Signup: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [otpSent, setOtpSent] = useState<boolean>(false);
  const [otp, setOtp] = useState<string>("");

  const [firstNameError, setFirstNameError] = useState<string>("");
  const [lastNameError, setLastNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const dispatch = useAppDispatch();

  // GOOGLE OAuth--------------------------------------------------

  const { userExistsError } = useAppSelector(state => state.userReducer);

  const handleGoogleSignupResponse = (response: any) => {
  
    console.log("GOOGLE signin response.........", response);
  
    dispatch(OAuth(response))
      .unwrap()
      .then((result) => {
        console.log('OAuth Success:', result);
        router.push("/dashBoard");
      })
      .catch((error) => {
        console.log('OAuth Failed:', error);
      });
  };
  // --------------------------------------------------------------

  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFirstNameError("");
    setLastNameError("");
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

    if (!password || password.length < 4) {
      setPasswordError("Password is required and must be at least 4 letters long");
      isValid = false;
    }

    if (!firstName) {
      setFirstNameError("First Name is required");
      isValid = false;
    }

    if (!lastName) {
      setLastNameError("Last Name is required");
      isValid = false;
    }

    if(isValid) {
      try {
        const formData = new FormData();
        formData.append("firstName", firstName);
        formData.append("lastName", lastName);
        formData.append("email", email);
        formData.append("password", password);
  
        console.log(firstName);
        
  
        if (image) {
          formData.append("profilePic", image);
        }
  
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/signup`, formData);
        if (response.status === 200) {
          setOtpSent(true);
        } else {
          console.log("Signup failed");
        }
      } catch (error) {
        console.error("Error signing up:", error);
      }
    }
  };

  const handleOtpSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/verifyOTP`, { email, otp });
      if (response.status === 200) {
        router.push("/login");
      } else {
        console.log("OTP verification failed");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-300">
      <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white shadow-lg rounded-xl p-8 pb-3 m-8">
        <h2 className="text-2xl font-bold mb-4 text-center text-black">
          Welcome to <span className='text-green-500'>Sprinter</span>
        </h2>
        <div className="flex justify-center items-center rounded-lg p-2 mb-4">
          <Image src="/images/sprinter-removebg-preview-cropped.PNG" height={100} width={100} alt="logo" />
        </div>
        <div className='flex justify-center items-center mt-2'>
          {userExistsError && <p className="text-red-500 text-xs">{userExistsError}</p>}
        </div>
        {!otpSent ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="mt-4 block w-full py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 sm:text-sm text-black"
                placeholder="First Name"
              />
              {firstNameError && <p className="text-red-500 text-xs">{firstNameError}</p>}
            </div>
            <div className="mb-4">
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="mt-4 block w-full py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 sm:text-sm text-black"
                placeholder="Last Name"
              />
              {lastNameError && <p className="text-red-500 text-xs">{lastNameError}</p>}
            </div>
            <div className="mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-4 block w-full py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 sm:text-sm text-black"
                placeholder="Email"
              />
              {emailError && <p className="text-red-500 text-xs">{emailError}</p>}
            </div>
            <div className="mb-4">
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-4 block w-full py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 sm:text-sm text-black"
                  placeholder="Password"
                />
                {passwordError && <p className="text-red-500 text-xs">{passwordError}</p>}
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
            </div>
            <div className="mb-4">
              <input
                type="file"
                onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
                className="mt-4 block w-full py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 sm:text-sm text-black"
              />
            </div>
            <div>
              <button
                type="submit"
                className="mt-4 w-full bg-black text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mb-1"
              >
                SIGN UP
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleOtpSubmit}>
            <div className="mb-4">
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="mt-4 block w-full py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 sm:text-sm text-black"
                placeholder="Enter OTP"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="mt-4 w-full bg-black text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mb-10"
              >
                VERIFY OTP
              </button>
            </div>
          </form>
        )}

        <div className='flex flex-col justify-center items-center py-4 mb-2'>
            <strong className='pb-2'>OR</strong>
            <GoogleLogin  onSuccess={handleGoogleSignupResponse} />
        </div>
      </div>
    </div>
  );
};

export default Signup;
