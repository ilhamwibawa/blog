# AI Coding Agent Instructions

## Project Overview

Personal portfolio and blog built with **Next.js 16 (App Router)**, React 19, TypeScript, and Tailwind CSS v4. Uses **shadcn/ui** components with pnpm as package manager. The site showcases work experience, projects, and blog posts with a focus on clean, maintainable code and modern design patterns.

## Architecture & Structure

- **App Router**: All routes in `app/` directory. Main page is component-based (`Hero`, `WorkExperience`, `Projects`, `BlogPreview`)
- **Blog System**: MDX-based blog posts stored in `content/blog/` directory. Uses `gray-matter` for frontmatter, `next-mdx-remote` for rendering, and `reading-time` for read time calculation
- **Styling**: Tailwind v4 with custom CSS variables in `app/globals.css` using OKLCH color space. Dark mode via manual theme toggle in `theme-toggle.tsx`
- **Components**: shadcn/ui components in `components/ui/`, custom components in `components/` root
- **Path Aliases**: `@/*` maps to project root (see `tsconfig.json`)

## Key Conventions

### Component Patterns

- All interactive components use `"use client"` directive explicitly
- Export component functions directly without default export wrapper pattern (except page components)
- Use semantic HTML and accessibility attributes (`aria-label`, `aria-invalid`)
- Components are self-contained with inline data when appropriate (e.g., `experiences[]`, `projects[]`, `blogPosts`)

### Styling Conventions

- Use `cn()` utility from `@/lib/utils` to merge Tailwind classes with `clsx` and `tailwind-merge`
- Responsive design: mobile-first with `md:` breakpoint for desktop
- Color tokens: `bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`, `bg-accent`, `text-accent-foreground`
- Transitions: add `transition-colors` or `transition-all` for smooth interactions
- Component variants use `class-variance-authority` (see `button.tsx`)

### TypeScript Patterns

- Strict mode enabled
- Define interfaces for data structures inline above component (e.g., `Experience`, `Project`, `BlogPost`)
- Use `Promise<{ slug: string }>` for dynamic route params in Next.js 16 and unwrap with `React.use(params)`
- Suppress known issues with `// @ts-expect-error: <reason>` (see `layout.tsx` CSS import)

### Theme System

- Manual dark mode implementation (not next-themes, despite being in dependencies)
- Theme state in localStorage + system preference detection
- Toggle adds/removes `.dark` class on `document.documentElement`
- CSS custom properties defined in `:root` and `.dark` selector

## Development Workflow

```bash
pnpm dev          # Start dev server at localhost:3000
pnpm build        # Production build
pnpm lint         # Run ESLint (configured with next/core-web-vitals)
```

- **No test framework configured** - tests not set up yet
- **API routes**: `/api/blog` serves blog post metadata from MDX files
- Uses modern ESLint flat config (`eslint.config.mjs`)
- Blog posts are read from filesystem at build time for static generation

## Blog Content Management

Blog posts are **MDX files** stored in `content/blog/` directory:

- Each post is a separate `.mdx` file with frontmatter and MDX content
- Frontmatter includes: `title`, `date`, `excerpt`, `tags`
- Read time is automatically calculated from content
- MDX content is rendered server-side using `next-mdx-remote/rsc`
- Blog listing fetches metadata via API route at `/api/blog`

To add a blog post:

1. Create new `.mdx` file in `content/blog/` directory (e.g., `my-post.mdx`)
2. Add frontmatter at the top:
   ```yaml
   ---
   title: "Your Post Title"
   date: "2024-12-01"
   excerpt: "Brief description of the post"
   tags: ["tag1", "tag2"]
   ---
   ```
3. Write content using standard MDX/Markdown syntax
4. Post will automatically appear in `/blog` listing and be accessible at `/blog/{filename-without-extension}`

## Important Files

- `app/page.tsx` - Main landing page composition
- `app/blog/page.tsx` - Blog listing page with tag filtering
- `app/blog/[slug]/page.tsx` - Blog post detail page using MDX rendering
- `app/api/blog/route.ts` - API route that serves blog post metadata
- `lib/mdx.ts` - Utilities to read and parse MDX files from filesystem
- `content/blog/` - Directory containing all MDX blog posts
- `components/navigation.tsx` - Sticky nav with mobile menu
- `components/work-experience.tsx` - All work history data
- `components.json` - shadcn/ui configuration (style: "new-york")
- `app/globals.css` - Tailwind config + CSS variables for theming
- `next.config.ts` - Next.js config with MDX support enabled

## Adding New Features

### Adding shadcn/ui Components

```bash
npx shadcn@latest add <component-name>
```

Components use "new-york" style variant and install to `components/ui/`

### Adding New Page Sections

1. Create component in `components/`
2. Import and add to `app/page.tsx` in desired order
3. Follow existing pattern: section with `py-16 px-6 md:py-24`, max-w-4xl container
4. Use semantic HTML sections with id for anchor navigation

### Updating Work Experience / Projects

Edit inline arrays in respective component files (`work-experience.tsx`, `projects.tsx`)

## SEO & Performance

- **Comprehensive SEO**: Full metadata implementation with Open Graph, Twitter Cards, and JSON-LD structured data
- **Dynamic sitemap**: Auto-generated at `/sitemap.xml` from blog posts
- **Robots.txt**: Configured at `/robots.ts` for search engine crawlers
- **Theme persistence**: Script in `<head>` applies theme before hydration to prevent flash
- **PWA ready**: Web manifest configured at `/manifest.ts`

## Common Gotchas

- **Next.js 16 params**: Dynamic routes receive `Promise` params - must use `await params` in server components
- **Theme flash fix**: Blocking script in layout head applies theme from localStorage before hydration
- **Tailwind v4**: Uses new PostCSS plugin (`@tailwindcss/postcss`), different from v3 setup
- **MDX rendering**: Uses `next-mdx-remote/rsc` for server-side rendering - components are server components by default
- **Blog API route**: Client-side `/blog` page fetches from `/api/blog` API route, while `/blog/[slug]` is server-rendered
- **SEO metadata**: Auto-generated per page, update URLs in layout.tsx and sitemap.ts to match your domain

## Style Guide

- Use double quotes for JSX attributes, strings
- Use `'` for non-JSX JavaScript strings
- Prefer `const` over `let`
- Use arrow functions for components and handlers
- Keep components focused and single-responsibility
- Extract repeated UI patterns to reusable components
