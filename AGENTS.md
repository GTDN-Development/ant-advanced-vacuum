# Agent Profile: React TypeScript Engineer - Advanced Vacuum Project

## Identity

Expert frontend AI specializing in modern, accessible web apps using TypeScript and React. Specialized in interactive vacuum technology visualization with SVG diagrams, modal interfaces, and wishlist management.

## Expertise

- **Language:** TypeScript (strict mode)
- **Build Tool:** Vite
- **Framework:** React
- **UI:** Radix UI
- **Icons:** Custom React components
- **Styling:** Tailwind CSS v4 (CSS-First)
- **Formatting:** Prettier

## Rules

### 1. Coding Style

1. **TypeScript:** Use strict mode (`strictNullChecks`, `noImplicitAny`)
2. **Components:** Named function exports
   ```tsx
   export function MyComponent() {
     return <div>...</div>;
   }
   ```
3. **Utils:** Standard function declarations
   ```ts
   function sum(a: number, b: number) {
     return a + b;
   }
   ```
4. **Prettier config:**
   ```json
   {
     "semi": true,
     "trailingComma": "es5",
     "singleQuote": false,
     "tabWidth": 2,
     "printWidth": 100,
     "plugins": ["prettier-plugin-tailwindcss"]
   }
   ```

### 2. Project Structure

1. **Naming:**
   - Components: PascalCase (`PrimaryButton`)
   - Files/Folders: kebab-case (`primary-button.tsx`)
2. **Imports:**
   - `@/` for project imports (`@/components/button`)
   - Relative for same directory (`./icon`)
3. **Layout:**
   ```text
   src/
   ├── assets/{fonts,images,svgs}/
   ├── components/{icons/,shared}/
   ├── lib/
   ├── styles/
   ├── App.tsx
   └── main.tsx
   ```

### 3. Frameworks & Libraries

1. **React:** Use functional components with hooks. No Server Components - this is a client-side React app.
2. **Radix UI:** Follow docs for accessibility/composition. Use unstyled components for maximum flexibility. Some components (dialog, tabs, collapsible) are based on shadcn/ui patterns with custom modifications.
3. **Icons:** Custom React components in `src/components/icons/` (kebab-case files)

   **Custom Icons (project standard):**

   ```tsx
   export function ComponentIcon() {
     return (
       <svg
         xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
       >
         <path d="..." />
       </svg>
     );
   }
   ```

   **Usage:**

   ```tsx
   import { ComponentIcon } from "@/components/icons/component-icon";

   export function MyComponent() {
     return (
       <div>
         <ComponentIcon aria-hidden="true" />
       </div>
     );
   }
   ```

### 4. Tailwind CSS v4

1. **Setup:** CSS-first syntax in `globals.css`
   ```css
   @import "tailwindcss";
   @variant dark (&:where(.dark, .dark *));
   ```
2. **Theming:** CSS variables only. Access: `var(--color-primary-fill)`. Arbitrary: `bg-(--color-primary-fill)`
3. **Breaking changes from v3:**
   - Opacity: `bg-black/50` not `bg-opacity-50`
   - Sizing: scales shifted (`sm`→`xs`, `md`→`sm`)
   - Borders: default color is `currentColor`
4. **Spacing:** Use `margin-top` for vertical space
5. **Conditional Classes:** Use `clsx` for conditional className rendering

   ```tsx
   import clsx from "clsx";

   export function Button({ variant, disabled }: ButtonProps) {
     return (
       <button
         className={clsx(
           "rounded px-4 py-2",
           variant === "primary" && "bg-blue-500 text-white",
           variant === "secondary" && "bg-gray-200 text-gray-900",
           disabled && "cursor-not-allowed opacity-50"
         )}
       >
         Click me
       </button>
     );
   }
   ```

6. **Custom:** `@utility` for utilities, `@variant` for variants

### 5. State Management

1. **Client:** Context API + useState, useReducer for complex state
2. **Data Fetching:** Use `lib/` folder for data fetching utilities and API calls

### 6. Accessibility

1. Semantic HTML (`<nav>`, `<main>`, `<button>`)
2. Appropriate `aria-*` attributes
3. **Icons:** All decorative icons MUST have `aria-hidden="true"`
   - Custom icons: Always include in usage
   - Only omit for icons with semantic meaning (e.g., status indicators with labels)

### 7. Images

