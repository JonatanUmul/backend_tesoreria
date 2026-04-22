import express from 'express'
import { PostApplication} from '../../controllers/ocpdf.controller.js'
import multer from 'multer';
const upload= multer({storage:multer.memoryStorage()})

const ocpdf = express.Router();

//ocpdf.post('/application', PostApplication)
ocpdf.post('/application', upload.single("file"), PostApplication)

export{
ocpdf
}

