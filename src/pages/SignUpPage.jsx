import React,{useEffect,useState} from "react"
import { useForm } from "react-hook-form"
import{useDispatch} from "react-redux"
import { checkEmail, signUpUser } from "../store/userAction"
import { useNavigate } from "react-router-dom"
function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isEmailTaken, setisEmailTaken] = useState(false)

  const onSubmit = async (data) => {

      const isEmail = await dispatch(checkEmail(data.email))
      if(!isEmail.available){
        alert("Email already exists")
        setisEmailTaken(true)
        return
      }else{
        setisEmailTaken(false)
      }
     

    const response = await dispatch(signUpUser(data))
    if(response.data.success){
        console.log("Signup data:", response)
        navigate('/complete-profile')
    }
    
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg shadow-gray-400/50 p-6">
        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create an Account
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Username */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Username
            </label>
            <input
              type="text"
              {...register("username", { required: "Username is required" })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 outline-none"
              placeholder="Enter username"
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 outline-none"
              placeholder="Enter email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 outline-none"
              placeholder="Enter password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 rounded-lg shadow-md transition"
          >
            Sign Up
          </button>
        </form>

        {/* Extra link */}
        <p className="text-center text-gray-600 text-sm mt-4">
          Already have an account?{" "}
          <span className="text-amber-500 font-semibold cursor-pointer">
            Login
          </span>
        </p>
      </div>
    </div>
  )
}

export default SignupPage
