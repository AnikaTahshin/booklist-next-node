"use client";
import React, { useEffect, useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const router = useRouter();
 
  const [token, setToken]: any = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const handleLogout = () => {
    localStorage.clear()
    router.push("/login");
  }

  return (
    <div className="bg-gray-700 p-4 flex flex-col md:flex-row justify-between items-center">
      <div className="  mb-4 flex flex-row justify-between items-center">
        <Link href={"/"} className="text-4xl text-white">
          Kabbik
        </Link>

        {!mobileMenu && (
          <MdOutlineMenu
            onClick={() => setMobileMenu(true)}
            className="md:hidden cursor-pointer"
            size={25}
            color="white"
          />
        )}
        {mobileMenu && (
          <RxCross2
            onClick={() => setMobileMenu(false)}
            className="md:hidden cursor-pointer"
            size={25}
            color="white"
          />
        )}
      </div>
      <div>
        <ul className="flex flex-row justify-items-center items-center">
          <li className="text-white mx-10">
            <Link href="/about">About</Link>
          </li>
          <li className="text-white mx-10">
            <Link href="/contact">Contact</Link>
          </li>
          {token ?
          <li className="text-white mx-10">
          <span className="cursor-pointer" onClick={handleLogout}>Log Out</span>
        </li>
          :
          <><li className="text-white mx-10">
              <Link href="/register">Register</Link>
            </li><li className="text-white mx-10">
                <Link href="/login">Login</Link>
              </li></>}
          
        </ul>
      </div>

      

      
    </div>
  );
};

export default Navbar;
