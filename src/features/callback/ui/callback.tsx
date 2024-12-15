"use client";

import { Button } from "@/shared/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { InvisibleSmartCaptcha } from "@yandex/smart-captcha";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useHookFormMask } from "use-mask-input";
import { z } from "zod";
import { tgAlert } from "../model/action";

export const callbackSchema = z.object({
  name: z.string().min(2, "Минимум 2 символа").max(64, "Максимум 64 символа"),
  phone: z.string().regex(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, {
    message: "Номер телефона должен быть в формате +7 (XXX) XXX-XX-XX",
  }),
  smart_token: z.string(),
});

export const CallbackForm = () => {
  const [captchaVisible, setCaptchaVisible] = useState(false);
  const [resetCaptcha, setResetCaptcha] = useState(0);
  const form = useForm({
    resolver: zodResolver(callbackSchema),
    defaultValues: {
      name: "",
      phone: "",
      smart_token: "",
    },
  });
  const phoneWithMask = useHookFormMask(form.register);

  const handleCaptchaSuccess = async (token: string) => {
    const data = {
      ...form.getValues(),
      smart_token: token,
    };
    try {
      await tgAlert(data);
      toast.success("Заявка создана");
      form.reset();
    } catch (error: any) {
      toast.error(error.message);
      handleCaptchaHidden();
    }
  };

  const onSubmit = () => {
    setCaptchaVisible(true);
  };

  const handleCaptchaHidden = useCallback(() => {
    setCaptchaVisible(false);
    setResetCaptcha((prev) => prev + 1);
  }, []);

  return (
    <section className="bg-[url('/callback_bg.jpg')]">
      <div className="relative after:absolute after:inset-0 after:z-0 after:bg-black/70 after:content-['']">
        <div className="container relative z-40 flex flex-wrap justify-center py-44">
          <Form {...form}>
            <form
              className="flex basis-full flex-col gap-2 rounded-xl bg-white p-5 md:basis-1/2"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black">
                      Как к вам можно обращаться?
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="dark:text-black"
                        placeholder="Ваше имя"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black">
                      Ваш номер телефона
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="dark:text-black"
                        type="tel"
                        placeholder="+7 (999) 999-99-99"
                        {...field}
                        {...phoneWithMask("phone", ["+7 (999) 999-99-99"])}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <InvisibleSmartCaptcha
                key={resetCaptcha}
                sitekey={process.env.NEXT_PUBLIC_CAPTCHA_KEY as string}
                onSuccess={handleCaptchaSuccess}
                onChallengeHidden={handleCaptchaHidden}
                visible={captchaVisible}
              />
              <Button type="submit">Отправить</Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};
