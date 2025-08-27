import { Link } from "react-router-dom";

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-links">
          <Link to="/about">About Us</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div className="small">© 2025 ZeroVault</div>
      </div>
    </footer>
  );
}
