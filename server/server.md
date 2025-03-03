 
# Setup
- ve "starter" projektu vytvoř složku `server`, v této složce zavolej následující příkazy a (volitelně) použij doporučené nastavení TS a ESlint
- Eslint volby:
  - vyber `To check syntax and find problems`, Enter
  - vyber `JavaScript modules (import/export)`, Enter
  - u frameworku vyber `React`, Enter
  - vyber `Yes` u `Does your project use TypeScript`, Enter
  - vyber `Node` i `Browser` (pomocí mezerníku) u `Where does your code run`, Enter
  - vyber `Yes`, Enter
  - vyber `NPM`, Enter

```shell
# ve slozce server
npm init -y
npm init @eslint/config@latest
npm install -D @stylistic/eslint-plugin
npm install express@5.0.0
npm install -D typescript @types/express@5.0.0 @types/node
npx tsc --init
npm install -D nodemon ts-node concurrently

```

### tsconfig.json
```json
{
 "compilerOptions": {
   "target": "es2016",
   "module": "commonjs",
   "resolveJsonModule": true,
   "outDir": "./dist",
   "removeComments": true,
   "esModuleInterop": true,
   "forceConsistentCasingInFileNames": true,
   "strict": true,
   "noImplicitAny": true,
   "useUnknownInCatchVariables": false,
   "alwaysStrict": true,
   "noUnusedLocals": true,
   "noUnusedParameters": true,
   "skipLibCheck": true
 }
}

```

### eslint.config.mjs
```js
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import stylistic from "@stylistic/eslint-plugin";


export default [
 { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
 { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
 pluginJs.configs.recommended,
 ...tseslint.configs.recommended,
 pluginReact.configs.flat.recommended,
 stylistic.configs.customize({
   indent: 2,
   quotes: "single",
   semi: true,
   jsx: true,
   arrowParens: true,
   quoteProps: "as-needed",
   commaDangle: "always-multiline",
 }),
];
```

### package.json
```js
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "build": "tsc -p .",
    "start": "node dist/index.js",
    "dev": "nodemon src/index.ts"
  },
```

### index.ts
- vytvoř adresář `src` a v něm soubor `index.ts` , to je hlavní soubor projektu
