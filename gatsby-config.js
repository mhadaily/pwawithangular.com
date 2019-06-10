require('source-map-support').install();
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'es2017',
  },
});

const config = require('./config/SiteConfig').default;
const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix;
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    siteUrl: config.siteUrl + pathPrefix,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            variants: [`300`, `400`, `700`],
          },
          {
            family: `Caveat`,
          },
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sass',
    `gatsby-plugin-postcss`,
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: config.Google_Tag_Manager_ID,
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        logo: `static` + config.siteLogo,
        name: 'PWA-Angular',
        short_name: 'Progressive web app with Angular Book',
        description: config.siteDescription,
        orientation: 'any',
        dir: 'auto',
        lang: 'en-US',
        start_url: '/?utm_source=homescreen',
        version: '1.0',
        display: 'standalone',
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        icon: `static` + config.favicon,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: require('path').join(__dirname, `static`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
    isProd
      ? {
          resolve: 'gatsby-plugin-offline',
          options: {
            // GlobalPattern and GlobalDirecty are injected by Gatsy Plugin it's not neccessary to
            // modify it however, it's configurable if we want.
            importWorkboxFrom: `local`,
            cacheId: `angular-pwa-book`,
            // Don't cache-bust JS or CSS files, and anything in the static directory,
            // since these files have unique URLs and their contents will never change
            dontCacheBustURLsMatching: /(\.js$|\.css$|static\/)/,
            runtimeCaching: [
              // {
              //   // Use CacheFirst since these don't need to be revalidated (same RegExp
              //   // and same reason as above)
              //   urlPattern: /(\.js$|\.css$|static\/)/,
              //   handler: `CacheFirst`,
              // },
              {
                // Add runtime caching of various other page resources
                urlPattern: /^https?:.*.pwawithangular.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
                handler: `StaleWhileRevalidate`,
              },
              {
                // Google fonts
                urlPattern: /.*(?:googleapis|gstatic)\.com.*/,
                handler: `StaleWhileRevalidate`,
              },
            ],
            skipWaiting: true,
            clientsClaim: true,
          },
        }
      : `gatsby-plugin-remove-serviceworker`,
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: require('path').join(__dirname, `data`),
      },
    },
  ],
};
