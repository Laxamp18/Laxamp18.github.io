# Laxam Poudel — Engineering Portfolio

An evolving personal portfolio and engineering notebook built with Next.js, React and TypeScript.

## Run locally

- Node.js 20.9+
- npm

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

The project uses Next.js static export for GitHub Pages. The generated site is written to `out/`.

## Updating portfolio content

Most content is maintained in `data/portfolio.ts`:

- Profile introduction and story
- Engineering Knowledge Map topics
- Learning foundations and statuses
- Confirmed timeline milestones
- Project index
- Engineering Log index

Only add projects when their status, technologies, contribution and links are accurate. AI-assisted experiments and independently developed projects should be labelled separately. Do not add estimated skill percentages or unverified achievements.

Engineering Log entries can be authored as Markdown/MDX and added to the log index when the publishing workflow is introduced.

## Deployment

The existing GitHub Actions workflow in `.github/workflows/deploy.yml` builds the static export and deploys it to GitHub Pages. The existing `CNAME` file is retained for the custom domain.

The contact form is not yet connected to a private form endpoint. The site intentionally does not publish an email address or display a non-functional form.
