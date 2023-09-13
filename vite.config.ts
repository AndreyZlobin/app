import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import {dependencies} from './package.json'
// import {CreateFederation} from "./lib/create-federation";
// import topLevelAwait from 'vite-plugin-top-level-await'
import federation from "@originjs/vite-plugin-federation";
       const  exposes =  {
            // './AuthModal': './src/remote/auth-modal/index.ts',
            './Button': './src/components/Button.tsx',
            // './Header': './src/components/Header.tsx',
            // './Footer': './src/components/Footer.tsx',
           // './Context': 'src/context.tsx',
           // './sum': 'src/sum.ts'
        }

export default defineConfig(async () => {
    return {
        plugins: [
            react(),
            federation({
                name: "remote_app",
                filename: "remoteEntry.js",
                exposes,
                // shared: ['react','react-dom']
            })
        ],
        build: {
            target: 'esnext',
            modulePreload: false,
            minify: false,
            cssCodeSplit: false
        }
    }
})
