import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { useState, useEffect } from "react";
import ReactCurvedText from "react-curved-text";
import logo from "../assets/ratskinlogopink.avif";
import "../styles/App.module.css";
import styles_global from "../styles/App.module.css";
import styles from "../styles/Header.module.css";

export default function Header() {

  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false;
  });

  return (
    <div className={styles_global.center_column}>
      <div className={styles.header_title}>
        <div className={styles.header_logo}>
          <img className={styles.logo} src={logo} alt="the ratskin family band" />
          <div className={styles.band_text}>
            <div>
              <ReactCurvedText
                width={isMobile ? 300 : 220}
                height={isMobile ? 60 : 150}
                cx={isMobile ? 140 : 50}
                cy={180}
                rx={150}
                ry={150}
                startOffset={isMobile ? 300 : 200}
                reversed={true}
                text="The World's First and only"
              />
            </div>
            <div className={styles.band_text_2}>
              <ReactCurvedText
                width={isMobile ? 300 : 170}
                height={140}
                cx={isMobile ? 150 : 20}
                cy={165}
                rx={140}
                ry={150}
                startOffset={isMobile ? 230 : 220}
                reversed={true}
                text="Drag Country Band"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.header_container}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : styles.inactive)}
        >
          Home
        </NavLink>
        <NavLink
          to="/bio"
          className={({ isActive }) => (isActive ? styles.active : styles.inactive)}
        >
          Bio
        </NavLink>
        <NavLink
          to="/music"
          className={({ isActive }) => (isActive ? styles.active : styles.inactive)}
        >
          Music
        </NavLink>
        <NavLink
          to="/shows"
          className={({ isActive }) => (isActive ? styles.active : styles.inactive)}
        >
          Shows
        </NavLink>
        <NavLink
          to="/press"
          className={({ isActive }) => (isActive ? styles.active : styles.inactive)}
        >
          Press
        </NavLink>
        <NavLink
          to="/meet-the-rats"
          className={({ isActive }) => (isActive ? styles.active : styles.inactive)}
        >
          Meet the Rats
        </NavLink>
        <NavHashLink
          smooth
          to="/#contact"
          className={styles.inactive}
        >
          Contact Us
        </NavHashLink>
      </div>
    </div>

  );
}