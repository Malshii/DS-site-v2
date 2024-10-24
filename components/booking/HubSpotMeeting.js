"use client";
import React, { useEffect } from 'react';

// HubSpotMeeting Component
export default function HubSpotMeeting() {
  // Use useEffect to load the HubSpot meeting embed script when the component mounts
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex justify-center w-full max-w-screen-lg">
      <div
        className="meetings-iframe-container"
        data-src="https://meetings.hubspot.com/gdc-digital-solutions/new-meeting-schedular?embed=true"
        style={{
          width: '100%',
          height: '100vh',  // Set full view height to ensure no scroll is needed
          border: 'none',    // Remove border for a clean look
          padding: '20px',   // Add padding for some spacing from the surrounding elements
          overflow: 'hidden' // Prevent unwanted scroll
        }}
      ></div>
    </div>
  );
}
