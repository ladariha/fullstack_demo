# Live coding 1

- https://yarnpkg.com/package?q=webpack&name=webpack
- https://www.npmjs.com/package/whatwg-fetch
- Vytvorit projekt, pridat dependency, pridat devDeps, pustit skript
Debugovani

```
 yarn licenses list
```

# Live coding 2
- git
- Integrace v IDE
- Lepsi gitlog
# Live coding 3
- Rebase vs merge
- Interactive rebase
- Ukazka GitHub

# Live coding 4
- pridani eslintu
```
npm init -y
npm init @eslint/config@latest
npm install -D @stylistic/eslint-plugin

```


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

# Live coding 4
```
npm install --save-dev husky
npx husky init

```
