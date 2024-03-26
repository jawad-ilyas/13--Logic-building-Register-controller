import { asyncHandler } from "../utilis/asyncHandler.js";
import { ApiError } from "../utilis/ApiError.js";
import { User } from "../models/User.models.js";
import { uploadOnCloudinary } from "../utilis/Cloudinary.js";
import { ApiResponse } from "../utilis/ApiResponse.js";
const registerUser = asyncHandler(async (req, res, next) => {
    // get user details from frontend
    // validation from user data
    // check if user already exists : username , email 
    // check for images , check for avatar
    // upload them to cloudinary 
    // create user object (because use mongodb )  - create entry in db 
    // check user is created or not 
    // remove password and refresh token field from response 
    // check for user creation 
    // return response 



    // 1- get data from the user 
    const { fullName, userName, email, password } = req.body
    // console.log("user controller  info : ", fullName, userName, email, password)

    // 2- valiated the fields 

    if ([fullName, email, userName, password].some((field) => { field?.trim() === "" })) {
        throw new ApiError(400, "All fields are required ")
    }
    // if(fullName === "")
    // {
    //     throw new ApiError(400, "FullName is required"  )
    // }


    // 3- check user is already exits or not 
    const existedUser = User.findOne({
        $or: [{ email }, { userName }]
    })
    if (existedUser) {
        throw new ApiError(409, "Username or Email is already Exists")
    }



    // 4- check for images , check for avatar 
    const avatarLocalPath = req.files?.avatar[0]?.path;

    const coverImagesLocalPath = req.files?.coverImage[0]?.path;

    if (!avatarLocalPath) {
        throw new ApiError(400, "Avator file is required")
    }

    // 5- upload them into cloudinary 
    const avatar = await uploadOnCloudinary(avatarLocalPath);
    const coverImage = await uploadOnCloudinary(coverImagesLocalPath);

    if (!avatar) {
        throw new ApiError(409, "Avatar filed is required")
    }


    //6-  create a object and upload to databast

    const user = await User.create({
        fullName,
        avatar: avator.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        userName: userName.toLowerCase()
    })



    // 7- Check User is proplery created or not 
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong when registering the Error")
    }

    return res.status(201).json(
        new ApiResponse(200 , createdUser ,  "User Registered Successfully ")
    )


})

export { registerUser }