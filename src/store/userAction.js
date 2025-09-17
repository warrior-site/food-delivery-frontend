import axios from "axios"
import { setUser,clearUser,setFav } from "./userSlice"

export const signUpUser = (userData) => async (dispatch) => {
    try {
        const response = await axios.post('http://localhost:4000/api/auth/register', userData,{ withCredentials: true })
        dispatch(setUser(response.data.user))
        return response
    } catch (error) {
        console.error("Error signing up user:", error)
    }
}

export const updateUser = (userId, updatedData) => async (dispatch) => {
    try {
        const response = await axios.post(`http://localhost:4000/api/user/update-profile/${userId}`, updatedData, { withCredentials: true });
        dispatch(setUser(response.data.user));
        return response;
    } catch (error) {
        console.error("Error updating user:", error);
    }
}

// LOGIN
export const loginUser = (credentials) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/api/auth/login",
      credentials,
      { withCredentials: true }
    );
    dispatch(setUser(response.data.user));
    return response;
  } catch (error) {
    console.error("Error logging in user:", error);
    throw error;
  }
};

// LOGOUT
export const logoutUser = () => async (dispatch) => {
  try {
    await axios.post("http://localhost:4000/api/auth/logout", {}, { withCredentials: true });
    dispatch(clearUser());
  } catch (error) {
    console.error("Error logging out user:", error);
    throw error;
  }
};

// CHECK EMAIL AVAILABILITY
export const checkEmail = (email) => async () => {
  try {
    const response = await axios.post(
      "http://localhost:4000/api/auth/check-email",
      { email },
      { withCredentials: true }
    );
    return response.data; // { available: true/false }
  } catch (error) {
    console.error("Error checking email:", error);
    throw error;
  }
};

// CHECK AUTH (Auto-login on reload)
export const checkAuth = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:4000/api/auth/check-auth", {
      withCredentials: true,
    });
    if (response.data?.user) {
      dispatch(setUser(response.data.user));
    } else {
      dispatch(clearUser());
    }
    return response.data;
  } catch (error) {
    console.error("Error checking auth:", error);
    dispatch(clearUser());
    throw error;
  }
};

export const getFavHotels = (userId) => async (dispatch) => {
  try {
      const response = await axios.get(`http://localhost:4000/api/user/get-fav/${userId}`, { withCredentials: true });
      dispatch(setFav(response.data.fav));
      return response;
  } catch (error) {
      console.error("Error fetching favorite hotels:", error);
  }
};

export const getRecommendation = (userId) => async (dispatch) => {
  try {
      const response = await axios.get(`http://localhost:4000/api/user/get-recommendations/${userId}`, { withCredentials: true });
      dispatch(setFav(response.data.fav));
      return response;
  } catch (error) {
      console.error("Error fetching favorite hotels:", error);
  }
};
