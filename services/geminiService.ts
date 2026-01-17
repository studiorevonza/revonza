import { GoogleGenAI } from "@google/genai";
import { SERVICES } from "../constants";

let aiClient: GoogleGenAI | null = null;

// Initialize the client safely
try {
  if (process.env.API_KEY) {
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
} catch (error) {
  console.warn("Gemini API Key not found or invalid.");
}

const SYSTEM_INSTRUCTION = `
You are the intelligent assistant for Revonza Studio, a digital agency founded by a freelancer.
Your goal is to help potential clients understand the services offered and guide them towards the contact form.

Here is the list of services Revonza Studio provides:
${SERVICES.map(s => `- ${s.title}: ${s.description}`).join('\n')}

Tone: Professional, Innovative, sleek, and helpful.
If asked about pricing, mention there are Starter, Professional, and Enterprise tiers, but specific quotes depend on project scope.
If asked about something unrelated to the agency, politely steer the conversation back to how Revonza can help them with digital solutions.
Keep answers concise (under 100 words) as this is a chat widget.
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!aiClient) {
    return "I'm currently in demo mode (API Key missing). I can tell you that Revonza offers excellent Web, AI, and Design services! Please contact us for more info.";
  }

  try {
    const response = await aiClient.models.generateContent({
      model: "gemini-2.5-flash",
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });
    
    return response.text || "I'm having trouble processing that right now. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered an error connecting to the intelligent core. Please try again later.";
  }
};
