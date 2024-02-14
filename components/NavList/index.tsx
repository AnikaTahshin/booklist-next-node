import Link from 'next/link'
import React from 'react'

const NavList = ({list}:any) => {
  return (
    <>
        <ul>
            <li className='text-white'>
           <Link href={list.path}>
           {list.name}
           </Link>
            </li>
        </ul>
    </>
  )
}

export default NavList