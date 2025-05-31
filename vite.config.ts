import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/recibo-salvacao-2/' // substitua com o nome real do seu repositório no GitHub
})
