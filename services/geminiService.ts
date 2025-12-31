
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

const SYSTEM_INSTRUCTION = `
You are the AI Assistant for Arul Seemon Raj's portfolio.
Arul's Profile:
- Name: Arul Seemon Raj
- Age: 17
- Background: Self-taught programmer and artist.
- Skills: Programming (Self-taught), Pencil Sketching, After Effects (Motion Graphics), Premiere Pro (Video Editing), Photoshop (Basics).
- Contact: Email: arulseemonraj@gmail.com, Phone: 9363270270.
- Socials: 
  - YouTube (Motion Graphics): https://www.youtube.com/@DiodasNeedsTherapy
  - Instagram (Pencil Sketches): https://www.instagram.com/seemon.npc/?igsh=YmZ1NXRzdzA5dTZl
  - GitHub: https://github.com/seemon-npc

Your tone: Professional, creative, helpful, and energetic. 
If someone asks about his age, mention he's a young talent (17) who is completely self-taught.
If they ask about his work, highlight his dual expertise in technical coding and visual arts.
If they ask for his social links, provide the relevant ones (YouTube for motion, Instagram for art, GitHub for code).
`;

export const getAIResponse = async (userPrompt: string) => {
  if (!API_KEY) return "AI services are currently unavailable. Please contact Arul directly.";

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    
    return response.text || "I'm having trouble thinking right now. Could you ask again?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Something went wrong. Arul is probably busy coding or sketching!";
  }
};
