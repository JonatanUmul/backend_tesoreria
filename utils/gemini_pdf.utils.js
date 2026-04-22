import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();


const gemini_pdf = async ({prompt, base64PDF}) => {
  const texto = typeof prompt === "string" ? prompt : JSON.stringify(prompt);
  const geminiKey = process.env.GEMINI_API_KEY;
  try {
  //  const texto = req.body.params.a;
    

    // Inicializa el cliente
    const genAI = new GoogleGenerativeAI(geminiKey);

    // Usa el modelo correcto (v1 estable)
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

   // const result = await model.generateContent(prompt);
   const result = await model.generateContent({
  contents: [{ role: "user", parts: [{ text: texto},
    {inlineData: {data:base64PDF, mimeType:"application/pdf"}}
  ] }],
  generationConfig: {
    responseMimeType: "application/json"
  }
});

    const output = result.response.text();
    console.log('en gemini',output)
    return{status:true, output };
  } catch (error) {
    console.error(" Error al consultar Gemini:", error);
    return{status:error.status || 500,
       message:error.message
  }}
}


export {
  gemini_pdf,
}