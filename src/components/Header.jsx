import { Link } from "react-router-dom";

export default function Header(){
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="brand">ZeroVault</Link>
          <Link to="/about">About</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/dashboard" style={{marginLeft:'auto'}} className="badge">Dashboard</Link>
        </nav>
      </div>
    </header>
  );
}
