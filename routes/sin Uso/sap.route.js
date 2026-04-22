import express from 'express'
import { getSocioNegocio } from '../controllers/sap.controller.js';

const sapRouter = express.Router();

sapRouter.get('/socios', getSocioNegocio)

export {
    sapRouter,
}