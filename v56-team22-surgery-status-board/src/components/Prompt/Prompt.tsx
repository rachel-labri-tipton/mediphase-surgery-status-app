import { useState } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'
import useAuth from '@/hooks/useAuth'
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';



const Prompt = () => {
  const [messages, setMessages] = useState<{ role: string, text: string }[]>([]);
  const { user } = useAuth()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const prompt = formData.get('aiPrompt') as string;
  
    // Add user message first
    setMessages((prev) => [...prev, { role: 'user', text: prompt }]);
  
    // Prepare Gemini API call
    const role = user?.role || 'guest';
    const statusCodes = `
  Surgery Status Codes:
  - Checked In: Patient is in the facility awaiting their procedure.
  - Pre-Procedure: Patient is undergoing surgical preparation.
  - In-Progress: Surgical procedure is underway.
  - Closing: Surgery completed, patient is being prepared for recovery.
  - Recovery: Patient transferred to post-surgery recovery room.
  - Complete: Recovery completed, patient awaiting dismissal.
  - Dismissal: Patient has left the hospital or been transferred to a hospital room.
  `;
  
    const contextInfo = `You are answering as a chatbot for a hospital surgery status app. The current user role is: ${role}. 
  ${statusCodes}
  Please tailor your answer for this role.`;
  
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(contextInfo + prompt);
    const answer = result.response.text();
  
    // Add bot message after response
    setMessages((prev) => [...prev, { role: 'bot', text: answer }]);
    form.reset();
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="fixed bottom-6 right-6 z-50 rounded-full p-4 shadow-lg bg-blue-600 text-white hover:bg-blue-700"
          aria-label="Open Chatbot"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" stroke="currentColor" />
            <path d="M8 15h8M8 11h8M8 7h8" stroke="currentColor" />
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="max-w-md w-full flex flex-col">
        <div className="font-bold text-lg mb-2">MediPhase Chatbot</div>
        <div className="flex-1 overflow-y-auto mb-2 space-y-2">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`px-3 py-2 rounded-lg max-w-[80%] ${
                  msg.role === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-900'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            name="aiPrompt"
            placeholder="Type your question..."
            className="flex-1"
            required
          />
          <Button type="submit">Send</Button>
        </form>
      </SheetContent>
    </Sheet>
  )
}

export default Prompt