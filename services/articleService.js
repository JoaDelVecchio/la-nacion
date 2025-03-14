import { API_URL } from "../lib/config.js";
import { formatToLongDate } from "../utils/utils.js";
import { cache } from "react";

// Usamos cache para evitar múltiples requests innecesarios y mejorar el rendimiento
export const fetchArticles = cache(async () => {
  const response = await fetch(API_URL, {
    next: { tags: ["articles"] },
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(
      `Error al fetchear artículos, HTTP ${response.status}: ${response.statusText}`
    );
  }

  const data = await response.json();

  if (!data.articles || !Array.isArray(data.articles)) {
    throw new Error("La API no devolvió los datos en el formato esperado");
  }

  const formattedArticles = data.articles
    .filter((article) => article.subtype === "7")
    .map((article) => ({
      ...article,
      display_date: formatToLongDate(article.display_date),
    }));

  return {
    articles: formattedArticles,
  };
});
