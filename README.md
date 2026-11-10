# SadServe: a design preview

> **This is not the original SadServers site, and it is not the original code.**
> It is an independent, unofficial design exercise: my own take on how a Linux / DevOps
> practice and technical-assessment platform could look and feel.

The structure and copy are based on the publicly visible layout and content of the existing
site. Everything else, including the visual design, layout, components, animations and the
interactive session replay, is my own design choices and code. It is a preview of how I would
approach the design, not a replacement, fork or official product.

- No real backend: scenarios, sign-in, checkout, gifts and the session replay are static or
  simulated.
- Not affiliated with or endorsed by the original service or its owners.
- Names, copy and external links belong to their respective owners. The name is shown as
  "SadServe" here only to keep this preview distinct from the original.

## What's in the design

- Clean light interface with a single blue accent, Geist type, soft shadows and subtle motion.
- A scrubbable **session replay** on the home page (terminal, timeline and auto-graded scorecard).
- A balanced story for both learners and hiring teams.
- Shared inner pages: scenarios, labs, troubleshooting, pricing, gifts, ranking, FAQ, about, blog,
  business and individual solutions, login and sign-up.

## Run it

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Built with [Next.js](https://nextjs.org), React, Tailwind CSS and lucide-react.
