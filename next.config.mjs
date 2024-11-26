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
                    // Script sources
                    "script-src 'self' 'unsafe-inline' 'unsafe-eval' " +
                      "https://www.googletagmanager.com " + // Google Tag Manager
                      "https://*.hs-scripts.com " + // HubSpot Scripts
                      "https://*.hscollectedforms.net " +
                      "https://*.hs-banner.com " +
                      "https://*.hsadspixel.net " +
                      "https://*.hs-analytics.net " +
                      "https://*.usemessages.com " +
                      "https://*.hubspot.com;",
                    // Styles
                    "style-src 'self' 'unsafe-inline';",
                    // Images
                    "img-src 'self' data: blob: https://*.hubspot.com;",
                    // Fonts
                    "font-src 'self' https://*.hubspot.com;",
                    // Connect sources
                    "connect-src 'self' " +
                      "https://www.googletagmanager.com " +
                      "https://*.hs-scripts.com " +
                      "https://*.hscollectedforms.net " +
                      "https://*.hs-banner.com " +
                      "https://*.hsadspixel.net " +
                      "https://*.hs-analytics.net " +
                      "https://*.usemessages.com " +
                      "https://*.hubspot.com " +
                      "wss://*.hubspot.com;",
                    // Frame sources
                    "frame-src 'self' https://*.hubspot.com https://www.googletagmanager.com;",
                    // Media
                    "media-src 'self';",
                    // Objects
                    "object-src 'none';",
                  ].join(" ")
                : [
                    // Production CSP
                    "default-src 'self';",
                    "script-src 'self' 'unsafe-inline' 'unsafe-eval' " +
                      "https://www.googletagmanager.com " +
                      "https://*.hs-scripts.com " +
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
                      "https://www.googletagmanager.com " +
                      "https://*.hs-scripts.com " +
                      "https://*.hscollectedforms.net " +
                      "https://*.hs-banner.com " +
                      "https://*.hsadspixel.net " +
                      "https://*.hs-analytics.net " +
                      "https://*.usemessages.com " +
                      "https://*.hubspot.com " +
                      "wss://*.hubspot.com;",
                    "frame-src 'self' https://*.hubspot.com https://www.googletagmanager.com;",
                    "media-src 'self';",
                    "object-src 'none';",
                  ].join(" "),
          },
          // Other security headers remain the same
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
