import express from "express";
import { getBanks, getBranchesByBank } from "../controllers/bankController.js";

const router = express.Router();

router.get("/banks", getBanks);
router.get("/banks/:bankId/branches", getBranchesByBank);

export { router };
