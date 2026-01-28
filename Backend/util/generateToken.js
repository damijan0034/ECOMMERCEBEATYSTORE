import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SEC, {
    expiresIn: "30d",
  });
 
  res.cookie('jwt', token, {
    httpOnly: true, // Cookie is only accessible via HTTP(S), not JavaScript
    secure: process.env.NODE_ENV === 'production', // Send only over HTTPS in production
    sameSite: 'strict', // Mitigate CSRF: cookie sent only for same-site requests
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days (matches JWT expiration)
  
  });
 console.log(res)
};

export default generateToken;