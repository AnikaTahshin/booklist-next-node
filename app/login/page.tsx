"use client";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const handleLogin = (e: any) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/login", data)
      .then((res) => {
        if (res.data.status === 200) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("email", res.data.user.email);
          localStorage.setItem("name", res.data.user.name);
          localStorage.setItem("id", res.data.user.id);
          router.push("/");
        } else {
          return;
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={handleLogin}
        className="max-w-sm w-full  p-10 bg-gray-500 mt-10 h-full "
      >
        <h1 className="text-center text-4xl text-white mb-5">Sign In</h1>

        <div className="mb-5">
          <input
            type="email"
            id="email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-5">
          <input
            type="password"
            id="password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            placeholder="Password"
          />
        </div>

        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
