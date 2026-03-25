import { useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Cormorant+Garamond:wght@300;400;500&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .footer {
    background: #1a1209;
    color: #e8d9c0;
    font-family: 'Cormorant Garamond', serif;
    position: relative;
    overflow: hidden;
  }

  .footer::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #c9a84c, #e8d9c0, #c9a84c, transparent);
  }

  .footer-top {
    padding: 60px 50px 40px;
    display: grid;
    grid-template-columns: 1.4fr 1fr 1fr 1fr;
    gap: 40px;
    border-bottom: 1px solid rgba(201,168,76,0.2);
  }

  .brand-col {}

  .brand-logo {
    font-family: 'Playfair Display', serif;
    font-size: 26px;
    font-weight: 600;
    color: #c9a84c;
    letter-spacing: 2px;
    margin-bottom: 6px;
    line-height: 1.2;
  }

  .brand-tagline {
    font-size: 13px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: rgba(232,217,192,0.5);
    margin-bottom: 20px;
    font-weight: 300;
  }

  .brand-desc {
    font-size: 15px;
    line-height: 1.8;
    color: rgba(232,217,192,0.75);
    font-weight: 300;
    margin-bottom: 24px;
  }

  .social-row {
    display: flex;
    gap: 12px;
  }

  .social-btn {
    width: 36px; height: 36px;
    border: 1px solid rgba(201,168,76,0.4);
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    color: #c9a84c;
    cursor: pointer;
    transition: all 0.3s;
    font-size: 14px;
    background: transparent;
    text-decoration: none;
  }

  .social-btn:hover {
    background: #c9a84c;
    color: #1a1209;
    border-color: #c9a84c;
  }

  .col-title {
    font-family: 'Playfair Display', serif;
    font-size: 14px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #c9a84c;
    margin-bottom: 20px;
    font-weight: 400;
    position: relative;
    padding-bottom: 12px;
  }

  .col-title::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0;
    width: 28px; height: 1px;
    background: #c9a84c;
  }

  .footer-links {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .footer-links li a {
    color: rgba(232,217,192,0.7);
    text-decoration: none;
    font-size: 15px;
    font-weight: 300;
    transition: color 0.2s;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  .footer-links li a::before {
    content: '›';
    color: #c9a84c;
    opacity: 0;
    transition: opacity 0.2s, transform 0.2s;
    transform: translateX(-6px);
    font-size: 18px;
  }

  .footer-links li a:hover {
    color: #c9a84c;
  }

  .footer-links li a:hover::before {
    opacity: 1;
    transform: translateX(0);
  }

  .contact-item {
    display: flex;
    gap: 12px;
    margin-bottom: 16px;
    align-items: flex-start;
  }

  .contact-icon {
    color: #c9a84c;
    font-size: 16px;
    margin-top: 2px;
    flex-shrink: 0;
  }

  .contact-text {
    font-size: 14px;
    line-height: 1.7;
    color: rgba(232,217,192,0.7);
    font-weight: 300;
  }

  .newsletter-col {}

  .newsletter-desc {
    font-size: 14px;
    color: rgba(232,217,192,0.65);
    line-height: 1.7;
    font-weight: 300;
    margin-bottom: 16px;
  }

  .newsletter-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .newsletter-input {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(201,168,76,0.25);
    color: #e8d9c0;
    padding: 11px 14px;
    font-family: 'Cormorant Garamond', serif;
    font-size: 14px;
    outline: none;
    transition: border-color 0.2s;
    border-radius: 2px;
  }

  .newsletter-input::placeholder { color: rgba(232,217,192,0.3); }
  .newsletter-input:focus { border-color: #c9a84c; }

  .newsletter-btn {
    background: #c9a84c;
    color: #1a1209;
    border: none;
    padding: 11px 20px;
    font-family: 'Playfair Display', serif;
    font-size: 13px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    cursor: pointer;
    transition: background 0.2s;
    border-radius: 2px;
    font-weight: 600;
  }

  .newsletter-btn:hover { background: #e8d9c0; }

  .footer-bottom {
    padding: 20px 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;
  }

  .copyright {
    font-size: 13px;
    color: rgba(232,217,192,0.4);
    font-weight: 300;
    letter-spacing: 0.5px;
  }

  .bottom-links {
    display: flex;
    gap: 20px;
    list-style: none;
  }

  .bottom-links a {
    font-size: 12px;
    color: rgba(232,217,192,0.4);
    text-decoration: none;
    letter-spacing: 0.5px;
    transition: color 0.2s;
  }

  .bottom-links a:hover { color: #c9a84c; }

  /* ── RESPONSIVE ≤ 600px ── */
  @media (max-width: 600px) {
    .footer-top {
      grid-template-columns: 1fr;
      padding: 40px 22px 32px;
      gap: 32px;
    }

    .brand-logo { font-size: 22px; }

    .footer-bottom {
      padding: 18px 22px;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }

    .bottom-links { flex-wrap: wrap; gap: 14px; }
  }
`;

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim()) { setSubscribed(true); setEmail(""); }
  };

  return (
    <>
      <style>{styles}</style>
      <footer className="footer">
        <div className="footer-top">

          {/* Brand */}
          <div className="brand-col">
            <div className="brand-logo">🏡 Haveli Stay</div>
            <div className="brand-tagline">A Heritage Experience</div>
            <p className="brand-desc">
              Rajasthan ki rooh mein basee ek khubsoorat panaah-gaah — jahan
              purani riwayat aur aadhunik aaram ka adbhut sangam milta hai.
            </p>
            <div className="social-row">
              {["f", "in", "📷", "✉"].map((ic, i) => (
                <a key={i} href="#" className="social-btn">{ic}</a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="col-title">Quick Links</div>
            <ul className="footer-links">
              {["Home", "Rooms & Suites", "About Us", "Gallery", "Reviews", "Book Now"].map(l => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="col-title">Contact</div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span className="contact-text"><br />Ringuss,railway Staition</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <span className="contact-text">+91 99831156</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉</span>
              <span className="contact-text">stay@havelistay.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🕐</span>
              <span className="contact-text">Check-in: 24 Time<br />Check-out: AnyTime</span>
            </div>
          </div>

          {/* Newsletter */}
          <div className="newsletter-col">
            <div className="col-title">Newsletter</div>
            <p className="newsletter-desc">
              Khaas offers, seasonal packages aur nayi suvidhaon ki jaankari
              sabse pehle paaiye.
            </p>
            {subscribed ? (
              <p style={{ color: "#c9a84c", fontSize: 14 }}>
                ✓ Shukriya! Aap subscribe ho gaye hain.
              </p>
            ) : (
              <div className="newsletter-form">
                <input
                  className="newsletter-input"
                  type="email"
                  placeholder="Aapka email darj karein..."
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && handleSubscribe()}
                />
                <button className="newsletter-btn" onClick={handleSubscribe}>
                  Subscribe
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <span className="copyright">
            © 2026 Haveli Stay. Sabhi adhikar surakshit hain.
          </span>
          <ul className="bottom-links">
            {["Privacy Policy", "Terms of Use", "Cookie Policy"].map(l => (
              <li key={l}><a href="#">{l}</a></li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
}
export default Contact;