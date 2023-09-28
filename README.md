<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>mario-rl
</h1>
<h3>◦ Developed with the software and tools listed below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/esbuild-FFCF00.svg?style&logo=esbuild&logoColor=black" alt="esbuild" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/Prettier-F7B93E.svg?style&logo=Prettier&logoColor=black" alt="Prettier" />
<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style&logo=HTML5&logoColor=white" alt="HTML5" />
<img src="https://img.shields.io/badge/Sass-CC6699.svg?style&logo=Sass&logoColor=white" alt="Sass" />
<img src="https://img.shields.io/badge/Vite-646CFF.svg?style&logo=Vite&logoColor=white" alt="Vite" />
<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style&logo=Axios&logoColor=white" alt="Axios" />

<img src="https://img.shields.io/badge/Vue.js-4FC08D.svg?style&logo=vuedotjs&logoColor=white" alt="Vue.js" />
<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style&logo=ESLint&logoColor=white" alt="ESLint" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style&logo=JSON&logoColor=white" alt="JSON" />
<img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"/>

</p>
<img src="https://img.shields.io/github/languages/top/TheCreeep/mario-rl?style&color=5D6D7E" alt="GitHub top language" />
<img src="https://img.shields.io/github/languages/code-size/TheCreeep/mario-rl?style&color=5D6D7E" alt="GitHub code size in bytes" />
<img src="https://img.shields.io/github/commit-activity/m/TheCreeep/mario-rl?style&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/license/TheCreeep/mario-rl?style&color=5D6D7E" alt="GitHub license" />
</div>

---

## 📒 Table of Contents
- [📒 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [⚙️ Features](#️-features)
- [🧩 Modules](#-modules)
- [🚀 Getting Started](#-getting-started)
  - [✔️ Prerequisites](#️-prerequisites)
  - [📦 Installation](#-installation)
  - [🎮 Using mario-rl](#-using-mario-rl)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)

---


## 📍 Overview

Final Project for my 3WA AI Developer Diploma, this Mario Reinforcement Learning webapp 
idea comes from my love for video games, greatly inspired from Nicholas Renotte and also CodeBullet's videos.

The goal is to create a webapp that allows the user to train a Reinforcement Learning model to play Super Mario Bros.
The user can then choose which model he's going to use and watch it play the game.
Algorythm used in this training is PPO (Proximal Policy Optimization) and the model is trained using the OpenAI Gym environment.

The webapp is built using Vue.js and Vite, and the model is trained using Python and Tensorflow.

Hope you like it !

---

## ⚙️ Features

- Training a Reinforcement Learning model to play Super Mario Bros.
- Choosing which model to use to play the game
- Watching the model play the game
- Changing the settings of the training


---

## 🧩 Modules

<details closed><summary>Root</summary>

| File                                                                                         | Summary                   |
| ---                                                                                          | ---                       |
| [.eslintrc.cjs](https://github.com/TheCreeep/mario-rl/blob/main/.eslintrc.cjs)               | HTTPStatus Exception: 429 |
| [index.html](https://github.com/TheCreeep/mario-rl/blob/main/index.html)                     | HTTPStatus Exception: 429 |
| [vite.config.js](https://github.com/TheCreeep/mario-rl/blob/main/vite.config.js)             | HTTPStatus Exception: 429 |
| [App.vue](https://github.com/TheCreeep/mario-rl/blob/main/src\App.vue)                       | HTTPStatus Exception: 429 |
| [main.js](https://github.com/TheCreeep/mario-rl/blob/main/src\main.js)                       | HTTPStatus Exception: 429 |
| [index.js](https://github.com/TheCreeep/mario-rl/blob/main/src\router\index.js)              | HTTPStatus Exception: 429 |
| [models.js](https://github.com/TheCreeep/mario-rl/blob/main/src\stores\models.js)            | HTTPStatus Exception: 429 |
| [settings.js](https://github.com/TheCreeep/mario-rl/blob/main/src\stores\settings.js)        | HTTPStatus Exception: 429 |
| [DataView.vue](https://github.com/TheCreeep/mario-rl/blob/main/src\views\DataView.vue)       | HTTPStatus Exception: 429 |
| [ModelSelect.vue](https://github.com/TheCreeep/mario-rl/blob/main/src\views\ModelSelect.vue) | HTTPStatus Exception: 429 |
| [Settings.vue](https://github.com/TheCreeep/mario-rl/blob/main/src\views\Settings.vue)       | HTTPStatus Exception: 429 |
| [Training.vue](https://github.com/TheCreeep/mario-rl/blob/main/src\views\Training.vue)       | HTTPStatus Exception: 429 |

</details>

---

## 🚀 Getting Started

### ✔️ Prerequisites

Before you begin, ensure that you have the following prerequisites installed:
> - `ℹ️ PostgreSQL`
> - `ℹ️ Python and Pip`
> - `ℹ️ Node.js and NPM or Yarn`

### 📦 Installation

1. Clone the mario-rl repository:
```sh
git clone https://github.com/TheCreeep/mario-rl
```

2. Change to the project directory:
```sh
cd mario-rl
```

3. Install the dependencies:
```sh
npm install
```

### 🎮 Using mario-rl

```sh
npm run start
```

---



---

## 🤝 Contributing

Contributions are always welcome! Please follow these steps:
1. Fork the project repository. This creates a copy of the project on your account that you can modify without affecting the original project.
2. Clone the forked repository to your local machine using a Git client like Git or GitHub Desktop.
3. Create a new branch with a descriptive name (e.g., `new-feature-branch` or `bugfix-issue-123`).
```sh
git checkout -b new-feature-branch
```
4. Make changes to the project's codebase.
5. Commit your changes to your local branch with a clear commit message that explains the changes you've made.
```sh
git commit -m 'Implemented new feature.'
```
6. Push your changes to your forked repository on GitHub using the following command
```sh
git push origin new-feature-branch
```
7. Create a new pull request to the original project repository. In the pull request, describe the changes you've made and why they're necessary.
The project maintainers will review your changes and provide feedback or merge them into the main branch.

---

## 👏 Acknowledgments

> - ℹ️  [Thanks to dhruvramani for this, it saved me](https://github.com/dhruvramani/gym-render-browser)

---
