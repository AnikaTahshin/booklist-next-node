"use client";
import axios from "axios";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createToast } from "@/utils/SweetAlert";

const Register = () => {
  const router = useRouter();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!data.name) {
      createToast("Name is required");
      return;
    } else if (!data.email) {
      createToast("Email is required");
      return;
    } else if (!data.password) {
      createToast("Password is required");
      return;
    } else if (data.password !== data.confirmPassword) {
      createToast("Password did not matched");
      return;
    } else {
      axios
        .post("http://localhost:8081/register", data)
        .then((res) => {
          console.log("hello res", res);
          if (res.data.status === 201) {
            router.push("/login");
          } 
        })
        .catch((err:any) => createToast(err.response.data.message)

        );
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      router.push("/");
    }
  }, []);
  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="max-w-sm w-full  p-10 bg-gray-500 mt-10 h-full "
      >
        <h1 className="text-center text-4xl text-white mb-5">Sign Up</h1>
        <div className="mb-5">
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Name"
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div className="mb-5">
          <input
            type="email"
            id="email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email"
          />
        </div>
        <div className="mb-5">
          <input
            type="password"
            id="password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Password"
          />
        </div>
        <div className="mb-5">
          <input
            type="password"
            id="cpassword"
            onChange={(e) =>
              setData({ ...data, confirmPassword: e.target.value })
            }
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Confirm Password"
          />
        </div>

        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
