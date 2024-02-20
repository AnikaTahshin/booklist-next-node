"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const DetailsView = ({ booklist }: any) => {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center p-10">
      <h1 className="text-4xl text-black">{booklist?.name}</h1>
      <p>{booklist?.description}</p>
    </div>
  );
};

export default DetailsView;
