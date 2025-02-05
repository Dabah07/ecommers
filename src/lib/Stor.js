import {configureStore} from '@reduxjs/toolkit'
import userSlice from './userSlice'
import cartSlice  from './CartSlice'





export default () => {
    return configureStore({
      reducer: {
          user: userSlice,
          cart : cartSlice
        
      }
    })
  }