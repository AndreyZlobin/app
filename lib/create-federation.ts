import federation, {VitePluginFederationOptions} from "@originjs/vite-plugin-federation";
// import federation, {VitePluginFederationOptions} from "vite-plugin-federation-fix";
import {Plugin} from "vite";
import {writeFileSync} from 'fs';
import {resolve} from 'path';

const createManifest = (content: string) => {
    writeFileSync(resolve(process.cwd(), 'federation-manifest.json'), content);
}

export const CreateFederation = (options: VitePluginFederationOptions): Plugin => {
    const originFederationPlugin =  federation(options)
    const manifest = {
        [options.name]: `{remote}/${options.filename}`
    }
    return {
        name: 'federation-plugin',
        ...originFederationPlugin,
        buildEnd(){
            createManifest(JSON.stringify(manifest, null, 2))
        }
    };
}