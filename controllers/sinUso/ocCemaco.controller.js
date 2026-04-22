import dotenv from "dotenv";
import { Gemini } from "../../utils/gemini.utils.js";
import { promptOC_Cemaco } from "../../utils/prompt/index.js"

const postocCemaco = async (req, res) => {
  const texto = req.body.params.a;
  console.log(texto)
  const prompt = promptOC_Cemaco(texto)
  const result = await Gemini({ prompt })
  
  if (!result.status)
    return res.status(500).json(
      {
        status: 500,
        message: result.error
      }
    )
  return res.send(
    { result }
  )

}

export {
  postocCemaco
}

