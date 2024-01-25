import { NavLink } from "react-router-dom";
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div>
      
      <section className={styles.section_footer}>
        <div className={styles.footerGroup1}>
          <div className={styles.miniNav}>
            <NavLink to="/">
              <img src="/logo.svg" alt="myteam logo" />
            </NavLink>
            <div className={styles.miniNavLinks}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? styles.active : "none"
                }
              >
                home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? styles.active : "none"
                }
              >
                about
              </NavLink>
            </div>
          </div>
          <div className={styles.contactInfoContainer}>
            <p>987 Hillcrest Lane</p>
            <p>Irvine, CA</p>
            <p>California 92714</p>
            <p>Call Us: 949-833-7432</p>
          </div>
        </div>

        <div className={styles.copyrightContainer}>
          <div className={styles.socials}>
            <a href="https://www.facebook.com">
              <img src="/icons8-facebook.svg" alt="" />
            </a>
            <a href="https://www.pinterest.com">
              <img src="/icons8-pinterest.svg" alt="" />
            </a>
            <a href="https://www.twitter.com">
              <img src="/icons8-twitter.svg" alt="" />
            </a>
          </div>
          <p>Copyright 2020. All Rights Reserved</p>
        </div>
      </section>
    </div>
  )
};

export default Footer ;
