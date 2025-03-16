import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"

const registerUser = asyncHandler( async(req, res) => {
    //get user details from the data
    //validation - not epmpty
    // check if user already exists

    
    
    const {fullName, username, email, password} = req.body;
    console.log("my email",email)

    // if (fullName === "") {
    //     throw new ApiError (400, "Full name is required")
    // }

    if ([fullName, email, username, password].some((field) => field?.trim() === "" )
    ) {
        throw new ApiError(400, "All fields are required")
    }
} )

export {registerUser,}