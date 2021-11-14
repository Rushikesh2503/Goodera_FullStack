import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Card from "../Components/Card/Card";
import { dataa } from "../Pages/dataa";
import styles from "./Homepg.module.css";
const HomePg = () => {
  // console.log(dataa);
  const [data, setData] = useState(dataa[0]);

  return (
    <div>
      <Navbar />
      <div className={styles.mainContHome}>
        {new Array(10).fill(data).map((el, id) => (
          <Card data={el} key={id} />
        ))}
      </div>
    </div>
  );
};

export default HomePg;
