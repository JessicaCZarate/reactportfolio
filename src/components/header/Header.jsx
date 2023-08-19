import React from "react";
import { useState } from "react";
import "./header.css";

const Header = () => {
  /*=================================Change Background Header========================================*/
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    // header add .scroll-header = scroll>200 viewport height
    if (this.scroll >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  /*=================================Toggle Menu========================================*/
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav_logo">
          JZFOLIO.
        </a>

        <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
          <ul className="nav_list grid">
            <li className="nav_item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav_link active-link" : "nav_link"
                }
              >
                <i className="uli uil-estate nav_icon"></i> Home
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#work"
                onClick={() => setActiveNav("#work")}
                className={
                  activeNav === "#work" ? "nav_link active-link" : "nav_link"
                }
              >
                <i className="uli uil-briefcase-alt nav_icon"></i> Work
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#education"
                onClick={() => setActiveNav("#education")}
                className={
                  activeNav === "#education"
                    ? "nav_link active-link"
                    : "nav_link"
                }
              >
                <i className="uli uil-university nav_icon"></i> Education
              </a>
            </li>
          </ul>

          <i
            class="uil uil-times nav_close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
