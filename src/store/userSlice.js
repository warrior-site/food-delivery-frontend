import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  fav: null,
}

const userSlice = createSlice({
  name: "user",
  initialState,   // ✅ missing in your code
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    setFav: (state, action) => {
      state.fav = action.payload
    },
    clearUser:(state)=>{
     state.user = null
    },
  },
})

export const { setUser,clearUser } = userSlice.actions
export default userSlice.reducer
