import express from 'express'
import { postocCemaco} from '../../controllers/sinUso/ocCemaco.controller.js'

const ocCemacoRouter = express.Router();

ocCemacoRouter.post('/solicitud', postocCemaco)

export{
ocCemacoRouter,
}