import jwt from "jsonwebtoken";

export const generateToken = (userId,res) => {
    const { JWT_SECRET} = process.env;
    if(!JWT_SECRET) throw new Error("JWT_SECRET is not defined in environment variables");
    const token= jwt.sign({userId},JWT_SECRET,{
        expiresIn:'7d'
    });
    res.cookie("jwt",token,{
        httpOnly:true, //prevent xss attack cross site scripting
        maxAge:7*24*60*60*1000, //7 days
        sameSite:"strict", //csrf attack cross site request forgery
        secure: process.env.NODE_ENV==="development"? false:true, //https

   });
    return token;
};