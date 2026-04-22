import express from 'express'
import { getItemCode } from '../../controllers/sinUso/get_itemCode.controller.js';

const itemCode = express.Router();

itemCode.get('/itemCode', getItemCode)

export {
    itemCode,
}