module.exports = {
  assetPrefix:
    process.env.NODE_ENV === "production" ? "https://cdn.imguru.ae" : "",
  images: {
    remotePatterns: [
      {
        hostname: "nattyblog.b-cdn.net",
      },
      {
        hostname: "images.buzznfinds.com",
      },
      {
        hostname: "images.imguru.ae",
      },
    ],
  },
};
