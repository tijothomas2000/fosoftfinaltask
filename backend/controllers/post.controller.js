import prisma from "../library/prisma.js";

export const addProduct = async (req, res) => {
    const body = req.body;
    try {
        const newPost = await prisma.product.create({
            data: {
                name: body.name,
                desc: body.desc,
                food: body.food,
                instruction: body.instruction,
                categoryId: body.categoryId  
            }
        });
        res.status(200).json({ message: "Successfully created food item!", newPost });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Couldn't add food item." });
    }
}

export const addCategory = async (req, res) => {
    const body = req.body;
    // const tokenUserId = req.userId;

    // console.log(body);
    try {
        const newPost = await prisma.category.create({
            data: {
                ...body
            }
        });
        res.status(200).json({ message: "Succesfully created category !" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Could'nt add category" });
    }
}

export const getAllCategories = async (req, res) => {
    console.log("Get all categories endpoint.");
    try {
        const response = await prisma.category.findMany();
        res.status(200).json({ message: "Success", response });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error: Couldnt find categories" });
    }
}

export const getCategoryById = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    try {
        const response = await prisma.category.findUnique({
            where: {
                id
            }
        });
        console.log(response);
        res.status(200).json({ message: "Success", response });
    } catch (err) {
        res.status(500).json({ message: "Error" });
    }
}