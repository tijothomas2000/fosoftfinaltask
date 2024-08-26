import express from "express";
import { tokenVerify } from "../middleware/tokenVerify.js";
import { addCategory, addProduct, getAllCategories, getCategoryById, } from "../controllers/post.controller.js";

const router = express();

router.post("/addProduct", addProduct);
router.post("/addcategory", addCategory);
router.get("/getAllCategories", getAllCategories);
router.get("/getCategoryById/:id", getCategoryById);


export default router;