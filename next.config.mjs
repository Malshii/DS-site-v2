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
                    // Development CSP policies - More permissive for development tools
                    "default-src 'self';",
                    "script-src 'self' 'unsafe-inline' 'unsafe-eval';",
                    "style-src 'self' 'unsafe-inline';",
                    "img-src 'self' data: blob:;",
                    "font-src 'self';",
                    "connect-src 'self';",
                  ].join(" ")
                : [
                    // Production CSP policies - More strict for security
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
            // Prevent your site from being embedded in iframes
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            // Prevent MIME type sniffing
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            // Control how much referrer information should be included
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            // Control browser features and APIs
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
