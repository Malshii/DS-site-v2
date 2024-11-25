/** @type {import('next').NextConfig} */
const nextConfig = {
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
                    // Allow Google Tag Manager and other external scripts
                    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://*.hs-scripts.com;",
                    "style-src 'self' 'unsafe-inline';",
                    // Allow imgur images
                    "img-src 'self' data: blob: https://*.imgur.com;",
                    "font-src 'self';",
                    // Allow connections to external APIs if needed
                    "connect-src 'self' https://www.googletagmanager.com https://*.hs-scripts.com;",
                  ].join(" ")
                : [
                    "default-src 'self';",
                    // Production script sources
                    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://*.hs-scripts.com;",
                    "style-src 'self' 'unsafe-inline';",
                    // Production image sources
                    "img-src 'self' data: blob: https://*.imgur.com;",
                    "font-src 'self';",
                    // Production connect sources
                    "connect-src 'self' https://www.googletagmanager.com https://*.hs-scripts.com;",
                    "frame-src 'self';",
                    "object-src 'none';",
                    "media-src 'self';",
                    "worker-src 'self';",
                  ].join(" "),
          },
          // Rest of your security headers remain the same
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
};

export default nextConfig;
