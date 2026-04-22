import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const geminiKey = process.env.GEMINI_API_KEY;

export const postGemini = async (req, res) => {
  try {
    const texto = req.body.params.a;

    const prompt = `
"Analiza el texto que te proporciono. Devolver únicamente un JSON válido y bien formado, con los nombres de campos exactamente como aparecen en el texto, pero con los valores limpios y sin caracteres corruptos.
Reglas estrictas:
1. No cambies ni traduzcas, usa los campos qe se te indican en el ejemplo de la respuesta json.
2. Limpia solo los valores, eliminando caracteres no legibles (�, \\r, \\n, \\t, \\\\, etc.)
3. Si un valor no aparece, usa null.
4. Devuelve solo el JSON plano (sin texto extra, sin explicación, sin formato Markdown, tal como en el ejemplo de abajo).
5. El JSON debe ser parseable con JSON.parse() (usa comillas dobles, sin comentarios).
6. Si el texto tiene secciones (por ejemplo header, supplier_details, delivery_details, items, summary, OBSERVACIONES), respeta esa estructura jerárquica.
7. No corrijas ortografía ni cambies palabras; solo limpia la codificación de caracteres.
8. Asegúrate de que los números sigan siendo números y las cadenas sigan siendo cadenas.
9. En CardName analioza o resume quien esta solicitando el pedido y escribelo en el campo de CardName
10. Si Incluye CEMACO el Codigo_Proveedor es:C00162
Ejemplo de respuesta correcta:
{
  "header": { 
   "Fecha": "",
    "Preparado_por": "",
    "Pedido": "",
    "Pedido_para_tienda": ""
    "CardName":""
    }",
  "supplier": "{
   "Codigo_Proveedor": "",
    "Nombre_Proveedor": "",
    "Direccion_Proveedor": "",
    "Telefono_Proveedor": ""
    }",
  "delivery": "{
    "Sirvase_suministrar_a": "",
    "Direccion_ATLAS": "",
    "Contacto_recepcion": "",
    "Telefono_recepcion": ""
    }",
  "items": "[
      "Posicion": "",
      "SKU": "",
      "Modelo": "",
      "Descripcion": "",
      "Cantidad": ,
      "Costo": ,
      "Total":
      ]",
  "summary": "{"Totales":}",
  "observations": "..."
}
${texto}
`;

    // Inicializa el cliente
    const genAI = new GoogleGenerativeAI(geminiKey);

    // Usa el modelo correcto (v1 estable)
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

   // const result = await model.generateContent(prompt);
   const result = await model.generateContent({
  contents: [{ role: "user", parts: [{ text: prompt }] }],
  generationConfig: {
    responseMimeType: "application/json"
  }
});

    const output = result.response.text();
    console.log(output)
    res.send({ output });
  } catch (error) {
    console.error(" Error al consultar Gemini:", error);
    res.status(500).json({
      status: error.status || 500,
      message: error.message,
    });
  }
};

