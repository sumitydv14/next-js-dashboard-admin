// app/login/page.jsx
"use client";
import { useState } from "react";

export default function LoginPage() {
  const [userDetails, setUserDetails] = useState({
    username: '',
    password: ''
  })

  const handleOnChange = (e) => {
    const {name, value} = e.target;
    setUserDetails((prev) => ({
        ...prev,
        [name] : value
    })) 
  }

  console.log("userDetails", userDetails)

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login with:", { userDetails });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-white text-center mb-6">
          Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Username */}
          <div>
            <label className="block text-gray-300 mb-1">Username</label>
            <input
              type="text"
              value={userDetails.username}
              name="username"
              onChange={handleOnChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-300 mb-1">Password</label>
            <input
              type="password"
              value={userDetails.password}
              name="password"
              onChange={handleOnChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium text-white"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
