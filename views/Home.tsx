"use client"
import BookList from '@/components/BookList'
import React from 'react'
import { useSelector } from 'react-redux'

const HomeView = ({booklist}:any) => {

    const {token} = useSelector((store:any) => (store.globalStore))

  return (
    // grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 px-6 grid-flow-row
    <div className="flex flex-col md:flex-row  w-screen h-screen p-10">
      {booklist.map((item: any) => (
        <div
          key={item.id}
          className=" bg-white border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <BookList key={item.id} data={item} />
        </div>
      ))}
    </div>
  )
}

export default HomeView