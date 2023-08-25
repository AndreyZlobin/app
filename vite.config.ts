import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";
import {dependencies} from './package.json'
//
// type FederationManifest = Record<string, {
//     name: string;
//     filename: string;
//     exposes: Record<string, string>
// }>

// const manifest: FederationManifest = {
//     app: {
//         name: 'remote-app',
//         filename: 'remoteEntry.js',
//         exposes: {
//             './AuthModal': './src/remote/auth-modal/index.ts',
//             './Button': './src/components/Button.tsx',
//             './Header': './src/components/Header.tsx',
//             './Footer': './src/components/Footer.tsx',
//         }
//     }
// }
export default defineConfig({
  plugins: [react(),
      federation({
          name: 'remote-app',
          filename: 'remoteEntry.js',
          exposes: {
            './AuthModal': './src/remote/auth-modal/index.ts',
            './Button': './src/components/Button.tsx',
              './Header': './src/components/Header.tsx',
            './Footer': './src/components/Footer.tsx',
          },
      shared: dependencies
    })
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})
