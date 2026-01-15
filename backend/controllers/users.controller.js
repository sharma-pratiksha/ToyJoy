import { asyncHandler } from "../utils/asynchandler.js";
import { ApiError } from "../utils/ApiError.js";
import {User} from "../models/users.model.js"
import { ApiResponse } from "../utils/ApiResponse.js";



const registerUser = asyncHandler( async(req, res) => {

    console.log("req.body:", req.body);
    
    const {userName,email, password} = req.body
    console.log("email: ", email);

     if (!userName || !email || !password) {
        throw new ApiError(400, "All fields are required");
    }

    
    if (
        [userName, email,password].some((field) => field?.trim() === "")
    ){
        throw new ApiError(400, "Fields cannot be empty")
    }

    const existedUser = await User.findOne({
        $or: [{email},{userName}]
    })
    if(existedUser) {
        throw new ApiError(409, "User with email or username already exists")
    }

     const user = await User.create({
        userName: userName.toLowerCase(),
        email,
        password

    })


    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if(!createdUser) {
        throw new ApiError(500, "Something went wrong while registring a user")
    }

    return res.status(201).json(
        new ApiResponse(201, createdUser, "User registered successfully")
    )
    

} )

export {registerUser}