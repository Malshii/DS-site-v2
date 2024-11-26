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
                    // Development CSP
                    "default-src 'self';",
                    "script-src 'self' 'unsafe-inline' 'unsafe-eval' " +
                      "https://*.hscollectedforms.net " + // for collectedforms.js
                      "https://*.hs-banner.com " + // for banner.js
                      "https://*.hsadspixel.net " + // for fb.js
                      "https://*.hs-analytics.net " + // for 6187835.js
                      "https://*.usemessages.com " + // for conversations-embed.js
                      "https://*.hubspot.com;", // for general hubspot resources
                    "style-src 'self' 'unsafe-inline';",
                    "img-src 'self' data: blob: https://*.hubspot.com;",
                    "font-src 'self' https://*.hubspot.com;",
                    "connect-src 'self' " +
                      "https://*.hscollectedforms.net " +
                      "https://*.hs-banner.com " +
                      "https://*.hsadspixel.net " +
                      "https://*.hs-analytics.net " +
                      "https://*.usemessages.com " +
                      "https://*.hubspot.com " +
                      "wss://*.hubspot.com;", // for WebSocket connections
                    "frame-src 'self' https://*.hubspot.com;",
                    "media-src 'self';",
                    "object-src 'none';",
                  ].join(" ")
                : [
                    // Production CSP - same as development for now
                    "default-src 'self';",
                    "script-src 'self' 'unsafe-inline' 'unsafe-eval' " +
                      "https://*.hscollectedforms.net " +
                      "https://*.hs-banner.com " +
                      "https://*.hsadspixel.net " +
                      "https://*.hs-analytics.net " +
                      "https://*.usemessages.com " +
                      "https://*.hubspot.com;",
                    "style-src 'self' 'unsafe-inline';",
                    "img-src 'self' data: blob: https://*.hubspot.com;",
                    "font-src 'self' https://*.hubspot.com;",
                    "connect-src 'self' " +
                      "https://*.hscollectedforms.net " +
                      "https://*.hs-banner.com " +
                      "https://*.hsadspixel.net " +
                      "https://*.hs-analytics.net " +
                      "https://*.usemessages.com " +
                      "https://*.hubspot.com " +
                      "wss://*.hubspot.com;",
                    "frame-src 'self' https://*.hubspot.com;",
                    "media-src 'self';",
                    "object-src 'none';",
                  ].join(" "),
          },
          // Keep your other security headers
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
