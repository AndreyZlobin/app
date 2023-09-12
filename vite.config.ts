import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {dependencies} from './package.json'
import {CreateFederation} from "./lib/create-federation";
       const  exposes =  {
            './AuthModal': './src/remote/auth-modal/index.ts',
            './Button': './src/components/Button.tsx',
            './Header': './src/components/Header.tsx',
            './Footer': './src/components/Footer.tsx',
        }

export default defineConfig(async ({command}) => {
    console.log(command)
    return {

        plugins: [
            react(),
            CreateFederation({
                name: 'AuthModal',
                filename: 'remoteEntry.js',
                exposes,
                shared: {
                // "@emotion/react": "11.11.1",
                // "@emotion/styled": "11.11.0",
                // "@mui/joy": "5.0.0-beta.3",
                "react": "18.2.0",
                "react-dom": "18.2.0"
                }
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
