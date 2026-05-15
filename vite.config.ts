import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Supondo que o nome do seu repositório seja "bruchezDev.guia"
export default defineConfig({
  plugins: [react()],
  base: "/bruchezDev.guia/", // IMPORTANTE: O nome do repo com as duas barras!
});
