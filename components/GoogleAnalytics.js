import { useState, useEffect, Suspense, memo } from "react";
import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";

const GA_MEASUREMENT_ID = "G-G4X6P45YTZ";

// Memoized tracking component to prevent unnecessary re-renders
const GoogleAnalyticsTracking = memo(function GoogleAnalyticsTracking() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Debounce the tracking to prevent excessive calls
    const timeoutId = setTimeout(() => {
      if (typeof window.gtag === "function") {
        const url = pathname + searchParams.toString();
        window.gtag("config", GA_MEASUREMENT_ID, {
          page_path: url,
          transport_type: "beacon", // Use navigator.sendBeacon() for better performance
        });
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [pathname, searchParams]);

  return null;
});

// Lazy load GA scripts based on user interaction or viewport visibility
function useDefer() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Load GA when user starts interacting with the page
    const handleInteraction = () => {
      setShouldLoad(true);
      // Cleanup listeners after loading
      ["first_visit", "page_view", "scroll", "session_start"].forEach((event) =>
        window.removeEventListener(event, handleInteraction)
      );
    };

    // Add interaction listeners
    ["first_visit", "page_view", "scroll", "session_start"].forEach((event) =>
      window.addEventListener(event, handleInteraction, { passive: true })
    );

    // Also load if the page has been visible for 3 seconds
    const timeoutId = setTimeout(() => setShouldLoad(true), 3000);

    return () => {
      clearTimeout(timeoutId);
      ["first_visit", "page_view", "scroll", "session_start"].forEach((event) =>
        window.removeEventListener(event, handleInteraction)
      );
    };
  }, []);

  return shouldLoad;
}

export default function GoogleAnalytics() {
  const shouldLoadGA = useDefer();

  if (!shouldLoadGA) return null;

  return (
    <>
      <Script
        strategy="worker"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="worker"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){
              dataLayer.push(arguments);
              if(arguments[0] === 'config') {
                // Cache common events
                localStorage.setItem('ga_' + arguments[1], JSON.stringify(arguments[2]));
              }
            }
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              send_page_view: false,  // Disable automatic page views
              transport_type: 'beacon',
              optimization_level: 2
            });
            
            // Restore cached events
            try {
              const cachedData = localStorage.getItem('ga_${GA_MEASUREMENT_ID}');
              if(cachedData) {
                gtag('config', '${GA_MEASUREMENT_ID}', JSON.parse(cachedData));
              }
            } catch(e) {}
          `,
        }}
      />
      <Suspense fallback={null}>
        <GoogleAnalyticsTracking />
      </Suspense>
    </>
  );
}
