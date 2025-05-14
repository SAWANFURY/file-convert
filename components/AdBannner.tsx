'use client';

import { useEffect } from "react";

export default function AdBanner() {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("Adsense error", e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-9427999005237654"
      data-ad-slot="YOUR_SLOT_ID" // 🔁 Replace this with your Ad Unit slot ID
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
