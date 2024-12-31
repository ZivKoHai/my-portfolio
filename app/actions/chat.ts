"use server";

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export type ChatMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};

export interface GptResponse {
  message: string;
  error?: string;
}

const ZIV_SYSTEM_CONTEXT: ChatMessage = {
  role: "system",
  content:
    "You are a chatbot that answers questions about Ziv Kali in his own portfolio website. Here is some information about Ziv: Ziv is a 23-year-old front-end developer from Israel with 1 year of professional experience. He specializes in building modern, responsive, and user-friendly web applications. Ziv has successfully completed over 5 projects, ranging from WordPress websites to advanced applications built with the Next.js framework. One of Ziv's most notable projects is the website for Platinum Aviation, where he designed the logo, selected the color palette, and built multiple pages to create a cohesive and professional web presence. While his expertise lies in front-end development, Ziv also demonstrates strong design skills and an ability to deliver complete, polished projects. Ask any question about Ziv's skills, projects, or experience! , my email is ziv.kali656@gmail.com",
};

export async function generateGptResponse(
  messages: ChatMessage[],
  model: string = "gpt-3.5-turbo"
): Promise<GptResponse> {
  try {
    const conversationWithContext = [ZIV_SYSTEM_CONTEXT, ...messages];

    const completion = await openai.chat.completions.create({
      model: model,
      messages: conversationWithContext,
      temperature: 0.7,
      max_tokens: 1000,
    });

    return {
      message: completion.choices[0].message.content || "No response generated",
    };
  } catch (error) {
    console.error("Error generating GPT response:", error);
    return {
      message: "",
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
    };
  }
}

// Example usage:
// const messages = [
//   { role: 'user', content: 'What kind of projects has Ziv worked on?' }
// ];
// const response = await generateGptResponse(messages);
