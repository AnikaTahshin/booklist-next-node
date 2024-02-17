"use client"
import React from "react";
import { useRouter } from "next/navigation";
const BookList = ({ data }: any) => {
  const router = useRouter();
  return (
    <div onClick={() => router.push(`/details/${data.id}`)} className=" flex flex-col cursor-pointer items-center  p-10 justify-center datas-center ">
    
      <div className="text-center">
        
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {data?.name}
          </h5>
        

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        <span className="text-xl text-black font-medium"> Description :  </span>
         {data?.description}
        </p>
       

       
      </div>
    </div>
  );
};

export default BookList;
