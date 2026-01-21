import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_ENV === "production" ? "/plantya/" : "/plantya/",

  // esbuild: {
  //     jsxFactory: 'h',
  //     jsxFragment: 'Fragment',
  //   }

})
