import express from 'express';
import { get_Disponibilidad_Bodega } from '../controllers/Disponibilidad_Bodega.controller.js';

const Disponibilidad_Bodega=express.Router();

Disponibilidad_Bodega.get('/item', get_Disponibilidad_Bodega)
export{
Disponibilidad_Bodega
}

