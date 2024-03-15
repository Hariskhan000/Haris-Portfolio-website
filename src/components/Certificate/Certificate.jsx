import React from "react";

import styles from "./Certificate.module.css";
import { getImageUrl } from "../../utils";

export const Certificate = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Intership Certificate</h2>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="https://drive.google.com/file/d/1V_eVCSq8mDF5M5LgbhvtSkEy2chCoJpV/view?usp=sharing">
            <img
              src={getImageUrl("contact/certificate.png")}
              alt="Certificate icon"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
};
