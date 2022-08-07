const withPlugins = require('next-compose-plugins');
const { i18n } = require('./next-i18next.config');

module.exports = withPlugins([], {
    i18n,
    pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
});
