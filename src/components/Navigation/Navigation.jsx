import { useState } from "react";
import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.css";
import Button from "../Button/Button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav>
      <div className={`${styles.overlay} ${isOpen ? styles.open : ""}`} />

      <div className={styles.navGroup}>
        <NavLink to="/">
          <img src="/logo.svg" alt="my team logo" className={styles.navLogo} />
        </NavLink>

        <section className={styles.desktopNav}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "none")}
          >
            home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : "none")}
          >
            about
          </NavLink>
        </section>
      </div>

      <NavLink to="/contact" className={styles.desktopNav} onClick={toggleMenu}>
        <Button>contact us</Button>
      </NavLink>

      <button onClick={toggleMenu} className={styles.toggleMenu}>
        {isOpen ? (
          ''
        ) : (
          <img src="/icon-menu.svg" alt="open menu" />
        )}
      </button>

      {/* MOBILE MENU */}
      <section className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <button onClick={toggleMenu} className={styles.toggleMenu}>
          <img src="/icon-close.svg" alt="close menu" />
        </button>
        <ul className={styles.mobileNavList}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : "none")}
              onClick={toggleMenu}
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? styles.active : "none")}
              onClick={toggleMenu}
            >
              about
            </NavLink>
          </li>
          <li className={styles.mobileContactBtn}>
            <NavLink to="/contact" onClick={toggleMenu}>
              <Button>contact us</Button>
            </NavLink>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Navigation;
