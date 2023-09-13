import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import beep from "@rollup/plugin-beep"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), beep()],
})

