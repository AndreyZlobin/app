import { defineConfig, Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import federation, {VitePluginFederationOptions} from "@originjs/vite-plugin-federation";
import {dependencies} from './package.json'
//
       const  exposes =  {
            './AuthModal': './src/remote/auth-modal/index.ts',
            './Button': './src/components/Button.tsx',
            './Header': './src/components/Header.tsx',
            './Footer': './src/components/Footer.tsx',
        }

        const CreateFederation = (options: VitePluginFederationOptions): Plugin => {
            const fed =  federation(options)
            console.log(fed)
            const manifest = {
                [options.name]: `{remote}/${options.filename}`
            }
            console.log(manifest)
            return {
                name: 'auto-exposes-plugin',
                ...fed,
                buildEnd(){
                    const manifest = {
                    [options.name]: `{remote}/${options.filename}`
                }
                    console.log(manifest)
                }
            };
        }
export default defineConfig({
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
})
