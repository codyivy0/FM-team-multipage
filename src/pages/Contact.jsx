import styles from "./Contact.module.css";
const Contact = () => {
  return (
    <>
      <section className={styles.contactContainer}>
        <div>
          <h1>Contact</h1>
          <h2 className={styles.accent}>Ask us about</h2>
          <div className={styles.askCard}>
            <img src="/icon-person.svg" alt="icon of person" />
            <p>The quality of our work</p>
          </div>
          <div className={styles.askCard}>
            <img src="/icon-cog.svg" alt="icon of cog" />
            <p>Usage & implementation of our software</p>
          </div>
          <div className={styles.askCard}>
            <img src="/icon-chart.svg" alt="icon of chart" />
            <p>How we help drive innovation</p>
          </div>
        </div>

        <div>
          Form stuff
        </div>
      </section>
    </>
  );
};

export default Contact;
