"use client"
import { setToken, setUserInfo } from '@/store/globalStore/globalStore'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const HandleInitialState = () => {
  const dispatch = useDispatch()

  const handleSetReduxValue = () => {
    const token = localStorage.getItem('token')
    const name = localStorage.getItem("name")
    const email = localStorage.getItem("email")
    const id = localStorage.getItem("id")

    const userInfo = {
        id: id,
        name: name,
        email: email
    }

    dispatch(setToken(token))
    dispatch(setUserInfo(userInfo))
  }

  useEffect(() => {
    
    handleSetReduxValue()
    
  }, [])
  
  return (
   <>
   </>
  )
}

export default HandleInitialState