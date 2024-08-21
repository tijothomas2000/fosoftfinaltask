import express from "express";
import { tokenVerify } from "../middleware/tokenVerify.js";
import { addCategory, addPost } from "../controllers/post.controller.js";

const router = express();

router.post("/createfood", addPost);
router.post("/addcategory", tokenVerify, addCategory);

export default router;