import "./globals.css";
import localFont from "next/font/local";
import SmoothScroll from "@/components/SmoothScroll";
import AOSInit from "@/components/AOSInit";
import Loader from "./Loader";

const iranSans = localFont({
  src: [
    {
      path: "../public/font/woff/IRANSansX-Medium.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-iranSans",
  display: "swap",
});
export const metadata = {
  title: "Amir Rezazade",
  description: "amir rezazadeh portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="fa" dir="rtl" className="scroll-smooth overflow-x-hidden">
      <head>
        <link rel="preload" href="/images/background.webp" as="image" />
        <link rel="preload" href="/images/astronaut.png" as="image" />
      </head>
      <body suppressHydrationWarning className={`${iranSans.className} text-white bg-slate-800 relative overflow-x-hidden`}>
        <Loader />
        <AOSInit />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
