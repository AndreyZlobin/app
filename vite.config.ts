import { defineConfig, Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import federation, {VitePluginFederationOptions} from "@originjs/vite-plugin-federation";
import {dependencies} from './package.json'
import {CreateFederation} from "./lib/create-federation";
       const  exposes =  {
            './AuthModal': './src/remote/auth-modal/index.ts',
            './Button': './src/components/Button.tsx',
            './Header': './src/components/Header.tsx',
            './Footer': './src/components/Footer.tsx',
        }
export default defineConfig(() => {
    console.log(process.env)
    return {
        plugins: [react(),
            CreateFederation({
                name: 'AuthModal',
                filename: 'remoteEntry.js',
                exposes,
                shared: dependencies
            })
        ],
        build: {
            modulePreload: false,
            target: "esnext",
            minify: false,
            cssCodeSplit: false,
        },
    }
})
