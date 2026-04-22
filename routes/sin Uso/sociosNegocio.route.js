import express from 'express'
import { getSocioNegocio } from '../../controllers/get_socioNegocio.controller.js';

const socioNegocio = express.Router();

socioNegocio.get('/sociosNegocio', getSocioNegocio)

export {
    socioNegocio,
}