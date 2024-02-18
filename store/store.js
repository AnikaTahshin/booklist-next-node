import { configureStore } from '@reduxjs/toolkit'
import globalStore from './globalStore/globalStore'

export const store =  configureStore({
    reducer: {
        globalStore:globalStore
    },
  })