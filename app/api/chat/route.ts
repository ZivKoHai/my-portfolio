"use server";

import { generateGptResponse, ChatMessage } from "@/app/actions/chat";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Received request:", body);
    const messages: ChatMessage[] = body.messages;

    const response = await generateGptResponse(messages);
    console.log("Generated response:", response);

    return NextResponse.json(response);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { message: "An error occurred", error: String(error) },
      { status: 500 }
    );
  }
}
