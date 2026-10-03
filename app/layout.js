import { cookies } from "next/headers";
import "./globals.css";
import "./logo-loader.css";
import { getLanguageDirection, languageStorageKey, normalizeLanguage } from "../lib/language";

export const metadata = {
  title: "Amir Rezazade | Front-End Developer",
  description: "Personal portfolio of Amir Rezazade, Front-End Developer focused on React, Next.js and responsive UI implementation.",
};

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
  const lang = normalizeLanguage(cookieStore.get(languageStorageKey)?.value);
  const dir = getLanguageDirection(lang);

  return (
    <html lang={lang} dir={dir} className="site-loading">
      <body className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_18%_10%,rgb(var(--primary-rgb)/0.18),transparent_30%),radial-gradient(circle_at_82%_12%,rgb(var(--secondary-rgb)/0.12),transparent_28%),linear-gradient(180deg,var(--bg)_0%,var(--bg-mid)_55%,var(--bg)_100%)] text-[var(--text)] antialiased [font-family:Inter,VazirmatnLocal,system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]">{children}</body>
    </html>
  );
}
