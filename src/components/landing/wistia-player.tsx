"use client";

import Script from "next/script";

export function WistiaPlayer() {
  const style = `
    wistia-player[media-id='guv1bh80jm']:not(:defined) {
      background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/guv1bh80jm/swatch'); 
      display: block; 
      filter: blur(5px); 
      padding-top:56.25%; 
    }
  `;
  return (
    <>
      <Script src="https://fast.wistia.com/player.js" strategy="afterInteractive" async />
      <Script src="https://fast.wistia.com/embed/guv1bh80jm.js" strategy="afterInteractive" async type="module" />
      <style dangerouslySetInnerHTML={{ __html: style }} />
      <div className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl shadow-primary/30 border border-primary/20">
        <wistia-player media-id="guv1bh80jm" aspect="1.7777777777777777"></wistia-player>
      </div>
    </>
  );
}
