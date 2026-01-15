import React from 'react'
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";   // ✅ add this
import loginbg from "../assets/loginbg.png"

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();


  const onSubmit = async (data) => {
  try {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    console.log("✅ Server Response:", result);

    if (res.ok) {
      // ✅ token ko localStorage me save karo
      localStorage.setItem("token", result.token);
      alert("Login Successful!");
    } else {
      alert("❌ " + result.message);
    }
  } catch (err) {
    console.error("Error:", err);
    alert("Something went wrong, please try again.");
  }
};


  return (
    <div className='flex justify-center items-center min-h-screen bg-pink-700'>
      <div className="flex bg-white rounded-2xl shadow-xl overflow-hidden w-[80vw] max-w-4xl h-[80vh]">

        {/* Left Side Image */}
        <div className='hidden md:block w-1/2'>
          <img 
            src={loginbg} 
            alt="Login Background" 
            className='h-full w-full object-cover rounded-l-xl' 
          />
        </div>

        {/* Right Side Form */}
        <div className='form bg-white h-[80vh] w-[30vw] flex justify-center items-center rounded-r-xl shadow-lg'>
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-3/4'>
            
            {/* Heading */}
            <h2 className='text-3xl font-bold text-pink-700 mb-6 text-center'>
              Welcome Back
            </h2>

            {/* Username */}
            <input 
              {...register("Username", { required: true, minLength: {value:3, message:"Min length is 3"}, maxLength:{value:20, message:"Max length is 20"}})} 
              type='text' 
              placeholder='Username' 
              className='bg-pink-100 focus:outline-pink-500 m-3 p-3 rounded-lg border border-pink-300'
            />
            {errors.Username && <div className='text-red-500'> {errors.Username.message} </div>}

            {/* Password */}
            <input 
              {...register("password")} 
              type='password' 
              placeholder='Password' 
              className='bg-pink-100 focus:outline-pink-500 m-3 p-3 rounded-lg border border-pink-300'
            />

            {/* Submit Button */}
            <input 
              type='submit' 
              value='Login' 
              className='bg-pink-600 text-white font-semibold p-3 rounded-lg cursor-pointer hover:bg-pink-700 transition m-3'
            />

            {/* Extra Links */}
            <div className='flex justify-between text-sm text-pink-600 mt-2 px-3'>
              <a href='#' className='hover:underline'>Forgot Password?</a>
              <Link to="/Login/Signup" className='hover:underline'>Sign Up</Link>   {/* ✅ fixed */}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
