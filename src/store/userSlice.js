import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  fav: [],
  recommendations: null,
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
    setRecommendations: (state, action) => {
      state.recommendations = action.payload
    },
    clearUser:(state)=>{
     state.user = null
    },
  },
})

export const { setUser,clearUser, setFav,setRecommendations} = userSlice.actions
export default userSlice.reducer
