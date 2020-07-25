import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const Nav = () => {
  return (
    <div
      className="div_nav"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
      data-aos-offset="0"
    >
      {" "}
      <div className="div_logo">
        <Link to="/" className="div_filmsdart">
          Films d' art
        </Link>
      </div>
      <div className="div_bar">
        <Link to="/about" className="div_Link">
          About
        </Link>
        <Link to="/film" className="div_Link">
          Our Films
        </Link>
        <Link to="/whatWeDo" className="div_Link">
          What we do
        </Link>
        <Link to="/contact" className="div_Link">
          Contact us
        </Link>
      </div>
    </div>
  );
};

export default Nav;
