import React, { useEffect, useRef, useState } from "react";
import Mov from "../assets/img.mp4";

/* ══════════════════════════════════════
   PURE NORMAL CSS — TAILWIND NAHI HAI
══════════════════════════════════════ */
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Lato:wght@300;400;700&display=swap');

  /* ── Animations ── */
  @keyframes pulseBorder {
    0%, 100% { box-shadow: 0 0 0 0px rgba(201,168,76,0.45); }
    50%       { box-shadow: 0 0 0 12px rgba(201,168,76,0); }
  }
  @keyframes shimmer {
    0%   { background-position: -400px 0; }
    100% { background-position:  400px 0; }
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(36px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes slideRight {
    from { opacity: 0; transform: translateX(-50px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes slideLeft {
    from { opacity: 0; transform: translateX(50px); }
    to   { opacity: 1; transform: translateX(0); }
  }

  /* ══ ROOT ══ */
  .home-root {
    min-height: 100vh;
    background: linear-gradient(160deg, #0f0a04 0%, #1c1005 50%, #241608 100%);
    color: #e8d9c0;
    overflow-x: hidden;
    font-family: 'Lato', sans-serif;
  }

  /* ══ TOP HEADER ══ */
  .home-header {
    text-align: center;
    padding: 2.5rem 1rem 1rem;
    animation: fadeUp 0.8s ease both;
  }
  .home-header-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.9rem;
    font-weight: 700;
    letter-spacing: 4px;
    text-transform: uppercase;
    background: linear-gradient(90deg, #c9a84c, #f0d080, #c9a84c);
    background-size: 400px auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer 3s linear infinite;
  }
  .home-header-divider {
    width: 80px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #c9a84c, transparent);
    margin: 0.75rem auto 0;
  }

  /* ══ HERO ══ */
  .home-hero {
    max-width: 1100px;
    margin: 0 auto;
    padding: 3rem 2rem 4rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3.5rem;
  }

  /* ── Text Side ── */
  .home-text {
    flex: 1.2;
    animation: slideRight 0.9s ease 0.2s both;
  }
  .home-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    font-weight: 900;
    line-height: 1.1;
    margin: 0 0 2rem 0;
    background: linear-gradient(135deg, #ef4444 0%, #f97316 50%, #fde047 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* ── List ── */
  .home-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
  }
  .home-list-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    font-size: 1.05rem;
    font-weight: 300;
    line-height: 1.7;
    color: rgba(232,217,192,0.85);
    padding: 12px 16px;
    border-left: 4px solid #c9a84c;
    border-radius: 0 12px 12px 0;
    background: rgba(201,168,76,0.06);
    cursor: default;
    /* hover transition */
    transition: background 0.3s ease, transform 0.3s ease;
  }
  .home-list-item:hover {
    background: rgba(201,168,76,0.13);
    transform: translateX(8px);
  }
  .home-list-icon {
    color: #c9a84c;
    font-size: 1.2rem;
    margin-top: 3px;
    flex-shrink: 0;
  }

  /* ── Video Side ── */
  .home-video-wrap {
    flex: 0 0 400px;
    display: flex;
    justify-content: center;
    animation: slideLeft 0.9s ease 0.3s both;
  }
  .home-video-frame {
    position: relative;
    width: 100%;
    max-width: 380px;
    border-radius: 20px;
    overflow: hidden;
    border: 2px solid rgba(201,168,76,0.5);
    animation: pulseBorder 3s ease-in-out infinite;
  }
  .home-video-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 60%, rgba(15,10,4,0.5) 100%);
    z-index: 1;
    pointer-events: none;
    border-radius: 20px;
  }
  .home-video-frame video {
    display: block;
    width: 100%;
    border-radius: 18px;
    object-fit: cover;
  }

  /* ══ ROOM SECTION ══ */
  .home-room-section {
    text-align: center;
    padding: 4rem 2rem 5rem;
    border-top: 1px solid rgba(201,168,76,0.15);
    animation: fadeUp 1s ease 0.4s both;
  }
  .home-room-badge {
    display: inline-block;
    font-size: 0.7rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #c9a84c;
    background: rgba(201,168,76,0.1);
    border: 1px solid rgba(201,168,76,0.3);
    padding: 5px 16px;
    border-radius: 999px;
    margin-bottom: 1rem;
  }
  .home-room-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.8rem, 4vw, 2.8rem);
    font-weight: 700;
    background: linear-gradient(90deg, #a855f7, #f59e0b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0 0 1rem 0;
  }
  .home-room-desc {
    max-width: 560px;
    margin: 0 auto;
    font-size: 1rem;
    font-weight: 300;
    color: rgba(232,217,192,0.6);
    line-height: 1.8;
  }

  /* ══════════════════════════
     RESPONSIVE
  ══════════════════════════ */

  /* 800px se neeche — column layout */
  @media (max-width: 800px) {
    .home-hero {
      flex-direction: column;
      padding: 2rem 1.5rem 3rem;
      gap: 2rem;
    }
    .home-text {
      flex: unset;
      width: 100%;
    }
    .home-video-wrap {
      flex: unset;
      width: 100%;
    }
    .home-video-frame {
      max-width: 100%;
    }
  }

  /* 600px se neeche — compact sizes */
  @media (max-width: 600px) {
    .home-header-title {
      font-size: 1.1rem;
      letter-spacing: 2px;
    }
    .home-hero {
      padding: 1.5rem 1rem 2.5rem;
      gap: 1.5rem;
    }
    .home-title {
      font-size: 2rem;
      margin-bottom: 1.2rem;
    }
    .home-list-item {
      font-size: 0.88rem;
      padding: 10px 12px;
    }
    .home-room-section {
      padding: 2.5rem 1rem 3rem;
    }
    .home-room-title {
      font-size: 1.5rem;
    }
    .home-room-desc {
      font-size: 0.88rem;
    }
  }
`;

/* ── List Data ── */
const listItems = [
  "Welcome to Sharma Guest House, Ringas – a perfect place for comfortable and peaceful stay.",
  "We provide clean and spacious rooms, friendly service, and a homely atmosphere for our guests.",
  "Your comfort and satisfaction is our priority.",
];

const Home = () => {
  const [visible, setVisible] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (listRef.current) obs.observe(listRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{styles}</style>

      <div className="home-root">

        {/* ── Header ── */}
        <div className="home-header">
          <h1 className="home-header-title">Welcome to Ringas Guest House</h1>
          <div className="home-header-divider" />
        </div>

        {/* ── Hero ── */}
        <div className="home-hero">

          {/* Text Side */}
          <div className="home-text">
            <h1 className="home-title">
              Sharma<br />Guest House
            </h1>

            <ul className="home-list" ref={listRef}>
              {listItems.map((item, i) => (
                <li
                  key={i}
                  className="home-list-item"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(28px)",
                    transition: `opacity 0.6s ease ${i * 180}ms, transform 0.6s ease ${i * 180}ms`,
                  }}
                >
                  <span className="home-list-icon">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Video Side */}
          <div className="home-video-wrap">
            <div className="home-video-frame">
              <div className="home-video-overlay" />
              <video autoPlay muted loop playsInline>
                <source src={Mov} type="video/mp4" />
              </video>
            </div>
          </div>

        </div>

        {/* ── Room Section ── */}
        <div className="home-room-section">
          <span className="home-room-badge">Our Offerings</span>
          <h2 className="home-room-title">Room Details – Sharma Guest House</h2>
          <p className="home-room-desc">
            Hamare kamre aapko ghar jaisi sukoon aur aaram dete hain —
            saaf, spacious aur har sugam suvidha ke saath.
          </p>
        </div>

      </div>
    </>
  );
};

export default Home;