import { fetchArticles } from "../services/articleService.js";
import { test } from "node:test"; // Usamos el módulo de pruebas nativo
import assert from "node:assert"; // Usamos el módulo de aserciones nativo
import {
  mockApiResponse,
  expectedArticlesAfterFetch,
} from "./mockData/mockData.js";

// Guardamos el valor original de fetch para restaurarlo después
const originalFetch = globalThis.fetch;

test("fetchArticles devuelve artículos filtrados y con fechas formateadas", async () => {
  // Simulamos el fetch solo dentro de este test
  globalThis.fetch = async () => ({
    ok: true,
    json: async () => mockApiResponse,
  });

  const result = await fetchArticles(); // Llamar a fetchArticles para obtener el resultado filtrado y formateado

  // Comparar los artículos procesados con los artículos esperados
  assert.deepStrictEqual(
    result.articles, // El resultado filtrado y formateado
    expectedArticlesAfterFetch, // Los artículos esperados con el formato y filtrado correctos
    "Debe devolver solo los artículos con subtype 7 y fechas formateadas"
  );

  // Restaurar fetch después de este test
  globalThis.fetch = originalFetch;
});

test("fetchArticles lanza error si el fetch falla", async () => {
  // Simulamos un error en el fetch solo dentro de este test
  globalThis.fetch = async () => ({ ok: false });

  let errorCaught = null;
  try {
    await fetchArticles();
  } catch (error) {
    errorCaught = error;
  }

  assert.strictEqual(
    errorCaught?.message,
    "Error al fetchear artículos",
    "Si hay error, debe devolver el mensaje de error correcto"
  );

  // Restaurar fetch después de este test
  globalThis.fetch = originalFetch;
});
