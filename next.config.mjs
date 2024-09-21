// Import webpack module using ES module syntax
import webpack from 'webpack';

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Disabling source maps for faster builds in development
    productionBrowserSourceMaps: false,
    // Disable font optimization to speed up development builds
    optimizeFonts: false,

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
