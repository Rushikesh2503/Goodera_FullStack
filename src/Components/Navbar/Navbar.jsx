import React from "react";
import Search from "../SearchBox/Search";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav>
      <div className={styles.navbarMainCont}>
        <div className={styles.navbarContWP}>
          <div className={styles.lfLinks}>
            <img
              src="https://i.ibb.co/khbPKB4/jobHunt.png"
              alt="jobHunt"
              border="0"
              className={styles.logoImg}
            />
            <h3 className={styles.highLighten}>Find Jobs</h3>
            <h3>Upskill Yourself</h3>
          </div>
          <div className={styles.rtLinks}>
            <h3>Post A Job</h3>
            <h3>Sign In</h3>
          </div>
        </div>
        <div>
          <h1>Find Your Dream Job</h1>
          <p>
            Browse through thousands of full-time and part-time jobs near you
          </p>
        </div>
        <Search />
      </div>
    </nav>
  );
};

export default Navbar;
