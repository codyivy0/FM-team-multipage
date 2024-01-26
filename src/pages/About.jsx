import Directors from "../components/Directors/Directors";
import Footer from "../components/Footer/Footer";
import GetStarted from "../components/GetStarted/GetStarted";
import styles from "./About.module.css";

const About = () => {
  return (
    <>
      <section className={styles.section_about}>
        <h1>About</h1>
        <p>
          We help companies build dynamic teams made up of top global talent.
          Using our network of passionate professionals we drive innovation and
          deliver incredible outcomes. Talented, diverse teams shape the best
          products and experiences. We&apos;ll bring those teams to you.
        </p>
      </section>
      <Directors />
      <GetStarted />
      <Footer />
    </>
  );
};

export default About;
