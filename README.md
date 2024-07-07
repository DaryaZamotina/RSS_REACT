# React + TS + Vite class-components task

Please use the following scripts

"scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "prettier --check .",
    "preview": "vite preview",
    "format:fix": "prettier --write 'src/**/*.{js,jsx,ts,tsx,css,json}' --config ./.prettierrc",
    "lint-fix": "eslint ./ --ignore-path .gitignore --fix",
    "prettier": "npx prettier 'src/**/*.{js,ts,mjs,cjs,json,tsx}' --check",
    "prepare": "husky",
    "lint-staged": "prettier --write --ignore-unknown"
}