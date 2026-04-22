import express from 'express'
import { post_ov_pedidoMysqlCompleto } from '../controllers/post_ov_pedidoMysqlCompleto.controller.js'

const ov_pedidoMysqlCompleto = express.Router();

ov_pedidoMysqlCompleto.post('/post_ov', post_ov_pedidoMysqlCompleto)

export{
ov_pedidoMysqlCompleto,
}