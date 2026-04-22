import { Router } from "express";
import {
  getCentrosDeCostosController,
} from "../controllers/sapHana.controller.js";

const router = Router();

router.get("/centrosDeCostos", getCentrosDeCostosController);

export default router;