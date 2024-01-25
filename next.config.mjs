// eslint-disable-next-line @typescript-eslint/no-unused-vars
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['.'],
  },
  redirects: () => {
    return [
      // {
      //   source: '/',
      //   destination: '/index',
      //   permanent: true,
      // },
     
    ];
  },
  images: {
    remotePatterns: [
      // {
      //   protocol: 'https',
      //   hostname: 'loremflickr.com',
      //   port: '',
      //   pathname: '/**',
      // },
      // {
      //   protocol: 'https',
      //   hostname: 'picsum.photos',
      //   port: '',
      //   pathname: '/**',
      // },
    ],
  },
};

export default nextConfig;
