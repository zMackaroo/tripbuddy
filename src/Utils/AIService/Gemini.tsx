import { GoogleGenerativeAI } from '@google/generative-ai';
import { GeminiAPIKey } from '@Utils/Constant';
import { tune } from './Tuning';

const genAI = new GoogleGenerativeAI(GeminiAPIKey);

const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash',
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: 'application/json',
};

export const chatSession = model.startChat({
  generationConfig,
  history: [...tune],
});
