import * as esbuild from "esbuild-wasm";
import axios from "axios";
import localforage from "localforage";

const localCache = localforage.createInstance({
  name: "filecache",
});

export const unpkgPathPlugin = () => {
  return {
    name: "unpkg-path-plugin",
    setup(build: esbuild.PluginBuild) {
      build.onResolve({ filter: /.*/ }, async (args: any) => {
        console.log("onResolve", args);
        if (args.path === "index.js") {
          return { path: args.path, namespace: "a" };
        }

        if (args.path.includes("./" || "../")) {
          return {
            path: new URL(args.path, `https://unpkg.com${args.resolveDir}/`)
              .href,
            namespace: "a",
          };
        }

        return {
          path: `https://unpkg.com/${args.path}`,
          namespace: "a",
        };
      });

      build.onLoad({ filter: /.*/ }, async (args: any) => {
        console.log("onLoad", args);

        if (args.path === "index.js") {
          return {
            loader: "jsx",
            contents: `
              const message = require('react-dom');
              console.log(message);
            `,
          };
        }

        const cachedResult = await localCache.getItem<esbuild.OnLoadResult>(
          args.path
        );

        if (cachedResult) {
          return cachedResult;
        }

        const { data, request } = await axios.get(args.path);
        const result: esbuild.OnLoadResult = {
          loader: "jsx",
          contents: data,
          resolveDir: new URL("./", request.responseURL).pathname,
        };
        await localCache.setItem(args.path, result);
        return result;
      });
    },
  };
};
