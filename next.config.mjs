/** @type {import('next').NextConfig} */
const nextConfig = {
  // Existing security headers
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              process.env.NODE_ENV === "development"
                ? [
                    "default-src 'self';",
                    "script-src 'self' 'unsafe-inline' 'unsafe-eval';",
                    "style-src 'self' 'unsafe-inline';",
                    "img-src 'self' data: blob:;",
                    "font-src 'self';",
                    "connect-src 'self';",
                  ].join(" ")
                : [
                    "default-src 'self';",
                    "script-src 'self' 'unsafe-inline' 'unsafe-eval';",
                    "style-src 'self' 'unsafe-inline';",
                    "img-src 'self' data: blob:;",
                    "font-src 'self';",
                    "connect-src 'self';",
                    "frame-src 'self';",
                    "object-src 'none';",
                    "media-src 'self';",
                    "worker-src 'self';",
                  ].join(" "),
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
        ],
      },
    ];
  },

  // Add redirect configurations
  async redirects() {
    return [
      // Remove trailing slashes
      {
        source: "/:path+/",
        destination: "/:path+",
        permanent: true,
      },
      // Handle www to non-www
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.gdcdigital.net",
          },
        ],
        destination: "https://gdcdigital.net/:path*",
        permanent: true,
      },
      // Handle HTTP to HTTPS
      {
        source: "/:path*",
        has: [
          {
            type: "header",
            key: "x-forwarded-proto",
            value: "http",
          },
        ],
        destination: "https://gdcdigital.net/:path*",
        permanent: true,
      },
    ];
  },

  // Force consistent trailing slash behavior
  trailingSlash: false,

  // Additional recommended configurations
  poweredByHeader: false, // Remove X-Powered-By header
  reactStrictMode: true,

  // Optimize images
  images: {
    domains: ["gdcdigital.net"],
    formats: ["image/webp"],
  },
};

export default nextConfig;
