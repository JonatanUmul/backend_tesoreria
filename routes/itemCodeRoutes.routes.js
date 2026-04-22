import { Router } from "express";
import {getItemCode, postItemCode, putItemCode, getItemCodeId, updateItemCode} from "../controllers/itemCode.controller.js"

const router = Router();

router.get("/", getItemCode);
router.get("/id", getItemCodeId);
router.post("/create", postItemCode);
router.post("/update", putItemCode);
router.post("/update/payload", updateItemCode);

export default router;