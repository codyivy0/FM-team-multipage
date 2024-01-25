import Button from "../Button/Button";
import styles from "./GetStarted.module.css";
import { NavLink } from "react-router-dom";

const GetStarted = () => {
  return (
    <section className={styles.section_getStarted}>
      <h1>Ready to get started?</h1>
      <NavLink to="/contact">
        <Button className={styles.contactBtnGreen}>contact us</Button>
      </NavLink>
    </section>
  );
};

export default GetStarted;
