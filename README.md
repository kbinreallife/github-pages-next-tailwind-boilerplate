# Next.js Tailwind CSS Boilerplate

This is a boilerplate project I made for facilitating the creation Next.js applications with Tailwind CSS styling and deployment to GitHub Pages. 3 steps and you're ready to edit a website.

## Getting Started

To get started, clone this repository:

```bash
git clone https://github.com/kbinreallife/github-pages-next-tailwind-boilerplate.git
```

Open your project in vscode
```bash
code .
```
> At this point, you can rename the project to your github username `username.github.io`

Navigate to the project directory

```bash
cd username.github.io
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

2. Update the `publish_dir` field in the `/.github/workflows/deploy.yml` file.

```js
publish_dir: your-username/your-username.github.io
```

3. Build your project:

```bash
pnpm build
```

4. Deploy your project to GitHub Pages:

```bash
pnpm deploy
```
