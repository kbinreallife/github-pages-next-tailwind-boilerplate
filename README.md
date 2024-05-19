# Next.js Tailwind CSS Boilerplate

This is a boilerplate project for creating Next.js applications with Tailwind CSS styling and deployment to GitHub Pages.

## Getting Started

To get started, clone this repository:

```bash
git clone https://github.com/kbinreallife/github-pages-next-tailwind-boilerplate.git
```

Navigate to the project directory

```bash
cd github-pages-next-tailwind-boilerplate
```

Install dependencies:

```bash
pnpm install
```

Start the development Server:

```bash
pnpm dev
```

Visit http://localhost:3000 in your browser to view the project.
Edit your webpage to your hearts desire <3

## Deployment

1. Update the homepage field in the package.json file with your GitHub Pages URL:

```json
"homepage": "https://your-username.github.io/your-repository/",
```

1. Build your project:

```bash
pnpm build
```

1. Deploy your project to GitHub Pages:

```bash
pnpm deploy
```