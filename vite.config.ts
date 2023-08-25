import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
      federation({
      name: 'remote-app',
      filename: 'remoteEntry.js',
      exposes: {
        './AuthModal': './src/remote/auth-modal/index.tsx',
        './Button': './src/components/Button.tsx',
        './Header': './src/components/Header.tsx',
        './Footer': './src/components/Footer.tsx',
      },
      shared: ['react','react-dom']
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})
