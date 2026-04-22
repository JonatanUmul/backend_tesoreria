import { Router } from "express";

import{get_OrderHeaders, getOrderDetail, updateUpdateDocNumOrder} from "../controllers/orders.controller.js"

const router = Router();
router.get("/", get_OrderHeaders);
router.get("/orderNumber", getOrderDetail);
router.get("/insertDocNumInOrderNumber", updateUpdateDocNumOrder);



export default router;

