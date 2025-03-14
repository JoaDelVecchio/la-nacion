import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

if (!process.env.API_URL) {
  console.error("Faltan variables de entorno: API_URL");
  throw new Error("Estamos teniendo problemas, intente mas tarde!");
}

export const API_URL = process.env.API_URL;
