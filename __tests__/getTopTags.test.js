import { getTopTags } from "../utils/utils.js";
import { test } from "node:test"; // Usamos el módulo de pruebas nativo
import assert from "node:assert"; // Usamos el módulo de aserciones nativo
import { mockArticlesTags } from "./mockData/mockData.js";

// Caso 1: Devuelve las topTags
test("Devuelve las etiquetas más frecuentes", () => {
  const result = getTopTags(mockArticlesTags);
  assert.strictEqual(result.length, 4, "Debe devolver 4 etiquetas distintas");
  assert.strictEqual(
    result[0].slug,
    "javascript",
    'El tag más frecuente debe ser "javascript"'
  );
  assert.strictEqual(
    result[0].count,
    3,
    'El tag "javascript" debe tener un conteo de 3'
  );
  assert.strictEqual(
    result[1].slug,
    "programming",
    'El segundo tag más frecuente debe ser "programming"'
  );
});

// Caso 2: Manejo de entradas no válidas
test("Maneja entradas no válidas", () => {
  assert.strictEqual(
    getTopTags(null).length,
    0,
    "Debe devolver un array vacío para null"
  );
  assert.strictEqual(
    getTopTags(undefined).length,
    0,
    "Debe devolver un array vacío para undefined"
  );
  assert.strictEqual(
    getTopTags([]).length,
    0,
    "Debe devolver un array vacío para un array vacío"
  );
  assert.strictEqual(
    getTopTags("not an array").length,
    0,
    "Debe devolver un array vacío para un string"
  );
});
