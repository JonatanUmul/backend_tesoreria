import express from 'express'
import { post_ov_pedidoHeaderCompleto, put_ov_pedidoHeaderCompleto} from '../../controllers/sinUso/post_ov_pedidoHeaderCompleto.controller.js'

const ov_pedidoHeaderCompleto = express.Router();

ov_pedidoHeaderCompleto.get('/get_ov',post_ov_pedidoHeaderCompleto)
ov_pedidoHeaderCompleto.put('/put_ov',put_ov_pedidoHeaderCompleto)

export{
ov_pedidoHeaderCompleto,
}