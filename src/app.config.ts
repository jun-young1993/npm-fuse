import JSONFileManager from "./lib/config";
import * as os from "os";

export const APP_NAME = 'npm-fuse';
export const MODULE_FOLDER_NAME = 'npm-fuse-modules';

export const JsonConfig = new JSONFileManager("./npm-fuse-config.json",{
    defaultJson: {
        "path": `${os.homedir()}/app/source`
    }
});
export const DefaultPackageJson = {
    "name": "noname",
    "version": "1.0.0",
    "engines": {},
    "files": [
        "dist"
    ],
    "module": "dist/mjs/index.js",
    "main": "dist/mjs/index.js",
    "types": "dist/mjs/index.d.ts",
    "exports": {
        ".": {
            "import": "./dist/mjs/index.js",
            "require": "./dist/cjs/index.js"
        }
    },
    "scripts": {
        "build": "rm -fr dist/* && tsc -p tsconfig.json && tsc -p tsconfig-cjs.json"
    },
    "description": "no description",

    "keywords": [],
    "author": {
        "name": "",
        "email": ""
    },
    "license": "",
    "bugs": {
        "url": ""
    },
    "devDependencies": {
        "@types/node": "^20.12.7",
        "typescript": "^5.4.5"
    }
}
export const DefaultReactPackageJson = {
    "name": "juny-react-style",
    "version": "1.1.7",
    "private": false,
    "dependencies": {
      "react": "^18.2.0",
      "react-dom": "^18.2.0",
      "react-scripts": "5.0.1",
    },
    "scripts": {
      "start": "react-scripts start",
      "build": "react-scripts build",
      "test": "jest test --config jest.config.ts",
      "eject": "react-scripts eject",
      "rollup": "rollup -c --bundleConfigAsCjs",
      "rollup:watch": "rollup -cw --bundleConfigAsCjs",
      "storybook": "storybook dev -p 6006",
      "build-storybook": "storybook build",
      "doc": "typedoc --plugin typedoc-plugin-markdown --out docs ./src/component"
    },
    "eslintConfig": {
      "extends": [
        "react-app",
        "react-app/jest",
        "plugin:storybook/recommended"
      ]
    },
    "browserslist": {
      "production": [
        ">0.2%",
        "not dead",
        "not op_mini all"
      ],
      "development": [
        "last 1 chrome version",
        "last 1 firefox version",
        "last 1 safari version"
      ]
    },
    "type": "module",
    "description": "",
    "main": "dist/cjs/index.js",
    "module": "dist/mjs/index.js",
    "types": "dist/mjs/index.d.ts",
    "exports": {
      ".": {
        "import": "./dist/mjs/index.js",
        "require": "./dist/cjs/index.js"
      }
    },
    "devDependencies": {
      "@testing-library/react": "^13.4.0",
      "@testing-library/user-event": "^13.5.0",
      "@types/node": "^16.18.96",
      "@types/react-dom": "^18.2.25",
      "@chromatic-com/storybook": "^1.3.3",
      "@rollup/plugin-commonjs": "^25.0.7",
      "@rollup/plugin-node-resolve": "^15.2.3",
      "@rollup/plugin-terser": "^0.4.4",
      "@rollup/plugin-typescript": "^11.1.6",
      "@storybook/addon-essentials": "^8.0.8",
      "@storybook/addon-interactions": "^8.0.8",
      "@storybook/addon-links": "^8.0.8",
      "@storybook/addon-onboarding": "^8.0.8",
      "@storybook/blocks": "^8.0.8",
      "@storybook/preset-create-react-app": "^8.0.8",
      "@storybook/react": "^8.0.8",
      "@storybook/react-webpack5": "^8.0.8",
      "@storybook/test": "^8.0.8",
      "@testing-library/jest-dom": "^6.4.2",
      "@types/react": "^18.2.79",
      "@types/styled-components": "^5.1.34",
      "eslint-plugin-storybook": "^0.8.0",
      "jest": "^29.7.0",
      "postcss": "^8.4.38",
      "prop-types": "^15.8.1",
      "rollup": "^4.16.0",
      "rollup-plugin-dts": "^6.1.0",
      "rollup-plugin-peer-deps-external": "^2.2.4",
      "rollup-plugin-postcss": "^4.0.2",
      "storybook": "^8.0.8",
      "ts-node": "^10.9.2",
      "typedoc": "^0.25.13",
      "typedoc-plugin-markdown": "^3.17.1",
      "typescript": "^5.0.2",
      "webpack": "^5.91.0"
    },
    "overrides": {
      "typescript": "^5.0.2"
    },
    "repository": {
      "type": "",
      "url": ""
    },
    "keywords": [
      "react",
      "style"
    ],
    "author": "jun-young1993",
    "license": "MIT",
    "bugs": {
      "url": ""
    },
    "homepage": "",
    "files": [
      "dist"
    ]
}
export const DefaultRollUpConfigJs = `
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "postcss";

const packageJson = require("./package.json");

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "es",
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
            terser(),
            postcss()
        ],
        external: ["react", "react-dom"],
    },
    {
        input: "src/index.ts",
        output: [{ file: "dist/mjs/types.d.ts", format: "es" }],
        plugins: [dts.default()],
        external: [/\.css$/]
    },
];
`;
export const DefaultNpmIgnore = `
**/*
!/dist/**
`;
export const DefaultGitIgnore = `
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*
.pnpm-debug.log*

# Diagnostic reports (https://nodejs.org/api/report.html)
report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Directory for instrumented libs generated by jscoverage/JSCover
lib-cov

# Coverage directory used by tools like istanbul
coverage
*.lcov

# nyc test coverage
.nyc_output

# Grunt intermediate storage (https://gruntjs.com/creating-plugins#storing-task-files)
.grunt

# Bower dependency directory (https://bower.io/)
bower_components

# node-waf configuration
.lock-wscript

# Compiled binary addons (https://nodejs.org/api/addons.html)
build/Release

# Dependency directories
node_modules/
jspm_packages/

# Snowpack dependency directory (https://snowpack.dev/)
web_modules/

# TypeScript cache
*.tsbuildinfo

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Optional stylelint cache
.stylelintcache

# Microbundle cache
.rpt2_cache/
.rts2_cache_cjs/
.rts2_cache_es/
.rts2_cache_umd/

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variable files
.env
.env.development.local
.env.test.local
.env.production.local
.env.local

# parcel-bundler cache (https://parceljs.org/)
.cache
.parcel-cache

# Next.js build output
.next
out

# Nuxt.js build / generate output
.nuxt
dist

# Gatsby files
.cache/
# Comment in the public line in if your project uses Gatsby and not Next.js
# https://nextjs.org/blog/next-9-1#public-directory-support
# public

# vuepress build output
.vuepress/dist

# vuepress v2.x temp and cache directory
.temp
.cache

# Docusaurus cache and generated files
.docusaurus

# Serverless directories
.serverless/

# FuseBox cache
.fusebox/

# DynamoDB Local files
.dynamodb/

# TernJS port file
.tern-port

# Stores VSCode versions used for testing VSCode extensions
.vscode-test

# yarn v2
.yarn/cache
.yarn/unplugged
.yarn/build-state.yml
.yarn/install-state.gz
.pnp.*
`;
export const PackageJsonValues = new JSONFileManager(`./temp/package-${new Date().getTime()}.json`,{
    defaultJson: DefaultPackageJson
});
export const PackageReactJsonValues = new JSONFileManager(`./temp/package-react-${new Date().getTime()}.json`,{
    defaultJson: DefaultReactPackageJson
})
export const Tsconfig = {
    "extends": "./tsconfig-base.json",
    "compilerOptions": {
        "module": "esnext",
        "outDir": "dist/mjs",
        "target": "esnext"
    }
};
export const TsconfigJsonValue = new JSONFileManager(`./temp/tsconfig-${new Date().getTime()}.json`,{
    defaultJson: Tsconfig
});
export const TsconfigBase  = {
    "compilerOptions": {
        "target": "ES5",
        "allowJs": true,
        "allowSyntheticDefaultImports": true,
        "baseUrl": "src",
        "declaration": true,
        "esModuleInterop": true,
        "inlineSourceMap": false,
        "listEmittedFiles": false,
        "listFiles": false,
        "moduleResolution": "node",
        "noFallthroughCasesInSwitch": true,
        "pretty": true,
        "resolveJsonModule": true,
        "rootDir": "src",
        "skipLibCheck": true,
        "strict": true,
        "traceResolution": false,
        "jsx": "react-jsx"
    },
    "compileOnSave": false,
    "exclude": ["node_modules", "dist"],
    "include": ["src"]
}
export const TsconfigBaseJsonValue = new JSONFileManager(`./temp/tsconfig-base-${new Date().getTime()}.json`,{
    defaultJson: TsconfigBase
});
export const TsconfigCjs = {
    "extends": "./tsconfig-base.json",
    "compilerOptions": {
        "module": "commonjs",
        "outDir": "dist/cjs",
        "target": "es2015"
    }
};
export const TsconfigCjsJsonValue = new JSONFileManager(`./temp/tsconfig-cjs-${new Date().getTime()}.json`,{
    defaultJson: TsconfigCjs
});

