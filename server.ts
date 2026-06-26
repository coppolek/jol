import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  app.post("/api/suggest-coverage", async (req, res) => {
    try {
      const { absences, operators, sites } = req.body;
      
      const prompt = `Sei un assistente per l'assegnazione dei turni di operatori jolly in un'azienda.
      Analizza le assenze da coprire e suggerisci gli operatori jolly più adatti.
      
      Regole specifiche dei cantieri fornite dall'amministratore:
      ${sites.filter((s: any) => s.aiRules).map((s: any) => `- Cantiere "${s.name}": ${s.aiRules}`).join('\n')}
      
      Operatori Jolly disponibili:
      ${operators.map((o: any) => `- ${o.name} (ID: ${o.id})`).join('\n')}
      
      Assenze da coprire:
      ${absences.map((a: any) => `- ${a.date} (${a.timeSlot}) c/o ${a.site} [${a.reason}] (ID: ${a.id})`).join('\n')}
      
      Per ogni assenza, dimmi quale operatore suggerisci e perché, tenendo conto delle regole dei cantieri e di non sovraccaricare gli operatori con sovrapposizioni.
      Rispondi con un testo descrittivo chiaro e conciso.`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt
      });

      res.json({ suggestion: response.text });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to generate AI suggestion." });
    }
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
