import { GoogleGenerativeAI } from "@google/generative-ai";
import { gemini_pdf } from "../utils/gemini_pdf.utils.js";
import { propmtOC_Pdf } from "../utils/prompt/index.js"

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

const PostApplication = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No llegó el archivo" });

    const base64PDF = req.file.buffer.toString("base64");

    const prompt = propmtOC_Pdf()

    const response = await gemini_pdf(
  {prompt, base64PDF}
    );

if (!response.status)
    return res.status(500).json(
      {
        status: 500,
        message: result.error
      }
    )
  return res.send(
    { response }
  )

   

  } catch (error) {
    console.error("Error procesando PDF con Gemini:", error);
    return res.status(500).json({ error: "No se pudo procesar el PDF" });
  }
};

export { PostApplication };
