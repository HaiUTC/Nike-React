module.exports = {
  images: {
    domains: ['static.nike.com'],
  },
    webpack(config, {}) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        child_process: false,
        net: false,
        crypto: false,
      };
      return config;
    },
  };