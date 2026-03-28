"use client";

import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "@/lib/i18n";

const NewsTicker: React.FC = () => {
  const { t } = useTranslation();
  const textRef = useRef<HTMLSpanElement>(null);
  const [duration, setDuration] = useState(15);

  useEffect(() => {
    if (textRef.current) {
      const textWidth = textRef.current.offsetWidth;
      const screenWidth = window.innerWidth;
      setDuration((textWidth + screenWidth) / 80);
    }
  }, []);

  return (
    <>
      <div
        className="news-ticker-bar"
        style={{
          overflow: "hidden",
          padding: "0.4rem 0",
          position: "relative",
          zIndex: 2001,
          background: "var(--bg-dark)",
          marginLeft: "-120px",
          paddingLeft: "120px",
          width: "calc(100% + 120px)",
        }}
      >
        <span
          ref={textRef}
          style={{
            display: "inline-block",
            whiteSpace: "nowrap",
            fontSize: "0.7rem",
            fontWeight: 600,
            letterSpacing: "0.05em",
            color: "#2dd4e0",
            animation: `tickerSlide ${duration}s linear infinite`,
          }}
        >
          {t("ticker.news")}
        </span>
      </div>
      <style jsx>{`
        @keyframes tickerSlide {
          0% { transform: translateX(100vw); }
          100% { transform: translateX(-100%); }
        }
        @media (max-width: 968px) {
          .news-ticker-bar {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            z-index: 2002 !important;
            background: rgba(3, 7, 18, 1) !important;
            padding: 0.4rem 0 !important;
            margin-left: 0 !important;
            padding-left: 0 !important;
          }
        }
      `}</style>
    </>
  );
};

export default NewsTicker;
