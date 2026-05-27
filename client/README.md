# Developer Portfolio

React and Vite portfolio deployed with GitHub Pages.

## Local Setup

Create `client/.env`:

```env
VITE_BASE=/Developer_Portfolio/
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
```

Install and run:

```bash
npm install
npm run dev
```

## Deploy

GitHub Actions builds the `client` app and deploys `client/dist` to GitHub Pages.

Add this repository secret before deploying:

```text
VITE_WEB3FORMS_ACCESS_KEY
```
