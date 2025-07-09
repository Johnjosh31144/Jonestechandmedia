# 🚀 Deployment Guide

## Free Hosting Options

### 1. GitHub Pages (Recommended)

**Steps:**
1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Under "Source", select "GitHub Actions"
4. The included workflow will automatically build and deploy your site
5. Your site will be available at `https://yourusername.github.io/repository-name`

**Automatic Updates:**
- Every push to the main branch triggers a new deployment
- No manual intervention needed

### 2. Netlify

**Steps:**
1. Go to [netlify.com](https://netlify.com) and sign up
2. Click "New site from Git"
3. Connect your GitHub repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Deploy site

**Features:**
- Custom domain support
- Form handling
- Instant cache invalidation

### 3. Vercel

**Steps:**
1. Go to [vercel.com](https://vercel.com) and sign up
2. Import your GitHub repository
3. Vercel automatically detects it's a Vite project
4. Deploy with zero configuration

**Features:**
- Edge network
- Automatic HTTPS
- Preview deployments for PRs

### 4. Surge.sh (Simple Static Hosting)

**Steps:**
```bash
npm install -g surge
npm run build
cd dist
surge
```

## Environment Variables

For production deployment, set these environment variables:

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Custom Domain Setup

### GitHub Pages
1. Add a `CNAME` file to your repository root with your domain
2. Configure DNS to point to GitHub Pages

### Netlify/Vercel
1. Add domain in dashboard
2. Update DNS records as instructed

## Performance Optimization

The build includes:
- ✅ Code splitting
- ✅ Asset optimization
- ✅ Gzip compression
- ✅ Tree shaking
- ✅ Minification

## Monitoring

After deployment, monitor:
- Site performance with Lighthouse
- Error tracking with browser dev tools
- Analytics with Google Analytics (if added)

## Troubleshooting

**404 on page refresh:**
- Ensure your hosting provider supports SPA routing
- The included `.htaccess` file handles this for Apache servers

**Build fails:**
- Check Node.js version (requires 16+)
- Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`

**Environment variables not working:**
- Ensure they start with `VITE_`
- Check they're set in your hosting provider's dashboard