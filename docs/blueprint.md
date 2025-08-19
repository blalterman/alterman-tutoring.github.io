# **App Name**: Alterman Tutoring

## Core Features:

- Hero Section: Display a hero section with the tutoring service's name and value proposition, read from `site.json`.
- Service Highlights: Showcase key service facts (grade levels, service areas, style description) via card components. Render subject lists from `subjects.json` on the Services page.
- Dynamic Content Rendering: Display testimonials fetched from `testimonials.json`, with fallback message if empty. Lay out general copy and professional notes from `about.json` on the About page.
- Call to Action: Primary CTA links to email based on `site.json` contents.
- Data-Driven Content: Load all copy from JSON data in `/public/data`, including descriptive placeholders.
- Static Site Generation: Generate a static site using Next.js 14+ with the App Router and `output: 'export'` configuration. Include necessary config files and a 404 page.
- GitHub Pages Deployment: Provide a deployment workflow using `.github/workflows/deploy.yml` to build and publish the site to GitHub Pages.

## Style Guidelines:

- Primary color: Warm yellow (#F7E79A) for a welcoming and friendly feel, reflecting the personalized tutoring experience.
- Background color: Very light, desaturated yellow (#F2F0EA). It provides a soft, non-jarring backdrop for text.
- Accent color: Pale orange (#F0AC6B). Use it to draw the user's attention to important areas of the site and energize CTAs.
- Headline font: 'Playfair', a modern sans-serif for headings; elegant, high-end feel. Body font: 'PT Sans' a modern humanist sans-serif suitable for comfortable reading.
- Use simple, clear icons to represent subjects and levels, with an emphasis on readability and ease of understanding.
- Implement a clean and organized layout with generous spacing to enhance readability and accessibility, using Tailwind CSS for styling.
- Subtle animations and transitions on interactive elements like buttons to enhance user engagement without being distracting.