import express from "express";
import { tokenVerify } from "../middleware/tokenVerify.js";
import { shouldBeAdmin, shouldBeLoggedIn } from "../controllers/test.controller.js";

const router = express.Router();

router.get("/should-be-logged-in", tokenVerify, shouldBeLoggedIn);
router.get("/should-be-admin", shouldBeAdmin);

export default router;