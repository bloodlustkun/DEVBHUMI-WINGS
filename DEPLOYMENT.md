# 🚀 Deployment Guide - Devbhoomi Wings Website

## Quick Start

The website is built with Vite and React, making it easy to deploy to any static hosting platform.

## 📦 Build Commands

### Development
```bash
# Not applicable in this environment
# Would normally run: npm run dev
```

### Production Build
```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

---

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)
**Best for**: Automatic deployments, serverless functions, global CDN

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. For production:
```bash
vercel --prod
```

**Features**:
- Automatic HTTPS
- Global CDN
- Zero configuration
- Continuous deployment from Git
- Custom domains

---

### Option 2: Netlify
**Best for**: Form handling, split testing, easy rollbacks

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Build and deploy:
```bash
npm run build
netlify deploy --prod --dir=dist
```

**Features**:
- Form handling (useful for contact form)
- Split testing
- Branch previews
- Custom domains
- Automatic HTTPS

---

### Option 3: GitHub Pages
**Best for**: Free hosting, simple setup

1. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/devbhoomi-wings",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Deploy:
```bash
npm run deploy
```

---

### Option 4: AWS S3 + CloudFront
**Best for**: Custom infrastructure, AWS ecosystem

1. Build the project:
```bash
npm run build
```

2. Upload to S3:
```bash
aws s3 sync dist/ s3://your-bucket-name
```

3. Configure CloudFront distribution for CDN

**Features**:
- Full control
- Custom caching rules
- Integration with AWS services
- Cost-effective for high traffic

---

### Option 5: Firebase Hosting
**Best for**: Firebase ecosystem, analytics integration

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Initialize Firebase:
```bash
firebase init hosting
```

3. Build and deploy:
```bash
npm run build
firebase deploy
```

---

## ⚙️ Configuration Files

### For Netlify
Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### For Vercel
Create `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

---

## 🔧 Environment Variables

If you add any API keys or secrets, create a `.env` file:

```env
VITE_GOOGLE_ANALYTICS_ID=your-ga-id
VITE_CONTACT_API_URL=your-api-url
VITE_WHATSAPP_NUMBER=919876543210
```

Access in code:
```typescript
const gaId = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;
```

---

## 🌍 Custom Domain Setup

### For www.devbhoomiwings.com

1. **DNS Configuration**:
   - Add A record pointing to hosting provider's IP
   - Or add CNAME record pointing to hosting provider's domain

2. **SSL Certificate**:
   - Most hosting providers (Vercel, Netlify) provide automatic SSL
   - Or use Let's Encrypt for manual setup

3. **Example DNS Records**:
```
Type    Name    Value
A       @       76.76.21.21 (Vercel IP)
CNAME   www     devbhoomi-wings.vercel.app
```

---

## 📊 Performance Optimization

### Before Deployment

1. **Image Optimization**:
   - Convert PNGs to WebP
   - Compress images
   - Use responsive images

2. **Code Splitting**:
   - Already handled by Vite
   - Lazy load routes if needed

3. **Minification**:
   - Automatically handled by Vite build
   - CSS, JS, HTML all minified

4. **Compression**:
   - Enable Gzip/Brotli on server
   - Most modern hosts do this automatically

---

## 🔍 SEO Checklist

Before going live:

- ✅ Update SEO component with actual domain
- ✅ Create actual og:image (1200x630px)
- ✅ Update phone number in WhatsApp button
- ✅ Update email addresses
- ✅ Add Google Analytics
- ✅ Submit sitemap to Google Search Console
- ✅ Set up Google My Business
- ✅ Create robots.txt
- ✅ Add favicon
- ✅ Test with Google Rich Results Test

---

## 📱 Post-Deployment Testing

### Manual Testing
- [ ] Test on mobile devices (iOS, Android)
- [ ] Test on different browsers (Chrome, Safari, Firefox, Edge)
- [ ] Test all navigation links
- [ ] Test contact form submission
- [ ] Test WhatsApp button
- [ ] Test back to top button
- [ ] Verify all animations work
- [ ] Check responsive design breakpoints

### Automated Testing
```bash
# Install Lighthouse CI
npm install -g @lhci/cli

# Run Lighthouse
lhci autorun
```

### Performance Targets
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 90
- SEO: > 95

---

## 🔒 Security Checklist

- [ ] HTTPS enabled
- [ ] Security headers configured
- [ ] CORS properly set up
- [ ] No exposed API keys
- [ ] Form validation on contact form
- [ ] Rate limiting on form submissions
- [ ] CSP (Content Security Policy) headers

---

## 📈 Analytics Setup

### Google Analytics 4

1. Create GA4 property
2. Add tracking code to SEO component:

```typescript
// In SEO.tsx
useEffect(() => {
  // Google Analytics
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
}, []);
```

### Event Tracking

Add events for:
- Button clicks (Explore Trips, Contact Us)
- Form submissions
- WhatsApp clicks
- Phone number clicks
- Navigation clicks

---

## 🎨 Custom Branding

Before deployment, update:

1. **Logo**: Replace Logo.tsx with actual company logo
2. **Favicon**: Add favicon.ico to public folder
3. **OG Image**: Create 1200x630px social sharing image
4. **Contact Info**: Update phone, email, address
5. **Social Links**: Update with actual social media URLs
6. **WhatsApp**: Update with actual WhatsApp number

---

## 📝 Sitemap

Create `public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.devbhoomiwings.com/</loc>
    <priority>1.0</priority>
    <changefreq>weekly</changefreq>
  </url>
  <url>
    <loc>https://www.devbhoomiwings.com/#about</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.devbhoomiwings.com/#services</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.devbhoomiwings.com/#offers</loc>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.devbhoomiwings.com/#trips</loc>
    <priority>0.9</priority>
  </url>
</urlset>
```

---

## 🤖 robots.txt

Create `public/robots.txt`:

```
User-agent: *
Allow: /
Sitemap: https://www.devbhoomiwings.com/sitemap.xml
```

---

## 🚀 Quick Deploy Commands

### Vercel
```bash
vercel --prod
```

### Netlify
```bash
npm run build && netlify deploy --prod --dir=dist
```

### Firebase
```bash
npm run build && firebase deploy
```

---

## 📞 Support & Maintenance

### Regular Updates
- Update packages monthly: `npm update`
- Check for security vulnerabilities: `npm audit`
- Monitor performance with Lighthouse
- Review analytics monthly
- Update content seasonally

### Backup
- Keep Git repository updated
- Export database (if using backend)
- Download build artifacts
- Document all customizations

---

## ✅ Pre-Launch Checklist

- [ ] All images optimized
- [ ] All links tested
- [ ] Contact form tested
- [ ] Mobile responsive verified
- [ ] SEO meta tags updated
- [ ] Analytics installed
- [ ] Favicon added
- [ ] robots.txt created
- [ ] sitemap.xml created
- [ ] SSL certificate active
- [ ] Custom domain configured
- [ ] Social media links updated
- [ ] Legal pages added (privacy, terms)
- [ ] Performance tested (Lighthouse > 90)
- [ ] Accessibility tested (WCAG AA)

---

## 🎉 Launch Day

1. Final build: `npm run build`
2. Deploy to production
3. Verify custom domain
4. Test all features
5. Submit to Google Search Console
6. Share on social media
7. Monitor analytics
8. Collect feedback

---

**Your website is now ready to go live! 🚀**

For questions or support, refer to:
- README.md for features
- FEATURES.md for complete feature list
- IMPROVEMENTS.md for upgrade details
