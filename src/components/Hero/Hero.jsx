import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi I am Abraham</h1>
        <p className={styles.description}>
          I'm an Associate Software Engineer Traineee at Tarento Technologies!
        </p>
        
      </div>
      <img
        src={getImageUrl("hero/Abraham2.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
