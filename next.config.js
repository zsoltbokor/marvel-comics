module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['i.annihil.us']
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}
