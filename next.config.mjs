// Import webpack module using ES module syntax
import webpack from 'webpack';

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Disabling source maps for faster builds in development
    productionBrowserSourceMaps: false,
    // Disable font optimization to speed up development builds
    optimizeFonts: false,

    experimental: {
        turbo: {
            rules: {
                '*.svg': {
                    loaders: ['@svgr/webpack'],
                    as: '*.js',
                },
            },
            resolveAlias: {
                underscore: 'lodash',
                mocha: { browser: 'mocha/browser-entry.js' },
            },
            resolveExtensions: [
                '.mdx',
                '.tsx',
                '.ts',
                '.jsx',
                '.js',
                '.mjs',
                '.json',
            ],
            moduleIdStrategy: 'deterministic',
        },
    },

    images: {
        remotePatterns: [
            {
                hostname: 'cdn.myanimelist.net',
            },
        ],
    },

    // Extend Webpack configuration
    webpack: (config) => {
        config.plugins.push(
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
            })
        );

        config.cache = false;
        return config;
    },
};

export default nextConfig;
