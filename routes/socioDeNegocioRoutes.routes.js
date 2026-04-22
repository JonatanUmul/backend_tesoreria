import { Router } from "express";
import { getSocioDeNegocio, postSocioDeNegocio } from "../controllers/socioDeNegocio.controller.js"
const router = Router()

router.get('/estado', getSocioDeNegocio)
router.post('/create', postSocioDeNegocio)

export default router