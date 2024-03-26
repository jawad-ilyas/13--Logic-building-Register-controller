import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// Implement the middlewares

// Configure CORS middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

// Parse incoming JSON requests with a limit of 1mb
app.use(express.json({ limit: "1mb" }));

// Parse incoming URL-encoded form data with extended mode and a limit of 16kb
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Serve static files from the "public" directory
app.use(express.static("public"));

// Parse cookies attached to the request
app.use(cookieParser());






// routes import

import userRouter from "./routes/user.routes.js"



// routes declaration 
app.use("/api/v1/users" , userRouter)

export { app };
