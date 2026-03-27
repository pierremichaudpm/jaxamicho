"use client";

import React from "react";
import { useTranslation } from "@/lib/i18n";

const NewsTicker: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <div
        className="news-ticker-bar"
        style={{
          textAlign: "center",
          padding: "0.4rem 1rem",
          fontSize: "0.7rem",
          fontWeight: 600,
          letterSpacing: "0.05em",
          color: "#2dd4e0",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 2000,
          background: "rgba(3, 7, 18, 0.85)",
          backdropFilter: "blur(8px)",
        }}
      >
        {t("ticker.news")}
      </div>
      <style jsx>{`
        @media (max-width: 968px) {
          .news-ticker-bar {
            top: 70px !important;
            z-index: 1999 !important;
          }
        }
      `}</style>
    </>
  );
};

export default NewsTicker;
