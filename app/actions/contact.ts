"use server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";

type State = {
  success: boolean;
  error: string | null;
};

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendMessage(
  prevState: State,
  formData: FormData
): Promise<State> {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  try {
    const { data, error } = await resend.emails.send({
      from: "ZivKoHai <system@zivkali.com>",
      to: ["ziv.kali656@gmail.com"],
      subject: "new message from contact form portfolio website",
      react: await EmailTemplate({
        firstName: name as string,
        email: email as string,
        message: message as string,
      }),
    });

    if (error) {
      throw new Error("Failed to send message");
    }

    console.log(data);

    return {
      success: true,
      error: null,
    };
  } catch {
    return {
      success: false,
      error: "Failed to send message",
    };
  }
}
