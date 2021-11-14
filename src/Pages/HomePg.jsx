import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Card from "../Components/Card/Card";
import { dataa } from "../Pages/dataa";
import styles from "./Homepg.module.css";
import axios from "axios";
const HomePg = () => {
  // console.log(dataa);
  const [data, setData] = useState(dataa);

  useEffect(() => {
    axios
      .get("http://localhost:3001/data")
      .then((res) => {
        console.log("res:", res);
        setData(res.data);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className={styles.mainContHome}>
        {data.map((el, id) => (
          <Card data={el} key={id} />
        ))}
      </div>
    </div>
  );
};

export default HomePg;
