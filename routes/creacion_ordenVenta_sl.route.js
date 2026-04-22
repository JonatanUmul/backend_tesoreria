import express from 'express';
import { creacion_ov_sl } from '../controllers/creacion_ordenVenta_sl.controller.js';

const creacion_ordeVenta_sl=express.Router();

creacion_ordeVenta_sl.post('/payload', creacion_ov_sl)
export{
creacion_ordeVenta_sl
}

