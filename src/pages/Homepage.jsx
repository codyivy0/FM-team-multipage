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

      {/* Social Proof Section */}
      <section className={styles.section_social}>
        <h1 className={styles.socialHeader}>
          Delivering real results for top companies. Some of our
          <span className={styles.clrLightGreen}> success stories.</span>
        </h1>
        <div className={styles.socialCardContainer}>
          <div className={styles.socialCard}>
            <p>
              &quot;The team perfectly fit the specialized skill set required.
              They focused on the most essential features helping us launch the
              platform eight months faster than planned.&quot;
            </p>
            <h3 className={styles.clrLightGreen}>Kady Baker</h3>
            <small>Product Manager at Bookmark</small>
            <img
              className={styles.socialAvatar}
              src="/avatar-kady.jpg"
              alt="Kady Baker product manager at Bookmark"
            />
          </div>

          <div className={styles.socialCard}>
            <p>
              &quot;We needed to automate our entire onboarding process. The
              team came in and built out the whole journey. Since going live,
              user retention has gone through the roof!&quot;
            </p>
            <h3 className={styles.clrLightGreen}>Aiysha Reese</h3>
            <small>Founder of Manage</small>
            <img
              className={styles.socialAvatar}
              src="/avatar-aiysha.jpg"
              alt="Aiysha reese founder of Manage "
            />
          </div>

          <div className={styles.socialCard}>
            <p>
              &quot;Amazing. Our team helped us build an app that delivered a
              new experience for hiring a physio. The launch was an instant
              success with 100k downloads in the first month.&quot;
            </p>
            <h3 className={styles.clrLightGreen}>Arthur Clarke</h3>
            <small>Co-founder of MyPhysio</small>
            <img
              className={styles.socialAvatar}
              src="/avatar-arthur.jpg"
              alt="Arthur Clarke Co-founder of MyPhysio"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
