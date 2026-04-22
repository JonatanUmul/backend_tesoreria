import express from 'express';
import { get_BussinesPartner_sl } from '../controllers/post_BussinesPartner_sl.controller.js';

const BussinesPartner_sl = express.Router();    
BussinesPartner_sl.get('/sn', get_BussinesPartner_sl)
export { BussinesPartner_sl };

