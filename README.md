# 🌟 CS Custom Loader - By Code Synth  
**Developed by [Dharaneesh Boobalan](https://dharaneesh.codesynth.xyz)**

A beautifully crafted set of **10+ customizable, animated React loaders** built with **TailwindCSS** — includes smooth **3D-like effects**, ultra-lightweight design, and full TypeScript support. Ideal for all modern React 18/19 projects.

![npm](https://img.shields.io/npm/v/cs-custom-loader.svg)
![license](https://img.shields.io/npm/l/cs-custom-loader.svg)
![downloads](https://img.shields.io/npm/dt/cs-custom-loader.svg)
![react](https://img.shields.io/badge/React-18%2B-blue)

---

## ✨ Features

- 🎨 10+ modern loaders (spinners, dots, bars, morphs, orbits, etc.)
- ⚡️ Super lightweight and blazing fast
- 🎯 Built with TailwindCSS — no extra styles needed
- 🧩 Fully customizable via props
- 🔁 CommonJS & ESM module support
- ✅ 100% TypeScript-ready with auto-complete & typings
- 🧪 Easy to test in local dev (Vite + React)

---

## 📦 Installation

Install the package using **npm**:
```sh
npm install cs-custom-loader
```

Or using **yarn**:
```sh
yarn add cs-custom-loader
```

Or using **pnpm**:
```sh
pnpm add cs-custom-loader
```

## 🚀 Usage Example

src\App.tsx
```tsx
import React from 'react';
import { Spinner_Circle } from 'cs-custom-loader';

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Spinner_Circle size={50} color="blue" />
    </div>
  );
};

export default App;
```

--- 

## ⚖️ License

ISC License

Copyright (c) 2025 Dharaneesh Boobalan

---

## 📬 Support

If you encounter any issues, feel free to [open an issue](https://github.com/Dharaneesh/cs-custom-loader/issues) or contact me at **dharaneesh@codesynth.xyz**.