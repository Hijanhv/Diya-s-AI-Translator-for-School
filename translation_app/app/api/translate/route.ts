import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { text, fromLang, toLang } = await req.json();

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You are a professional translator. Translate the following text from ${fromLang} to ${toLang}. Only respond with the translation, nothing else.`,
        },
        {
          role: "user",
          content: text,
        },
      ],
      temperature: 0.3,
      max_tokens: 1000,
    });

    return NextResponse.json({
      translation:
        completion.choices[0].message.content?.trim() || "Translation error",
    });
  } catch (error) {
    console.error("Translation error:", error);
    return NextResponse.json({ error: "Translation failed" }, { status: 500 });
  }
}
