import { Router } from "express";
import {
  getLogModificaciones,
  postLogModificaciones
} from "../controllers/logDeModificaiones.controller.js";

const router = Router();

router.get("/modificaciones", getLogModificaciones);
router.post("/post_modificaciones", postLogModificaciones);

export default router;