import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Toaster } from "sonner";
import { ProviderCompose } from "./_providers/provider-compose";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Грузоперевозки",
  description:
    "Предоставляем услуги по грузоперевозкам и грузотакси в Рязани, Рязанской области : Рыбное Старожилово, Поляны, Дядьково.",
  openGraph: {
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/z.png`,
        width: 78,
        height: 78,
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${montserrat.className} flex min-h-screen flex-col scroll-smooth bg-background antialiased`}
      >
        <ProviderCompose>{children}</ProviderCompose>
        <Toaster />
      </body>
    </html>
  );
}
