"use server";
import axios from "axios";
import { z } from "zod";
import { callbackSchema } from "../ui/callback";

export const tgAlert = async ({
  name,
  phone,
  smart_token,
}: z.infer<typeof callbackSchema>) => {
  if (!smart_token) {
    return;
  }

  try {
    await axios.post(
      "https://smartcaptcha.yandexcloud.net/validate",
      {
        secret: process.env.PRIVATE_CAPTCHA_KEY,
        token: smart_token,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    );
  } catch (err: any) {
    throw new Error("Ошибка прохождения каптчи");
  }

  const token = process.env.TG_BOT_TOKEN;
  const chat_id = process.env.TG_CHAT_ID;
  const topic_id = process.env.TG_TOPIC_ID;

  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  const message = `Новая заявка c сайта!\nИмя: ${name}\nТелефон: ${phone}\n`;

  const params = {
    chat_id: chat_id,
    text: message,
    parse_mode: "HTML",
    message_thread_id: topic_id,
  };

  try {
    await axios.post(url, params);
  } catch {
    throw new Error("Ошибка отправки формы!");
  }
};
