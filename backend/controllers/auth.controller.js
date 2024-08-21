import bcrypt from "bcrypt";
import prisma from "../library/prisma.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    const { username, email, password } = req.body;
    console.log(req.body.password);
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword);
        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword
            }
        });
        res.status(201).json({ message: "User created Successfully." });
        console.log(newUser);
    }
    catch (err) {
        res.status(500).json({ message: "Failed to create User." });
        console.log(err);
    }
}

export const login = async (req, res) => {
    const { username, password } = req.body;
    const age = 1000 * 60 * 60 * 24 * 7;

    try {
        //Check if user exists
        const user = await prisma.user.findUnique({
            where: {
                username
            }
        });
        if (!user) {
          return res.status(401).json({ message: "Invalid username" });
        }

        //Check if password is correct
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
           return res.status(401).json({ message: "Invalid password" });
        }
        const { password: userPassword, ...userInfo } = user;
        const token = jwt.sign(
            {
                id: user.id,
                isAdmin: true
            },
            process.env.JWT_SECRET_KEY,
            { expiresIn: age });
        res.cookie("token", token, {
            httpOnly: true,
            // secure: true,
            maxAge: age
        }).json(userInfo);
    } catch (err) {
        res.status(500).json({ message: "Login failed." });
    }
}

export const logout = (req, res) => {
    res.clearCookie("token").status(200).json({ message: "Logged Out !" });
    console.log("Logout Endpoint !");
}