import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'alancumberbatch',  // 这里替换为你的 GitHub 仓库名称
  plugins: [react()],
})
