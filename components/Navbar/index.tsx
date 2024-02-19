"use client";
import React, { useEffect, useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUserInfo } from "@/store/globalStore/globalStore";
const Navbar = () => {

  const {token,userInfo} = useSelector((store:any) => (store.globalStore))
  const dispatch = useDispatch()
  const [mobileMenu, setMobileMenu] = useState(false);
  const router = useRouter();

 



  const handleLogout = () => {
    dispatch(setToken(null))
    dispatch(setUserInfo( {
      email: '', 
      name: '', 
      id: ''
    }))
    localStorage.clear();
    router.push("/login");
  };

  return (
    <div className="w-full bg-gray-700 p-4 flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 flex flex-row justify-between items-center">
        <Link href={"/"} className="text-4xl text-white">
          Kabbik
        </Link>

        {/* {!mobileMenu && (
          <MdOutlineMenu
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden cursor-pointer"
            size={25}
            color="white"
          />
        )}
        {mobileMenu && (
          <RxCross2
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden cursor-pointer"
            size={25}
            color="white"
          />
        )} */}

        {/* <p className="text-white">Welcome, {userInfo?.name}</p> */}
      </div>
      {mobileMenu ?
      <div>
        <ul
          className="flex flex-col md:flex-row justify-items-center items-center"
          
        >
          <li className="text-white mx-10">
            <Link href="/about">About</Link>
          </li>
          <li className="text-white mx-10">
            <Link href="/contact">Contact</Link>
          </li>
          {token ? (
            <li className="text-white mx-10">
              <span className="cursor-pointer" onClick={handleLogout}>
                Log Out
              </span>
            </li>
          ) : (
            <>
              <li className="text-white mx-10">
                <Link href="/register">Register</Link>
              </li>
              <li className="text-white mx-10">
                <Link href="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </div> : 
      
      <div>
      <ul
        className="flex flex-col md:flex-row justify-items-center items-center"
        
      >
        <li className="text-white mx-10">
          <Link href="/about">About</Link>
        </li>
        <li className="text-white mx-10">
          <Link href="/contact">Contact</Link>
        </li>
        {token ? (
          <li className="text-white mx-10">
            <span className="cursor-pointer" onClick={handleLogout}>
              Log Out
            </span>
          </li>
        ) : (
          <>
            <li className="text-white mx-10">
              <Link href="/register">Register</Link>
            </li>
            <li className="text-white mx-10">
              <Link href="/login">Login</Link>
            </li>
          </>
        )}
      </ul>
    </div>
      }
    </div>
  );
};

export default Navbar;
