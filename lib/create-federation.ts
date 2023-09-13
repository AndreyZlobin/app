import federation, {VitePluginFederationOptions} from "@originjs/vite-plugin-federation";
// import federation, {VitePluginFederationOptions} from "vite-plugin-federation-fix";
import {Plugin} from "vite";
// @ts-ignore
import {writeFileSync} from 'fs';
// @ts-ignore
import {resolve} from 'path';

const createManifest = (content: string) => {
// @ts-ignore
    writeFileSync(resolve(process.cwd(), 'federation-manifest.json'), content);
}

export const CreateFederation = (options: VitePluginFederationOptions): Plugin => {
    const originFederationPlugin =  federation(options)
    const manifest = {
// @ts-ignore
        [options.name]: `{remote}/${options.filename}`
    }
    return {
// @ts-ignore
        name: 'federation-plugin',
        ...originFederationPlugin,
        buildEnd(){
            createManifest(JSON.stringify(manifest, null, 2))
        }
    };
}