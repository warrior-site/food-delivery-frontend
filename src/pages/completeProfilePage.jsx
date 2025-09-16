import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateUser } from "../store/userAction";
import { useNavigate } from "react-router-dom";

function CompleteProfilePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [preview, setPreview] = useState(null);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleFormSubmit = async (data) => {
    const formData = new FormData();

    formData.append("city", data.city);
    formData.append("locality", data.locality);

    if (data.profilePhoto && data.profilePhoto[0]) {
      formData.append("profilePhoto", data.profilePhoto[0]);
    }

    // Debug: log FormData
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

   const id = "68c8240da374840f2d92251b"
   const response = await dispatch(updateUser(id, formData));
   if(response.data.success){
    console.log("profile updated", response)
    navigate("/")
    
   }

  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-100 p-5">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-bold text-center mb-6">
          Complete Your Profile
        </h2>

        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
          {/* Profile Photo */}
          <div>
            <label className="block mb-1 font-medium">Profile Photo</label>

            {/* Preview */}
            {preview && (
              <div className="mb-3 flex justify-center">
                <img
                  src={preview}
                  alt="Preview"
                  className="w-24 h-24 object-cover rounded-full border-2 border-gray-300"
                />
              </div>
            )}

            <input
              type="file"
              accept="image/*"
              {...register("profilePhoto")}
              onChange={handleFileChange}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* City */}
          <div>
            <label className="block mb-1 font-medium">City</label>
            <input
              type="text"
              {...register("city", { required: "City is required" })}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your city"
            />
            {errors.city && (
              <p className="text-red-500 text-sm">{errors.city.message}</p>
            )}
          </div>

          {/* Locality */}
          <div>
            <label className="block mb-1 font-medium">Locality</label>
            <input
              type="text"
              {...register("locality", { required: "Locality is required" })}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your locality"
            />
            {errors.locality && (
              <p className="text-red-500 text-sm">{errors.locality.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
}

export default CompleteProfilePage;
