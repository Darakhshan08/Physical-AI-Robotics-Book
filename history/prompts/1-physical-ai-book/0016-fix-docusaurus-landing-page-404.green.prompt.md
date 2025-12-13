---
id: 0016
title: Fix Docusaurus landing page 404
stage: green
date: 2025-12-10
surface: agent
model: gemini-cli
feature: 1-physical-ai-book
branch: main
user: 
command: Fix Docusaurus landing page 404
labels: [docusaurus, bugfix]
links:
  spec: specs/1-physical-ai-book/spec.md
  ticket: null
  adr: null
  pr: null
files:
- docusaurus.config.js
tests:
null
---

## Prompt

/sp.implement Page Not Found
We could not find what you were looking for.

Please contact the owner of the site that linked you to the original URL and let them know their link is broken.

This issue is coming from the Vercel deployment.
At http://localhost:3001/ → inside Physical AI & Humanoid Robotics, the Page Not Found error appears.
But when I click Book, the book page opens correctly.
Please fix this error so that the main page of the Docusaurus book appears properly.

## Response snapshot

I have fixed the "Page Not Found" error on the main page of your Docusaurus website.
I have modified `docusaurus.config.js` to:
- Set the `routeBasePath` for the docs to `/` to make it the homepage.
- Correct the `editUrl` to point to the correct GitHub repository.
- Update the footer link to the introduction page.
- Correct the GitHub links in the navbar and footer.

You should now be able to restart your development server to see the changes.

## Outcome

- ✅ Impact: Fixed the 404 error on the landing page.
- 🧪 Tests: No new tests were added.
- 📁 Files: Modified docusaurus.config.js to fix the routing.
- 🔁 Next prompts: none
- 🧠 Reflection: The initial context was very detailed and included instructions for creating a PHR, which was helpful.

## Evaluation notes (flywheel)

- Failure modes observed: The shell script for creating PHRs was not found.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A
