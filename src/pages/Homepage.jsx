import styles from "./Homepage.module.css";
const Homepage = () => {
  return (
    <>
      {/*FIND SECTION */}
      <section className={styles.section_find}>
        <div className={styles.findContent}>
          <h1 className={styles.findHeader}>
            Find the best <span className={styles.accent}>talent</span>
          </h1>
          <p className={styles.findText}>
            Finding the right people and building high performing teams can be
            hard. Most companies arent tapping into the abundance of global
            talent. Were about to change that.
          </p>
        </div>
      </section>

      {/*BUILD SECTION */}

      <section className={styles.section_build}>
        <h2 className={styles.buildHeader}>
          Build & manage distributed teams like no one else.
        </h2>

        <div className={styles.cardContainer}>
          <div className={styles.buildCard}>
            <img src="/icon-person.svg" alt="person icon" />
            <div className={styles.buildTextContent}>
              <h3 className={styles.accent}>Experienced Individuals</h3>
              <p>
                Our network is made up of highly experienced professionals who
                are passionate about what they do.
              </p>
            </div>
          </div>
          <div className={styles.buildCard}>
            <img src="/icon-cog.svg" alt="cog icon" />
            <div className={styles.buildTextContent}>
              <h3 className={styles.accent}>Easy to Implement</h3>
              <p>
                Our processes have been refined over years of implementation
                meaning our teams always deliver.
              </p>
            </div>
          </div>
          <div className={styles.buildCard}>
            <img src="/icon-chart.svg" alt="chart icon" />
            <div className={styles.buildTextContent}>
              <h3 className={styles.accent}>Enhanced Productivity</h3>
              <p>
                Our customized platform with in-built analytics helps you manage
                your distributed teams.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
