import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {dependencies} from './package.json'
import {CreateFederation} from "./lib/create-federation";
import topLevelAwait from 'vite-plugin-top-level-await'
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
            CreateFederation({
                name: 'dynamic-remote',
                filename: 'remoteEntry.js',
                exposes,
                // shared: {
                //     react: {
                //         generate: true,
                //     },
                //     'react-dom': {
                //         generate: true
                //     },
                // }
                // shared: {
                //     "@emotion/react": "11.11.1",
                //     "@emotion/styled": "11.11.0",
                //     "@mui/joy": "5.0.0-beta.3",
                //     "react": "18.2.0",
                //     "react-dom": "18.2.0"
                // }
                shared: {
                    // "@emotion/react": {
                    //     generate: true,
                    // },
                    // "@emotion/styled":{
                    //     generate: true,
                    // },
                    // "@mui/joy":{
                    //     generate: true,
                    // },
                    "react":{
                        generate: true,
                        version: dependencies.react, requiredVersion: dependencies.react
                    },
                    "react-dom": {
                        generate: true, version: dependencies["react-dom"], requiredVersion: dependencies["react-dom"]
                    },
                }
            }),
           // topLevelAwait({
           //      promiseExportName: '__tla',
           //      promiseImportName: (i) =>  `__tla_${i}`,
           //  }),
        ],
        build: {
            target: 'esnext',
            assetsInlineLimit: 40960,
            minify: true,
            cssCodeSplit: false,
        }
    }
})
