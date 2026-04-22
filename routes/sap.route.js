import { Router } from "express";
import {
  loginSapController,
  getBusinessPartnerController,
  getInventoryByItemController,
  createSalesOrderInSapController,
  createInvoicesInSapController,
  getStatusInvoicesInSapController
} from "../controllers/sap.controller.js";

const router = Router();

router.post("/login", loginSapController);
router.get("/business-partners", getBusinessPartnerController);
//router.get("/inventory/:itemCode", getInventoryByItemController);
router.post("/orders", createSalesOrderInSapController);
router.post("/invoinces", createInvoicesInSapController);
router.post("/statusInvoinces", getStatusInvoicesInSapController);

export default router;