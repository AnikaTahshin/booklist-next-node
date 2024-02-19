"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUserInfo } from "@/store/globalStore/globalStore";
import { createToast } from "@/utils/SweetAlert";
const Login = () => {
  const { token, userInfo } = useSelector((store: any) => store.globalStore);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [deviceName, setDeviceName] = useState("");

  const router = useRouter();


  const handleLogin = (e: any) => {
    e.preventDefault();

    const payload = {
      ...data,
      deviceName: deviceName,
    };

    axios
      .post("http://localhost:8081/login", payload)
      .then((res) => {
        if (res.data.status === 200) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("email", res.data.user.email);
          localStorage.setItem("name", res.data.user.name);
          localStorage.setItem("id", res.data.user.id);

          const userInfoData = {
            id: res.data.user.id,
            name: res.data.user.name,
            email: res.data.user.email,
          };

          dispatch(setToken(res.data.token));
          dispatch(setUserInfo(userInfoData));

          router.push("/");
        } else {
          return;
        }
      })
      .catch((err) => 

      createToast(err.response.data.message)
      // console.log('see errro',err.response.data.message)
      
      );
  };

  const getUA = () => {
    let device = "Unknown";
    const ua: any = {
      "Generic Linux": /Linux/i,
      Android: /Android/i,
      BlackBerry: /BlackBerry/i,
      Bluebird: /EF500/i,
      "Chrome OS": /CrOS/i,
      Datalogic: /DL-AXIS/i,
      Honeywell: /CT50/i,
      iPad: /iPad/i,
      iPhone: /iPhone/i,
      iPod: /iPod/i,
      macOS: /Macintosh/i,
      Windows: /IEMobile|Windows/i,
      Zebra: /TC70|TC55/i,
    };
    Object.keys(ua).map(
      (v) => navigator.userAgent.match(ua[v]) && (device = v)
    );
    setDeviceName(device);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      router.push("/");
    }
    getUA();
  }, []);

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
