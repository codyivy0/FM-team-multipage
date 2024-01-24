import styles from "./Homepage.module.css";
const Homepage = () => {
  return (
    <section className={styles.section_find}>
      <div className={styles.findContent}>
        <h1>
          Find the best <span className={styles.accent}>talent</span>
        </h1>
        <p>
          Finding the right people and building high performing teams can be hard.
          Most companies arent tapping into the abundance of global talent. Were
          about to change that.
        </p>
      </div>
    </section>
  );
};

export default Homepage;
