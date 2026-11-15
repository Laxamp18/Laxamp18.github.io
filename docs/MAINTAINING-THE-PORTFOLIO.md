# Maintaining the portfolio

## Edit profile and learning content

Update `data/portfolio.ts`. Keep the biography factual and update learning labels only when your current practice supports the change.

## Add a project

Add a record to the `projects` array. Include:
- Accurate title and concise summary
- Category: `AI-assisted experiment` or `Independent project`
- Status: Experiment, In progress, Completed or Archived
- Technologies actually used
- Your specific contribution
- Verified GitHub and live-demo URLs, when available

Do not publish placeholder links, invented outcomes, or work you cannot explain.

## Add an Engineering Log entry

Start from `content/engineering-log-template.md`. Keep dates accurate. Include a contribution note explaining whether AI was used and how.

The current site reads its published log index from `engineeringLog` in `data/portfolio.ts`. Add an entry there after its public page has been created and committed.

## Update the Knowledge Map

Edit `interests` in `data/portfolio.ts`. Each topic has a stable ID, status, short label, description and connected concepts. The current map uses these IDs to position nodes; if you add a new topic, update the node layout in `app/page.tsx` and its styles in `app/globals.css`.

## Local checks

```bash
npm ci
npm run build
```

## Publish

Changes pushed to `main` trigger the existing GitHub Pages deployment workflow. The `portfolio-redesign` branch has a separate build-check workflow and does not deploy.
