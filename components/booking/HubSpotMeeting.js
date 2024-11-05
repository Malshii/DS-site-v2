"use client";
import React, { useEffect } from "react";

// HubSpotMeeting Component
export default function HubSpotMeeting() {
  // Use useEffect to load the HubSpot meeting embed script when the component mounts
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex justify-center w-full">
      <div
        className="meetings-iframe-container w-full max-w-screen-xl px-4"
        data-src="https://meetings.hubspot.com/gdc-digital-solutions/new-meeting-schedular?embed=true"
        style={{
          height: "100vh",
          border: "none",
          overflow: "hidden",
        }}
      ></div>
    </div>
  );
}
