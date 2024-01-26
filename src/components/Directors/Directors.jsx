import { useState } from "react";
import styles from "./Directors.module.css";
import PropTypes from "prop-types";

const Directors = () => {
  const cardData = [
    {
      picture: "/avatar-nikita.jpg",
      name: "Nikita Marks",
      title: "Founder & CEO",
      text: "“It always amazes me how much talent there is in every corner of the globe.”",
    },
    {
      picture: "/avatar-christian.jpg",
      name: "Cristian Duncan",
      title: "Co-founder & COO",
      text: "“Distributed teams required unique processes. You need to approach work in a new way.”",
    },
    {
      picture: "/avatar-cruz.jpg",
      name: "Cruz Hamer",
      title: "Co-founder & CTO",
      text: "“Technology is at the forefront of enabling distributed teams. That's where we come in.”",
    },
    {
      picture: "/avatar-drake.jpg",
      name: "Drake Heaton",
      title: "Business Development Lead",
      text: "“Hiring similar people from similar backgrounds is a surefire way to stunt innovation.”",
    },
    {
      picture: "/avatar-griffin.jpg",
      name: "Griffin Wise",
      title: "Lead Marketing",
      text: "“Unique perspectives shape unique products, which is what you need to survive these days.”",
    },
    {
      picture: "/avatar-aden.jpg",
      name: "Aden Allan",
      title: "Head of Talent",
      text: "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
    },
  ];
  return (
    <section className={styles.section_directors}>
      <h1>Meet the directors</h1>

      <div className={styles.directorCardContainer}>
        {cardData.map((card, index) => {
          return <Card key={index} {...card} />;
        })}
      </div>
    </section>
  );
};

const Card = ({ picture, name, title, text }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  function flipCard() {
    setIsFlipped(!isFlipped);
  }
  return (
    <div
      className={`${styles.directorCard} ${isFlipped ? styles.flipped : ""}`}
    >
      {!isFlipped && (
        <>
          <img src={picture} alt={name + title} />
          <h3>{name}</h3>
          <p>{title}</p>
        </>
      )}
      {isFlipped && (
        <>
          <h3>{name}</h3>
          <p>{text}</p>
          <div className={styles.directorSocials}>
            <a href="#">
              <img src="/icons8-twitter.svg" alt="twitter" />
            </a>
            <a href="#">
              <img src="/icon-linkedin.svg" alt="linkedIn" />
            </a>
          </div>
        </>
      )}
      <div
        className={`${styles.cardBtn} ${
          isFlipped ? styles.cardBtnFlipped : ""
        }`}
        onClick={() => flipCard()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill=""
          className={styles.cardBtnIcon}
        >
          <path
            d="M12 2C11.45 2 11 2.45 11 3V21C11 21.55 11.45 22 12 22C12.55 22 13 21.55 13 21V3C13 2.45 12.55 2 12 2ZM3 11C2.45 11 2 11.45 2 12C2 12.55 2.45 13 3 13H21C21.55 13 22 12.55 22 12C22 11.45 21.55 11 21 11H3Z"
            stroke="#012f34"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
};

Card.propTypes = {
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Directors;
