import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";
import testRoute from "./routes/test.route.js";
import postRoute from "./routes/post.route.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();


app.use(cors({ origin: process.env.FRONTEND_URL, methods: 'GET,POST,PUT,DELETE', allowedHeaders: 'Content-Type, Authorization', credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoute);
app.use('/api/test', testRoute);
app.use('/api/food', postRoute);

app.listen(8800, () => {
    console.log("Server is running !");
});