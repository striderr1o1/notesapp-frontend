import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
//export default defineConfig({
//})
export default defineConfig({
  base: 'notesapp-frontend',
  plugins: [react()],
})