import React from "react";
import styles from "../../style.module.scss";
import Destination from "../../components/Destination/Destination";
import Lifes from "../../components/Lifes/Lifes";
import Reviews from "../../components/Reviews/Reviews";
import Bron from "../../components/Bron/Bron";
import Advice from "../../components/Advice/Advice";

const Main = () => {
  return (
    <div>
      <img className={styles.image} src="./img/heri_bg1.jpg" alt="" />
      <Destination />
      <Lifes />
      <Reviews />
      <Bron />
      <Advice />
    </div>
  );
};

export default Main;
