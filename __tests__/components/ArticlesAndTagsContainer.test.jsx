import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import {
  mockApiResponse,
  expectedArticlesAfterFetch,
  expectedTopTags,
} from "../mockData/mockData";
import "@testing-library/jest-dom";
import ArticlesAndTagsContainer from "../../components/ArticlesAndTagsContainer";
import { ARTICLES_PER_PAGE } from "../../lib/constants";

it("deberia renderizar NoArticlesFound cuando no hay artículos", () => {
  render(<ArticlesAndTagsContainer articles={[]} />);

  // Verifica si los elementos se renderizan correctamente
  const title = screen.getByText("No se encontraron noticias");
  expect(title).toBeInTheDocument();

  const paragraph = screen.getByText(
    "Por favor, intenta nuevamente más tarde."
  );
  expect(paragraph).toBeInTheDocument();
});

it("deberia renderizar el número correcto de artículos al inicio", () => {
  render(<ArticlesAndTagsContainer articles={mockApiResponse.articles} />);

  const displayedArticles = screen.getAllByRole("article");
  console.log("Artículos encontrados:", displayedArticles.length);

  expect(displayedArticles.length).toBe(
    Math.min(expectedArticlesAfterFetch.length, 8)
  );
});

it("debería aumentar correctamente el número de artículos mostrados al hacer clic en el botón de Load More", async () => {
  render(<ArticlesAndTagsContainer articles={mockApiResponse.articles} />);

  const loadMoreButton = screen.getByRole("button", {
    name: /MÁS NOTAS DE ACUMULADO GRILLA/i,
  });

  const initialArticleCount = screen.getAllByRole("article").length;

  const expectedArticleCount = Math.min(
    initialArticleCount + ARTICLES_PER_PAGE,
    mockApiResponse.articles.length
  );

  await act(async () => {
    fireEvent.click(loadMoreButton);
  });

  const articleCountAfterClick = screen.getAllByRole("article").length;

  expect(articleCountAfterClick).toBe(expectedArticleCount);
});

it("debería calcular correctamente las 10 etiquetas más populares", () => {
  render(<ArticlesAndTagsContainer articles={mockApiResponse.articles} />);

  expectedTopTags.forEach((tag) => {
    const tagElement = screen.getByRole("link", { name: tag.text });
    expect(tagElement).toBeInTheDocument();
  });
});
