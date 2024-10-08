"use client";
import axios from "axios";
import { useRouter } from 'next/navigation';
import React, { useState } from "react";


export default function InviteSignup () {
    const [email, setEmail] = useState<string>("");
    const [tempPassword, setTempPassword] = useState<string>("");
    const [newPassword, setNewPassword] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [image, setImage] = useState<File | null>(null);
    const [showTempPassword, setShowTempPassword] = useState<boolean>(false);
    const [showNewPassword, setShowNewPassword] = useState<boolean>(false);

    const [firstNameError, setFirstNameError] = useState<string>("");
    const [lastNameError, setLastNameError] = useState<string>("");
    const [emailError, setEmailError] = useState<string>("");
    const [newPasswordError, setNewPasswordError] = useState<string>("");
    const [tempPasswordError, setTempPasswordError] = useState<string>("");
  
    const router = useRouter();
  
    const toggleTempPasswordVisibility = () => {
        setShowTempPassword(!showTempPassword);
    };

    const toggleNewPasswordVisibility = () => {
        setShowNewPassword(!showNewPassword);
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
      setNewPasswordError("");
      setTempPasswordError("");

      let isValid = true;

      if (!email) {
        setEmailError("Email is required");
        isValid = false;
      } else if (!validateEmail(email)) {
        setEmailError("Please enter a valid email address");
        isValid = false;
      }

      if (!newPassword || newPassword.length < 4) {
        setNewPasswordError("Password is required and must be at least 4 letters long");
        isValid = false;
      }

      if (!tempPassword || tempPassword.length < 4) {
        setTempPasswordError("Password is required and must be at least 4 letters long");
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
          formData.append("email", email);
          formData.append("tempPassword", tempPassword);
          formData.append("newPassword", newPassword);
          formData.append("firstName", firstName);
          formData.append("lastName", lastName);
    
          if (image) {
            formData.append("profilePic", image);
          }
    
          const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/inviteSignup`, formData);
          if (response.status === 200) {
            router.push("/login");
          } else {
            console.log("Invite signup failed");
          }
        } catch (error) {
          console.error("Error during invite signup:", error);
        }
      }

    };
  
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-300">
        <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white shadow-lg rounded-xl p-8 pb-3 mt-8">
          <h2 className="text-2xl font-bold mb-4 text-center text-black">
            Complete Your Registration
          </h2>
          <div className="flex justify-center items-center bg-white rounded-lg p-2 mt-4">
            <div className="bg-black rounded-md h-8 p-4 flex justify-center items-center">
              <span className="text-white text-lg font-bold">SPRINTER</span>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
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
                  type={showTempPassword ? "text" : "password"}
                  value={tempPassword}
                  onChange={(e) => setTempPassword(e.target.value)}
                  className="mt-4 block w-full py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 sm:text-sm text-black"
                  placeholder="Password"
                />
                {tempPasswordError && <p className="text-red-500 text-xs">{tempPasswordError}</p>}
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 px-3 flex items-center"
                  onClick={toggleTempPasswordVisibility}
                >
                  {showTempPassword ? (
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
              <div className="relative">
                <input
                  type={showNewPassword ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="mt-4 block w-full py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 sm:text-sm text-black"
                  placeholder="New Password"
                />
                {newPasswordError && <p className="text-red-500 text-xs">{newPasswordError}</p>}
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 px-3 flex items-center"
                  onClick={toggleNewPasswordVisibility}
                >
                  {showNewPassword ? (
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
                type="file"
                onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
                className="mt-4 block w-full py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 sm:text-sm text-black"
              />
            </div>
            <div>
              <button
                type="submit"
                className="mt-4 w-full bg-black text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mb-10"
              >
                Complete Registration
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };