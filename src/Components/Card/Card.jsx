import React from "react";
import styles from "./Card.module.css";
import { useHistory } from "react-router";
const Card = ({ data, id }) => {
  console.log("dataCard:", data);
  let his = useHistory();
  const handleView = () => {
    his.push(`/jobs/${id}`);
  };
  return (
    <div className={styles.cardMainDivC}>
      <div className={styles.ltContCard}>
        <img src={data.image} alt="log" />
      </div>
      <div className={styles.rtContCard}>
        <h4>{data.title}</h4>
        <p>{data.description}</p>
        <button className={styles.rtContCardBtn} onClick={handleView}>
          View Details
        </button>
      </div>
    </div>
  );
};

export default Card;
