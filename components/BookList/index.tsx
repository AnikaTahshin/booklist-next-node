"use client"
import React from "react";

import Link from "next/link";

const BookList = ({ data }: any) => {

 
  return (
    <div className=" flex flex-col items-center p-10 justify-center datas-center ">
    
      <div className="text-center">
        
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {data?.name}
          </h5>
        

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        <span className="text-xl text-black font-medium"> Description :  </span>
         {data?.description?.slice(0,100)}...
        </p>
        <Link href={`/details/${data.id}`}>Read More</Link>
       

       
      </div>
    </div>
  );
};

export default BookList;
