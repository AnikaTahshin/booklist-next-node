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
    <div>
      <h1>{booklist?.name}</h1>
      <p>{booklist?.description}</p>
    </div>
  );
};

export default DetailsView;
