import PortfolioApp from "../components/layout/PortfolioApp";
import { cookies } from "next/headers";
import { languageStorageKey, normalizeLanguage } from "../lib/language";

export default async function HomePage() {
  const cookieStore = await cookies();
  const initialLang = normalizeLanguage(cookieStore.get(languageStorageKey)?.value);

  return <PortfolioApp initialLang={initialLang} />;
}
