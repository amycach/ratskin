import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import "../styles/App.module.css";
import styles from "../styles/Header.module.css";

export default function Header() {

  return (
    <div className={styles.header_container}>
      <div className={styles.nav_container}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : styles.inactive)}
        >
          Home
        </NavLink>
        <NavLink
          to="/shows"
          className={({ isActive }) => (isActive ? styles.active : styles.inactive)}
        >
          Shows
        </NavLink>
        <NavLink
          to="/music"
          className={({ isActive }) => (isActive ? styles.active : styles.inactive)}
        >
          Music
        </NavLink>
        {/*<NavLink
          to="/meet-the-rats"
          className={({ isActive }) => (isActive ? styles.active : styles.inactive)}
        >
          Meet the Rats
        </NavLink> */}
        <NavHashLink
          smooth
          to="/#contact"
          className={styles.inactive}
        >
          Contact Us
        </NavHashLink>
        {/* <NavLink
          to="/fun"
          className={({ isActive }) => (isActive ? styles.active : styles.inactive)}
        >
          Fun
        </NavLink> */}
      </div>
    </div>
  );
}