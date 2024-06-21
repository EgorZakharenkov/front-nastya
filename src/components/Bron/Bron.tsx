import React from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
const Bron = () => {
  return (
    <div className={styles.bron}>
      <div className={styles.info}>
        <h2>
          Не знаете с чего начать? Не стесняйтесь спрашивать нас. Мы предоставим
          лучших экскурсионных гидов в глубоком.
        </h2>
        <p>
          Глубокое – один из красивейших городов Беларуси, расположенный в
          окружении нескольких озер, одно из которых и дало ему название.
        </p>
        <Link to={"/bron"}>Забронировать</Link>
      </div>
      <img src="./img/gid.jpg" alt="" />
    </div>
  );
};

export default Bron;
