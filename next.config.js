const withPlugins = require('next-compose-plugins');
const { i18n } = require('./next-i18next.config');

module.exports = withPlugins([], {
    i18n,
    pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
    images: {
        domains: [process.env.NEXT_PUBLIC_SUPABASE_URL, 'dntvqhqmwixrkvupbate.supabase.co']
    }
});
