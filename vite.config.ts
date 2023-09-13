import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {dependencies} from './package.json'
import {CreateFederation} from "./lib/create-federation";
import topLevelAwait from 'vite-plugin-top-level-await'
       const  exposes =  {
            './AuthModal': './src/remote/auth-modal/index.ts',
            './Button': './src/components/Button.tsx',
            './Header': './src/components/Header.tsx',
            './Footer': './src/components/Footer.tsx',
           './Context': 'src/context.tsx',
           './sum': 'src/sum.ts'
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
                    react:{
                        generate:false
                    },
                    'react-dom':{
                        generate:false
                    },
    }
                // shared: {
                // "@emotion/react": "11.11.1",
                // "@emotion/styled": "11.11.0",
                // "@mui/joy": "5.0.0-beta.3",
                //     "react": "18.2.0",
                //     "react-dom": "18.2.0"
                // }
            }),
            topLevelAwait({
                // The export name of top-level await promise for each chunk module
                promiseExportName: "__tla",
                // The function to generate import names of top-level await promise in each chunk module
                promiseImportName: i => `__tla_${i}`
            })
        ],
        build: {
            assetsInlineLimit: 40960,
            minify: true,
            cssCodeSplit: false,
            sourcemap:true,
            rollupOptions: {
                output: {
                    minifyInternalExports: false
                }
            }
        }
    }
})
