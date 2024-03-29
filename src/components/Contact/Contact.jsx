import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:hariskhan873715@gmail.com" target="_blank" rel="noopener noreferrer">
            hariskhan873715@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/muhammad-khan-a55211286/" target="_blank" rel="noopener noreferrer">
            linkedin.com/Haris-khan
          </a>
        </li>
        <li className={styles.link}>
          <img
            className="whatsapp"
            src={getImageUrl("contact/whatsapp.png")}
            alt="WhatsApp icon"
          />
          <a href="https://wa.me/03166208746" target="_blank" rel="noopener noreferrer">Whatsapp Contact</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/githubIcon.png")}
            alt="GitHub icon"
          />
          <a href="https://github.com/Hariskhan000/" target="_blank" rel="noopener noreferrer">
            https://github.com/Hariskhan000/
          </a>
        </li>
      </ul>
    </footer>
  );
};
