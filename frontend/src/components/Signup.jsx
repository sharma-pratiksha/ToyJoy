import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import loginbg from "../assets/loginbg.png"; 

const Signup = () => {
  const { 
    register, 
    handleSubmit, 
    watch, 
    formState: { errors } } = useForm();

  
  const password = watch("password");

  const onSubmit = async (data) => {
  try {
    const res = await fetch("http://localhost:8000/api/v1/users/register", {
      method: "POST",
      headers: {
         "Content-Type": "application/json" },
      body: JSON.stringify({
        userName: data.userName,
        email: data.email,
        password: data.password,
      }),
    }
  );

    const result = await res.json();
    console.log("✅ Server Response:", result);

    if (res.ok) {
      alert("Signup Successful!");
    } else {
      alert("❌ " + result.message);
    }
  } catch (err) {
    console.error("Error:", err);
    alert("Something went wrong, please try again.");
  }
};



  return (
    <div className="flex justify-center items-center min-h-screen bg-pink-700">
      {/* Box container */}
      <div className="flex bg-white rounded-2xl shadow-xl overflow-hidden w-[80vw] max-w-4xl h-[80vh]">
        
        {/* Left Side Image */}
        <div className="hidden md:block w-1/2">
          <img 
            src={loginbg} 
            alt="Signup Background" 
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Side Signup Form */}
        <div className="flex flex-col justify-center items-center p-10 w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-pink-600 mb-6">Create Account</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
            {/* Full Name */}
            <div>
              <input
                type="text"
                placeholder="Username"
                {...register("userName", { required: "Full name is required" })}
                className="w-full p-3 border bg-pink-100 border-pink-300 rounded-xl focus:ring-2   focus:outline-pink-500 focus:ring-pink-400 outline-none"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: "Email is required" })}
                className="w-full p-3 border bg-pink-100 border-pink-300 rounded-xl focus:ring-2  focus:outline-pink-500 focus:ring-pink-400 outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "At least 6 characters" },
                })}
                className="w-full p-3 border bg-pink-100 border-pink-300 rounded-xl focus:ring-2  focus:outline-pink-500 focus:ring-pink-400 outline-none"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <input
                type="password"
                placeholder="Confirm Password"
                {...register("confirmPassword", {
                  required: "Please confirm password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                className="w-full p-3 border bg-pink-100 border-pink-300 rounded-xl focus:ring-2  focus:ring-pink-400 outline-none"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
              )}
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full bg-pink-600 text-white font-bold py-3 rounded-xl hover:bg-pink-700 transition"
            >
              Sign Up
            </button>
          </form>

          <p className="text-gray-600 mt-6 text-sm">
            Already have an account?{" "}
            <Link to="/Login" className="text-pink-600 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
