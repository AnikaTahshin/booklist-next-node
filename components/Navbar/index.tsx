import React from 'react'
import NavList from '../NavList'

const Navbar = () => {
  const navLink = [
    {
      id:1,
      path:'/about',
      name:'About'
    },
    {
      id:2,
      path:'/contact',
      name:'Contact'
    },
    {
      id:3,
      path:'/store',
      name:'Store'
    },
  ]
  return (
    <div className='bg-gray-700 p-4 flex flex-row justify-between items-center'>
      <div className='w-[80%]'>
        <h1 className='text-4xl text-white'>Kabbik</h1>
      </div>
      {
        navLink.map((item:any) => (
          <div  key={item.id} >
            <NavList list={item} />
          </div>
        ))
      }
    </div>
  )
}

export default Navbar