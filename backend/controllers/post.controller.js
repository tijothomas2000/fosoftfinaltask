import prisma from "../library/prisma.js";

export const addPost = async (req, res) => {
    const body = req.body;
    const tokenUserId = req.userId;
    
    // console.log(body);
    try {
        const newPost = await prisma.product.create({
            data: {
               ...body
            }
        });
        res.status(200).json({ message: "Succesfully created food item !" }, newPost);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Could'nt add food item." });
    }
}
export const addCategory = async (req, res) => {
    const body = req.body;
    const tokenUserId = req.userId;
    
    // console.log(body);
    try {
        const newPost = await prisma.product.create({
            data: {
               ...body
            }
        });
        res.status(200).json({ message: "Succesfully created category !" }, newPost);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Could'nt add category" });
    }
}