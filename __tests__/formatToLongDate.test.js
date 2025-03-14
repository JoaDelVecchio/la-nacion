import { formatToLongDate } from "../utils/utils.js";
import { test } from "node:test"; // Usamos el módulo de pruebas nativo
import assert from "node:assert"; // Usamos el módulo de aserciones nativo

// Tests
test("Convierte fecha correctamente a formato requerido ej: 6 de diciembre de 2019", () => {
  assert.strictEqual(
    formatToLongDate("2019-12-06T17:50:17.735Z"),
    "6 de diciembre de 2019",
    "Formato de fecha válido"
  );
});

test("Maneja fechas inválidas correctamente ej una string inválida", () => {
  assert.strictEqual(
    formatToLongDate("invalid-date"),
    "Formato de fecha inválido",
    "Manejo de fechas inválidas"
  );
});

test("Maneja null correctamente", () => {
  assert.strictEqual(
    formatToLongDate(null),
    "Formato de fecha inválido",
    "Manejo de null como entrada"
  );
});

test("Maneja undefined correctamente", () => {
  assert.strictEqual(
    formatToLongDate(undefined),
    "Formato de fecha inválido",
    "Manejo de undefined como entrada"
  );
});
