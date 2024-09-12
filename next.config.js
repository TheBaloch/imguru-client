module.exports = {
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://sitenattyblog.b-cdn.net"
      : "",
  images: {
    remotePatterns: [
      {
        hostname: "nattyblog.b-cdn.net",
      },
      {
        hostname: "images.buzznfinds.com",
      },
    ],
  },
};
