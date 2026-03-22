import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Ballers_CRUD/",
  plugins: [react()],
});