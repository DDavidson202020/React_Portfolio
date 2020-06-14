import React from "react";
import { Link, useLocation } from "react-router-dom";
import badge from "./components/images/Badge.png";
function NavTabs() {

  const location = useLocation();

  return (
    <div className="navbar navbar-expand-lg">
      <h2 style={{marginLeft: 20}} id="name">Dung Davidson</h2>
      <a href="https://badgr.com/public/assertions/xG2y5KuLSJ2g8EMQLFfPsg" target="_blank" rel="noopener noreferrer" style={{marginLeft: "35%"}}><img src={badge} alt="badge" height="60" width="60" /></a>
      <ul className="nav navbar-brand collapse navbar navbar-collapse">
      
        <li className="nav-item">
          <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/portfolio"
            className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
          >
            Contact
          </Link>
        </li>

      </ul>
    </div>
  );
}

export default NavTabs;