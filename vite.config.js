import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react";
import { config } from 'dotenv';
// Load environment variables from .env file
config();

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env
  }
});