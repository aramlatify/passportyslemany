module.exports = { future: {
        webpack5: true,
    },
    webpack: (config, {}) => {
        config.resolve.fallback = {
            ...config.resolve.fallback,
            fs: false,
          };
     },
   eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  reactStrictMode: false,
  compiler: {
    styledComponents: true,}, webpack: (config) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
  
      return config;
    },
  
};
