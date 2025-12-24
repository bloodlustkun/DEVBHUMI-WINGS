# DevBhumi

**Copyright  2025 metasyndikate. All rights reserved.**

A modern travel booking platform built with React, TypeScript, and Vite.

## Features

-  Modern React 18 with TypeScript
-  Tailwind CSS v4 for styling
-  Radix UI components for accessibility
-  Motion animations for smooth interactions
-  Fully responsive design
-  Contact form integration
-  Vite for blazing fast builds
-  Production-ready with Vercel optimization

## Project Structure

```
devbhumi-final/
 src/
    app/
       components/      # React components
          ui/          # Reusable UI components
          figma/       # Image components
       App.tsx          # Main app component
    assets/              # Static assets
    styles/              # CSS files
    main.tsx             # Entry point
 dist/                    # Build output
 package.json
 vite.config.ts
 tsconfig.json
 tailwind.config.js
 vercel.json              # Vercel configuration
 index.html
```

## Getting Started

### Prerequisites

- Node.js 18+ or higher
- npm, yarn, or pnpm package manager

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

Build the application for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Deployment to Vercel

### Method 1: Vercel Dashboard (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [Vercel Dashboard](https://vercel.com)
3. Click "Add New Project"
4. Import your Git repository
5. Vercel will automatically:
   - Detect Vite configuration
   - Set build command: `npm run build`
   - Set output directory: `dist`
   - Deploy your application

### Method 2: Vercel CLI

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. For production deployment:
```bash
vercel --prod
```

### Vercel Configuration

The project includes a `vercel.json` file that ensures proper routing for the single-page application:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

This ensures all routes are handled by React Router.

## Environment Variables

If you need to add environment variables:

1. Create `.env.local` file in the root directory
2. Add your variables with `VITE_` prefix:
   ```
   VITE_API_URL=your-api-url
   ```
3. In Vercel Dashboard, add them under:
   - Project Settings  Environment Variables

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Technologies Used

- **React 18.3** - UI library
- **TypeScript 5.7** - Type safety
- **Vite 6.3** - Build tool
- **Tailwind CSS 4.1** - Utility-first CSS
- **Radix UI** - Accessible component primitives
- **Motion** - Animation library
- **Lucide React** - Icon library
- **Sonner** - Toast notifications
- **Recharts** - Charts library

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

The application is optimized for production with:
- Code splitting
- Tree shaking
- Asset optimization
- Lazy loading
- Source maps for debugging

## Security

Security headers are configured in `vite.config.ts` for the development server:
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection
- Referrer-Policy
- Permissions-Policy

## License

**PROPRIETARY - All rights reserved by metasyndikate**

This software is proprietary and confidential. Unauthorized copying, modification, distribution, or use of this software, via any medium, is strictly prohibited.

Copyright  2025 metasyndikate. All rights reserved.

For licensing inquiries, please contact: metasyndikate

## Support

For support, please contact the development team at metasyndikate.

---

**Built with  by metasyndikate**
