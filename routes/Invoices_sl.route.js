import express from 'express';
import { get_Invoices_sl } from '../controllers/post_INVOICES_sl.controller.js';

const Invoices_sl = express.Router();    
Invoices_sl.get('/entry', get_Invoices_sl)
export { Invoices_sl };

