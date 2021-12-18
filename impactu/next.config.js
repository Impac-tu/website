module.exports = {
  reactStrictMode: true,
  images: {
    deviceSizes: [480, 768, 1080],
  },
  async redirects() {
    return [
      {
        source: '/Recrutamento',
        destination: '/',
        permanent: false,
      },
    ]
  },
}
