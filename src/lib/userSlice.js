import {createSlice} from '@reduxjs/toolkit';



const initialState = {
    user: {},
    isConnected: false
  }
  
  export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      loginapp(state, action) {
          state.user = action.payload
          state.isConnected = true
      },
      logoutapp(state) {
          state.user = {}
          state.isConnected = false
      }
    },
  })
  
  export const { loginapp, logoutapp } = userSlice.actions
  
  export default userSlice.reducer