import { Link } from "react-router-dom";
import "./navbar.css";

export function Navbar() {
  return (
    <div className="navbar">
      <Link to="">
        <button className="navbutton">Home</button>
      </Link>
      <Link to="/products">
        <button className="navbutton">Products</button>
      </Link>
      <Link to="/about">
        <button className="navbutton">About Us</button>
      </Link>
      <Link to="/contact">
        <button className="navbutton">Contact Us</button>
      </Link>
      <Link to="/cart">
        <button className="navbutton">Cart</button>
      </Link>
    </div>
  );
}
