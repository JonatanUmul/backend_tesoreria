const promptOC_Cemaco = (texto) => {
  const propmt = `
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
9. En CardName analioza o resume quien esta solicitando el pedido y escribelo en el campo de CardName.
10. En  "header": "{"CardCode": "",} si la orden viene de Cemaco usa el codigo: C00162

Ejemplo de respuesta correcta:
{
  "header": { 
    "CardCode": "",
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
`
  return propmt
}

const propmtOC_Pdf = () => {
  const prompt = `
Eres una IA experta en leer órdenes de compra escaneadas.
Devuelve la información en JSON **válido**, sin comentarios ni texto extra.

Ejemplo de respuesta correcta:
{
  "header": { 
   "Fecha": "",
    "Preparado_por": "",
    "Pedido": "",
    "Pedido_para_tienda": ""
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
  }`;

  return prompt
}
export {
  promptOC_Cemaco,
  propmtOC_Pdf
}

