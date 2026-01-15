import mongoose, {Schema} from "mongoose";
// import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";




const userSchema = new Schema(
    {
        userName: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
        },
        refreshToken: {
            type: String,
        },
        
        
    },
    {timestamps: true}
);

    userSchema.pre("save",  async function (next) {
        if(!this.isModified("password")) return next(); 
        this.password = await bcryptjs.hash(this.password, 10)
        next()
    })

    userSchema.methods.isPasswordCorrect = async function (password){
    return await bcryptjs.compare(password, this.password)
    }

export const User = mongoose.model("User", userSchema);