const isDev = process.env.NODE_ENV === 'development'

module.exports = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'geolocation=(), microphone=(), camera=()',
  },
{
  key: 'Content-Security-Policy',
  value: `
    default-src 'self';
    script-src 'self' 'unsafe-inline' ${
      isDev ? "'unsafe-eval'" : ''
    } https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com https://www.gstatic.com;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com;
    img-src 'self' data: https://www.google-analytics.com https://www.googletagmanager.com https://res.cloudinary.com;
    font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com;
    connect-src 'self' https://www.google-analytics.com https://www.google.com https://www.gstatic.com https://identitytoolkit.googleapis.com https://firestore.googleapis.com https://firebase.googleapis.com https://depfinfinance.co.za;
    frame-src https://www.google.com https://www.googletagmanager.com;
    upgrade-insecure-requests;
  `
    .replace(/\s{2,}/g, ' ')
    .trim(),
}

]