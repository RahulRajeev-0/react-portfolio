import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  preview: {
    port: process.env.PORT || 4173, // Use Render's assigned port
    host: "0.0.0.0", // Allow external connections
  },
});
