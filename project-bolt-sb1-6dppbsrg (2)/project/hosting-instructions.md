# Hosting Instructions for Jones Tech & Media Website

## Files Generated
After running `npm run build`, you'll find all the necessary files in the `dist/` folder:

- `index.html` - Main entry point
- `assets/` - Contains all CSS, JavaScript, and other assets
- Static files are optimized and ready for production

## Hosting Options

### 1. Traditional Web Hosting (Shared Hosting, VPS, etc.)
1. Upload all contents of the `dist/` folder to your web server's public directory (usually `public_html/` or `www/`)
2. Ensure your server supports:
   - Static file serving
   - URL rewriting for single-page applications (SPA)

### 2. Netlify (Recommended - Free Tier Available)
1. Drag and drop the `dist/` folder to netlify.com/drop
2. Or connect your GitHub repository for automatic deployments

### 3. Vercel (Free Tier Available)
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts

### 4. GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select source as GitHub Actions
4. The site will build and deploy automatically

## Important Notes for SPA Routing

Since this is a React single-page application, you need to configure your server to:
- Serve `index.html` for all routes (not just `/`)
- Handle client-side routing properly

### Apache (.htaccess)
Create a `.htaccess` file in your `dist/` folder:
```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QR,L]
```

### Nginx
Add this to your server configuration:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## Database Configuration
- The website will work without a database (using fallback data)
- For full functionality, you'll need to set up Supabase:
  1. Create a Supabase project
  2. Run the migration files in `supabase/migrations/`
  3. Update environment variables

## Environment Variables
Create a `.env` file with:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Testing Locally
To test the built version locally:
```bash
npm run preview
```

## File Structure After Build
```
dist/
├── index.html          # Main HTML file
├── assets/
│   ├── index-[hash].js  # Main JavaScript bundle
│   ├── index-[hash].css # Compiled CSS
│   └── [other assets]   # Images, fonts, etc.
└── vite.svg            # Favicon
```

The website is now ready for production hosting!