import { defineConfig, Plugin } from 'vite'
import react from '@vitejs/plugin-react'
// import federation, {VitePluginFederationOptions} from "@originjs/vite-plugin-federation";
import {dependencies} from './package.json'
import {CreateFederation} from "./lib/create-federation";
       const  exposes =  {
            './AuthModal': './src/remote/auth-modal/index.ts',
            './Button': './src/components/Button.tsx',
            './Header': './src/components/Header.tsx',
            './Footer': './src/components/Footer.tsx',
        }

import { federation } from '@module-federation/vite';
import { createEsBuildAdapter } from '@softarc/native-federation-esbuild';
import { reactReplacements } from '@softarc/native-federation-esbuild/src/lib/react-replacements';
export default defineConfig(async ({command}) => {
    return {
        plugins: [react(),

            await federation({
                options: {
                    workspaceRoot: __dirname,
                    outputPath: 'dist',
                    tsConfig: 'tsconfig.json',
                    federationConfig: `module-federation/federation.config.cjs`,
                    verbose: false,
                    dev: command === 'serve',
                },
                adapter: createEsBuildAdapter({ plugins: [], fileReplacements: reactReplacements.dev }),
            }),
            // CreateFederation({
            //     name: 'AuthModal',
            //     filename: 'remoteEntry.js',
            //     exposes,
            //     shared: dependencies
            // })
        ],
        build: {
            modulePreload: false,
            target: "esnext",
            minify: false,
            cssCodeSplit: false,
        },
    }
})
