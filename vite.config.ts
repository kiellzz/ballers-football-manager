import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/ballers-football-manager/",
  plugins: [react()],
});
