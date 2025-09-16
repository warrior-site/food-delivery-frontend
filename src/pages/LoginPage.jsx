import React from "react";
import { useForm } from "react-hook-form";
import {useDispatch} from "react-redux"
import { loginUser } from "../store/userAction";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    console.log(data)
   const response = await dispatch(loginUser(data))
   if(response){
    console.log("Login Data:", response);
    navigate("/")
   }
    
    // later connect with loginUser action
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-100 p-5">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* Small note */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
