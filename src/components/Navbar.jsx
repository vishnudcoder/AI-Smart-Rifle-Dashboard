import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <h2>🎯 AI Rifle</h2>

      <div className="menu">

        <Link to="/">Home</Link>

        <Link to="/dashboard">Dashboard</Link>

        <Link to="/about">About</Link>

      </div>

    </nav>
  );
}

export default Navbar;