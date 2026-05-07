# Hawaii Bird Classifier

A web app that classifies Hawaiian birds using TensorFlow.js models running in the browser.

Live site: https://tojoabella.github.io/hawaii-bird-classification/

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer)
- npm (comes with Node.js)

## Installation

Clone the repo and install dependencies:

```
git clone https://github.com/tojoabella/hawaii-bird-classification.git
cd hawaii-bird-classification
npm install
```

## Development

Start the local dev server with hot reload:

```
npm run dev
```

Then open the URL printed in the terminal (usually http://localhost:5173).

## Build

Produce a production build in the `dist/` folder:

```
npm run build
```

Preview the production build locally:

```
npm run preview
```

## Deploy

The site is deployed to GitHub Pages from the `gh-pages` branch.

```
npm run deploy
```

This runs `predeploy` (which builds the site) and then publishes the `dist/` folder to the `gh-pages` branch via the [`gh-pages`](https://www.npmjs.com/package/gh-pages) package.

After the first deploy, make sure GitHub Pages is configured in repo settings:

1. Go to **Settings → Pages**
2. Under **Source**, select **Deploy from a branch**
3. Set **Branch** to `gh-pages` and folder to `/ (root)`
4. Save

Subsequent deploys just need `npm run deploy`.

## Tech Stack

- React 19 + TypeScript
- Vite (build tool)
- Tailwind CSS
- TensorFlow.js (in-browser inference)
- react-dropzone (image upload)
