import {i18n, type Locale} from "@/i18n/i18n-config";
import React, {PropsWithChildren} from "react";
import {Inter} from "next/font/google";
import '@/styles/globals.css';

const inter = Inter({subsets: ["latin"]});
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({lang: locale}));
}

export default function Root({children, params,}: PropsWithChildren<{
  params: { lang: Locale };
}>) {
  return (
    <html lang={params.lang}>
    <body className={inter.className}>{children}</body>
    </html>
  );
}

export const metadata = {
  title: "i18n within app directory - Vercel Examples",
  description: "How to do i18n in Next.js 13 within app directory",
};
