/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,  // Đảm bảo bạn có cấu hình React Strict Mode
  env: {
    SESSION_PASSWORD:
      "LozernheinCookiePasswordFucekLozernheinCookiePasswordFucek", // Môi trường biến
  },
  async headers() {
    return [
      {
        source: "/api/(.*)",  // Định nghĩa header cho các route API
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
          {
            key: "Content-Range",
            value: "bytes : 0-9/*",
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",  // Cho phép hình ảnh từ mọi nguồn https
      },
    ],
  },
};

export default nextConfig;
