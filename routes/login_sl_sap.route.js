import express from 'express';
import { post_login_sl_sap} from '../controllers/post_login_sl_sap.controller.js'

const login_sl_sap = express.Router();      
login_sl_sap.post('/login',post_login_sl_sap)

export{
login_sl_sap,
}   