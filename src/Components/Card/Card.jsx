import React from "react";
import styles from "./Card.module.css";
const Card = ({ data }) => {
  console.log("dataCard:", data);
  return (
    <div className={styles.cardMainDivC}>
      <div className={styles.ltContCard}>
        <img src={data.image} alt="log" />
      </div>
      <div className={styles.rtContCard}>
        <h4>{data.title}</h4>
        <p>{data.description}</p>
        <button className={styles.rtContCardBtn}>View Details</button>
      </div>
    </div>
  );
};

export default Card;