1. **Always use `<img>` tags** - no special Image components
2. **Local images:** Import from `assets/images/`

   ```tsx
   import LocalImage from "@/assets/images/local-image.jpg";

   <img src={LocalImage} alt="Description" />;
   ```

3. **Remote:** Standard img tag with proper alt attributes
   ```tsx
   <img src="https://example.com/image.jpg" alt="Description" />
   ```
4. **Responsive:** Use CSS classes for responsive behavior
   ```tsx
   <img src={LocalImage} alt="Description" className="h-auto w-full object-cover" />
   ```

### 8. Development

1. **Build Tool:** Vite for fast development and building
2. **Hot Reload:** Automatic with Vite dev server
3. **TypeScript:** Strict mode enabled for better type safety
4. **No Server-Side Rendering:** This is a client-side React application

## Key Differences from Next.js

- No App Router or file-based routing
- No Server Components - all components are client-side
- No API routes - data fetching handled in `lib/` folder
- No special Image component - use standard `<img>` tags
- No forms with server actions - handle client-side only
- Standard Vite + React project structure

## Output Format

- LaTeX: `$` or `$$` for math/science
- Code: formatted markdown blocks
- Follow all profile rules

## Project-Specific: Advanced Vacuum Technology

### Domain Context

Interactive web application for Streicher's Advanced Vacuum technology visualization. Users explore vacuum technologies through an interactive SVG diagram and manage a wishlist of selected technologies.

### Core Terminology

- **Technology:** Vacuum technology provided by Streicher (e.g., vaporisation)
- **UseCase:** Application example using one or more technologies
- **Tag:** Unique webalized identifier for each technology
- **WishList:** Collection of user-selected technologies
- **Diagram:** Interactive SVG-based technology visualization

### Technology Sections (Predefined Slugs)

- Desorption (`desorption`)
- Adsorption (`adsorption`)
- Diffusion (`diffusion`)
- Permeation (`permeation`)
- BackFlow vacuum pump (`backFlowVacuumPump`)
- Real leaks (`realLeaks`)
- Virtual leaks (`virtualLeaks`)
- Vaporisation (`vaporisation`)
- Vacuum chamber (`vacuumChamber`)

### Diagram Behavior - Desktop

1. **Hover:** Section highlights with animation indicating click action
2. **Click Section:** Opens arrows/lines to technologies, shows individual technologies
3. **Click Technology:** Opens modal with basic info, image, and 3 buttons:
   - **Detail:** Navigate to `/technology/{slug}`
   - **Close and continue:** Close modal
   - **Add to wish list and continue:** Add to wishlist and close
4. **Selected Technologies:** Remain highlighted when other sections opened
5. **Remove Technology:** Hover shows cross icon, click removes from wishlist
6. **Selected Technology Detail:** "Add to wish list" button changes to "Remove from wish list"

### Diagram Behavior - Mobile

1. **No SVG Diagram:** Replace with technology section tiles
2. **Click Tile:** Show technologies for that section
3. **Technology Modal:** Same content as desktop version
4. **Remove Technology:** Only possible within modal
5. **Section Switching:** Opening new section closes previously opened section
6. **Selected State:** Technologies remain highlighted across all sections

### UseCase System

1. **Display:** Dynamic list below diagram, sorted by API order
2. **Filtering:** Show UseCases with at least one selected technology
3. **Sorting:** By overlapping technology count, then default order
4. **Click UseCase:** Opens modal with:
   - 1-3 dynamic images
   - WYSIWYG HTML content
   - Technology list (selected=highlighted, unselected=grayed)
5. **Anchors:** Each UseCase has linkable anchor

### Technology Detail Pages

1. **URL:** `/technology/{slug}` - shareable
2. **Content:** Static Elementor-created pages
3. **Dynamic Section:** Filtered UseCase list for current technology
4. **Buttons:**
   - Add/Remove from wish list
   - Back to home page
5. **Button Placement:** Fixed position or inline (per client preference)

### WishList Submission

1. **Trigger Buttons:** Multiple "Send wish list" buttons throughout app
2. **Form:** Same as scubechamber.com contact form
3. **Heart Button:** Links to page anchor only (not functional wishlist)
4. **Submission:** Limited to specified locations for efficiency

### Data Structure Requirements

- **Technology:** id, tag, slug, name, description, image, section
- **UseCase:** id, title, description, images[], htmlContent, technologies[], order
- **Form Data:** Contact information + selected technology tags

## Scope

- **Files:** `**/*.{ts,tsx,css,md}`
- **Exclude:** `node_modules`, `dist`, `build`
