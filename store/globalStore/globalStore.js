import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: null,
    userInfo: {
      email: '', 
      name: '', 
      id: ''
    }
  }

export const globalStore = createSlice({
  name: 'globalStore',
  initialState,
  reducers: {
    setToken: (state,action) => {
      state.token = action.payload
    },
    setUserInfo: (state,action) => {
      state.userInfo = action.payload
    },
   
  },
})


export const { setToken, setUserInfo } = globalStore.actions

export default globalStore.reducer