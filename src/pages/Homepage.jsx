import styles from "./Homepage.module.css";
const Homepage = () => {
  return (
    <>
      {/*FIND SECTION */}
      <section className={styles.section_find}>
        <div className={styles.findContent}>
          <h1>
            Find the best <span className={styles.accent}>talent</span>
          </h1>
          <p>
            Finding the right people and building high performing teams can be
            hard. Most companies arent tapping into the abundance of global
            talent. Were about to change that.
          </p>
        </div>
      </section>

      {/*BUILD SECTION */}

      <section className={styles.section_build}>
        <h2 className={styles.buildHeader}>
          Build and manage distributed teams like no one else
        </h2>
        <div className={styles.cardContainer}>
          <div className={styles.buildCard}>
            <h3 className={styles.accent}>Experienced Individuals</h3>
            <p>
              Our network is made up of highly experienced professionals who are
              passionate about what they do
            </p>
          </div>
          <div className={styles.buildCard}>
            <h3 className={styles.accent}>Experienced Individuals</h3>
            <p>
              Our network is made up of highly experienced professionals who are
              passionate about what they do
            </p>
          </div>
          <div className={styles.buildCard}>
            <h3 className={styles.accent}>Experienced Individuals</h3>
            <p>
              Our network is made up of highly experienced professionals who are
              passionate about what they do
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
