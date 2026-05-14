# Deployment Configuration Files

This folder contains configuration files for different hosting platforms to fix SPA routing issues.

## Which file to use?

### Apache Server (Most Common - Shared Hosting)
- **File:** `.htaccess`
- **Location:** Should be in the root of your `dist` folder after build
- **Note:** Vite automatically copies files from `public/` to `dist/` during build

### Netlify
- **File:** `_redirects`
- **Location:** Should be in the root of your `dist` folder after build

### Vercel
- **File:** `vercel.json`
- **Location:** Should be in the root of your project (not in dist)

### Nginx
- **File:** `nginx.conf`
- **Location:** Copy this configuration to your Nginx server configuration

## After Building

1. Run `npm run build` to create the `dist` folder
2. All files from `public/` will be automatically copied to `dist/`
3. Upload the entire `dist/` folder to your hosting server
4. Make sure `.htaccess` (for Apache) is in the root of your deployed files

## Testing

After deployment, test these URLs directly:
- `https://yourdomain.com/about`
- `https://yourdomain.com/services`
- `https://yourdomain.com/projects`
- `https://yourdomain.com/blog`
- `https://yourdomain.com/contact`

All should load correctly without 404 errors.

