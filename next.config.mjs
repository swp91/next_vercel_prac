/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/about",
        destination: "/",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ["learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com"], // 허용할 외부 이미지 호스트 추가
  },
};

export default nextConfig;
