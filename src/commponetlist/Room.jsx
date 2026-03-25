import React from "react";
import back10 from "../assets/12.jpeg";
import toliat from "../assets/10.png";

/* ══════════════════════════════════════
   PURE NORMAL CSS — TAILWIND NAHI HAI
══════════════════════════════════════ */
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Lato:wght@300;400;700&display=swap');

  /* ── Animations ── */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(32px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ══ ROOT ══ */
  .room-root {
    background: #0f0a04;
    padding: 4rem 1rem;
    font-family: 'Lato', sans-serif;
    color: #e8d9c0;
  }

  /* ══ SECTION HEADING ══ */
  .room-heading {
    text-align: center;
    margin-bottom: 3.5rem;
    animation: fadeUp 0.8s ease both;
  }
  .room-badge {
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
  .room-section-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.8rem, 4vw, 2.5rem);
    font-weight: 700;
    background: linear-gradient(90deg, #fb923c, #fde047, #fb923c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0 0 1rem 0;
  }
  .room-heading-divider {
    width: 80px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #c9a84c, transparent);
    margin: 0 auto;
  }

  /* ══ ROOM CARDS WRAPPER ══ */
  .room-cards {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    max-width: 1100px;
    margin: 0 auto;
  }

  /* ══ SINGLE ROOM CARD ══ */
  .room-card {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3rem;
  }
  .room-card.flip {
    flex-direction: row-reverse;
  }

  /* ── Image Side ── */
  .room-image-wrap {
    width: 50%;
    position: relative;
  }
  .room-image {
    width: 100%;
    height: 22rem;
    border-radius: 24px;
    background-size: cover;
    background-position: center;
    border: 2px solid rgba(201,168,76,0.3);
    overflow: hidden;
    position: relative;
    transition: transform 0.5s ease;
  }
  .room-image:hover {
    transform: scale(1.02);
  }

  /* Price Badge */
  .room-price-badge {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    background: #c9a84c;
    color: #1a1209;
    padding: 8px 16px;
    border-radius: 12px;
    font-weight: 700;
    font-size: 1rem;
    box-shadow: 0 4px 16px rgba(0,0,0,0.3);
  }
  .room-price-badge span {
    font-size: 0.8rem;
    font-weight: 400;
  }

  /* Tag Badge */
  .room-tag-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: #fa613c;
    color: #fff;
    font-size: 0.7rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 4px 12px;
    border-radius: 999px;
    font-weight: 700;
  }

  /* ── Details Side ── */
  .room-details {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
  .room-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    font-weight: 700;
    background: linear-gradient(90deg, #f87171, #fb923c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0 0 4px 0;
  }
  .room-subtitle {
    color: #c9a84c;
    font-size: 0.85rem;
    letter-spacing: 2px;
    margin: 0;
  }

  /* Features List */
  .room-features {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  .room-feature-item {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 1rem;
    font-weight: 300;
    color: rgba(232,217,192,0.85);
    padding: 10px 16px;
    border-radius: 12px;
    border-left: 4px solid #c9a84c;
    background: rgba(201,168,76,0.06);
    transition: background 0.3s ease, transform 0.3s ease;
    cursor: default;
  }
  .room-feature-item:hover {
    background: rgba(201,168,76,0.13);
    transform: translateX(8px);
  }
  .room-feature-icon {
    color: #c9a84c;
    font-size: 1.1rem;
    flex-shrink: 0;
  }

  /* Book Button */
  .room-book-btn {
    align-self: flex-start;
    padding: 12px 32px;
    border-radius: 12px;
    font-weight: 700;
    font-size: 0.95rem;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
    background: linear-gradient(90deg, #c9a84c, #f0d080);
    color: #1a1209;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .room-book-btn:hover {
    transform: scale(1.06);
    box-shadow: 0 0 20px rgba(201,168,76,0.45);
  }
  .room-book-btn:active {
    transform: scale(0.97);
  }

  /* ══ PRICE STRIP ══ */
  .room-price-strip {
    margin-top: 5rem;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid rgba(201,168,76,0.25);
    border-radius: 24px;
    background: rgba(201,168,76,0.05);
    padding: 2rem 3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
  }
  .strip-label {
    font-size: 0.75rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: rgba(232,217,192,0.5);
    margin: 0 0 4px 0;
  }
  .strip-price {
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
    font-weight: 700;
    color: #c9a84c;
    margin: 0;
  }
  .strip-price span {
    font-size: 1rem;
    font-weight: 300;
    color: rgba(232,217,192,0.5);
  }
  .strip-divider {
    width: 1px;
    height: 60px;
    background: rgba(201,168,76,0.2);
    flex-shrink: 0;
  }
  .strip-includes p {
    font-size: 0.9rem;
    font-weight: 300;
    color: rgba(232,217,192,0.8);
    line-height: 1.8;
    margin: 0;
  }
  .strip-avail-btn {
    flex-shrink: 0;
    padding: 12px 28px;
    border-radius: 12px;
    font-weight: 700;
    font-size: 0.8rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    background: transparent;
    border: 2px solid #c9a84c;
    color: #c9a84c;
    cursor: pointer;
    transition: background 0.3s ease, color 0.3s ease, transform 0.3s ease;
  }
  .strip-avail-btn:hover {
    background: #c9a84c;
    color: #1a1209;
    transform: scale(1.05);
  }
  .strip-avail-btn:active {
    transform: scale(0.97);
  }

  /* ══════════════════════════
     RESPONSIVE
  ══════════════════════════ */

  /* 768px se neeche — cards column */
  @media (max-width: 768px) {
    .room-root {
      padding: 3rem 1rem;
    }
    .room-card,
    .room-card.flip {
      flex-direction: column;
      gap: 1.75rem;
    }
    .room-image-wrap,
    .room-details {
      width: 100%;
    }
    .room-image {
      height: 17rem;
    }
    .room-price-strip {
      flex-direction: column;
      padding: 1.5rem 1.5rem;
      text-align: center;
      gap: 1.25rem;
    }
    .strip-divider {
      display: none;
    }
  }

  /* 600px se neeche — compact */
  @media (max-width: 600px) {
    .room-section-title {
      font-size: 1.6rem;
    }
    .room-image {
      height: 13rem;
      border-radius: 16px;
    }
    .room-title {
      font-size: 1.7rem;
    }
    .room-feature-item {
      font-size: 0.88rem;
      padding: 8px 12px;
    }
    .strip-price {
      font-size: 2rem;
    }
    .room-price-strip {
      margin-top: 3rem;
    }
  }
`;
const rooms = [
  {
    title: "Deluxe Room",
    subtitle: "Aaram aur Sukoon ka Sangam",
    features: [
      "King Size Bed",
      "AC & Geyser",
      "Free Wi-Fi",
      "24/7 Room Service",
      "Nearby to Railway Station",
    ],
    price: "₹799",
    Start:"starts form ",
    tag: "Most Popular",
    book: "Book Now",
    image: back10,
    flip: false,
  },
 
  {
  title: "Premium Suite",
subtitle: "Luxury jo yaad rahe",
features: [
  "Clean Attached Bathroom",
  "Hot Water Available",
  "Western Toilet",
  "Daily Housekeeping",
  "Hygienic Washroom",
],
tag: "Daily Cleaning Washroom",
book:"try Now",
image: toliat,
flip: true,
  },
];

const Room = () => {
  return (
    <>
      <style>{styles}</style>

      <div className="room-root">
        {/* ── Section Heading ── */}
        <div className="room-heading">
          <span className="room-badge">Hamare Kamre</span>
          <h2 className="room-section-title">Room Details</h2>
          <div className="room-heading-divider" />
        </div>

        {/* ── Room Cards ── */}
        <div className="room-cards">
          {rooms.map((room, idx) => (
            <div key={idx} className={`room-card${room.flip ? " flip" : ""}`}>
              {/* Image Side */}
              <div className="room-image-wrap">
                <div
                  className="room-image"
                  style={{ backgroundImage: `url(${room.image}) ` }}
                >
                  <div className="room-price-badge">
                    {room.Start} {room.price}
                  
                  </div>
                  <div className="room-tag-badge">{room.tag}</div>
                </div>
              </div>

              {/* Details Side */}
              <div className="room-details">
                <div>
                  <h3 className="room-title">{room.title}</h3>
                  <p className="room-subtitle">{room.subtitle}</p>
                </div>

                <ul className="room-features">
                  {room.features.map((f, i) => (
                    <li key={i} className="room-feature-item">
                      <span className="room-feature-icon">✦</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <button className="room-book-btn">{room.book}</button>
              </div>
            </div>
          ))}
        </div>

        {/* ── Price Strip ── */}
        <div className="room-price-strip">
          <div>
            <p className="strip-label">Price Starts From</p>
            <p className="strip-price">
              ₹799 <span>/night</span>
            </p>
          </div>

          <div className="strip-divider" />

          <div className="strip-includes">
            <p className="strip-label">Includes</p>
            <p>
              Free Breakfast · Free Wi-Fi
              <br />
              24/7 Support · Easy Cancellation
            </p>
          </div>

          <button className="strip-avail-btn"  >Check Availability</button>
        </div>
      </div>
    </>
  );
};

export default Room;
