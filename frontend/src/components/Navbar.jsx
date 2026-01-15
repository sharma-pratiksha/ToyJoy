import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useState, useRef } from "react";
import toys5 from "../assets/toys5.png";
import newborn from "../assets/newborn.png";

const Navbar = () => {
  return (
    <div className="m-0 p-0">
      <nav className=" h-[20vh] flex items-center bg-pink-700">

      


        <div className=" flex justify-between w-full mx-10">
          <div className="logo">
            <img
              className="w-[10rem] h-[12rem]"
              src="src/assets/new.png"
              alt="Logo"
            ></img>
          </div>

        


          <div className="flex justify-center items-center w-[30vw]">
            <input
              type="text"
              placeholder="Search......"
              className="borser rounded-3xl w-[30vw] h-[6vh] p-[10px] font-bold "
            ></input>
          </div>

        


          <div className="list flex justify-between gap-10 font-bold text-l mt-[80px] text-white">
            <Link to="/" className="hover:underline">
              Home
            </Link>

            <div className="relative group h-[4vh] flex gap-1 items-center">
              <Link to="/age" className=" flex gap-2 hover:underline ">
                Age
              </Link>
              <IoIosArrowDown className="mt-[6px] transform transition-transform duration-300 group-hover:rotate-180"></IoIosArrowDown>

              <div
                className="fixed top-[20vh] left-0 mt-2 bg-white text-black rounded shadow-lg w-screen h-[50vh] p-2 
               opacity-0 scale-y-0 origin-top transition-all duration-300 ease-in-out 
               group-hover:opacity-100 group-hover:scale-y-100 z-50"
              >
                <div className="flex gap-2 justify-center">
                  <Link
                    to="age/0-1"
                    className="block p-2 hover:bg-gray-200"
                  >
                    <img
                      src={newborn}
                      alt="newborn"
                      className="w-[20vw] h-[40vh] object-cover rounded-md mb-1"
                    />{" "}
                    <span>Newborn</span>
                  </Link>
                  <Link to="age/1-5" className="block p-2 hover:bg-gray-200">
                    <img
                      src={toys5}
                      alt="0-5"
                      className="w-[20vw] h-[40vh] object-cover rounded-md mb-1"
                    />{" "}
                    <span>1-5</span>
                  </Link>
                  <Link to="age/6-12" className="block p-2 hover:bg-gray-200">
                    {" "}
                    <img
                      src={newborn}
                      alt="newborn"
                      className="w-[20vw] h-[40vh] object-cover rounded-md mb-1"
                    />{" "}
                    <span>6-12</span>
                  </Link>
                  <Link to="age/12-15" className="block p-2 hover:bg-gray-200">
                    <img
                      src={newborn}
                      alt="newborn"
                      className="w-[20vw] h-[40vh] object-cover rounded-md mb-1"
                    />
                    <span>12-15</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group h-[4vh] flex gap-1 items-center">
              <Link to="/Categories" className=" flex gap-2 hover:underline">
                Categories{" "}
              </Link>
              <IoIosArrowDown className="mt-[6px] transform transition-transform duration-300 group-hover:rotate-180"></IoIosArrowDown>

              <div
                className="  fixed top-[20vh] left-[60vw] mt-2 bg-white text-black rounded shadow-lg w-[40vh] h-[40vh] p-2 
               opacity-0 scale-y-0 origin-top transition-all duration-300 ease-in-out 
               group-hover:opacity-100 group-hover:scale-y-100 z-50"
              >
                <div>
                  <Link
                    to="/categories/toys"
                    className="block p-2 hover:bg-gray-200"
                  >
                    Toys
                  </Link>
                  <Link
                    to="/categories/games"
                    className="block p-2 hover:bg-gray-200"
                  >
                    Games
                  </Link>
                  <Link
                    to="/categories/learning"
                    className="block p-2 hover:bg-gray-200"
                  >
                    Learning & Educational
                  </Link>
                  <Link
                    to="/categories/oytdoor"
                    className="block p-2 hover:bg-gray-200"
                  >
                    Outdoor
                  </Link>
                  <Link
                    to="/categories/party&creative"
                    className="block p-2 hover:bg-gray-200"
                  >
                    Party & Creative
                  </Link>
                  <Link
                    to="/categories/indoor"
                    className="block p-2 hover:bg-gray-200"
                  >
                    Board & Indoor Games
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group h-[4vh] flex gap-1 items-center">
              <Link to="/Login" className=" flex gap-2 hover:underline">
                Log in
                <IoIosArrowDown className="mt-[6px] transform transition-transform duration-300 group-hover:rotate-180" />
              </Link>
              <div
                className="  fixed top-[20vh] left-[70vw] mt-2 bg-white text-black rounded shadow-lg w-[40vh] h-[20vh] p-2 
               opacity-0 scale-y-0 origin-top transition-all duration-300 ease-in-out 
               group-hover:opacity-100 group-hover:scale-y-100 z-50"
              >
                <div className="flex justify-around gap-1">
                  <span className="pt-2">Don't have account?</span>{" "}
                  <Link to="/Login/Signup" 
                  className="text-red-500">
                    <button className="border border-pink-300 rounded-3xl bg-pink-300 text-white font-bold p-1 px-2 pb-2">Sign up</button>
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/Cart" className="flex gap-2 hover:underline">
              <FaShoppingCart className="mt-[5px]" />
              Cart
            </Link>

            <Link to="/Wishlist" className="flex gap-3 hover:underline">
              <FaHeart className="mt-[5px]" />
              Wishlist
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
