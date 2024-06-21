import React from "react";
import styles from "./style.module.scss";
const Destination = () => {
  const destinations = [
    {
      image: "./img/pic1.jpg",
      text: "Архитектура",
    },
    {
      image: "./img/d2.jpg",
      text: "Уик-Энд",
    },
    {
      image: "./img/d3.jpg",
      text: "Дешево, Сытно, Вкусно",
    },
  ];
  return (
    <div className={styles.destination}>
      <div className={styles.container}>
        <h2>Я здесь живу и край мне этот дорог</h2>
        <div className={styles.wrapper}>
          <p className={styles.description}>
            Город Глубокое – жемчужина на белорусской туристической карте.
            Захватывающая история и вековые памятники архитектуры ждут
            выбравшего отдых в Беларуси. Глубокое размещается в 160 километрах
            на север от Минска. Население города составляет более 18 тысяч
            человек.
          </p>
        </div>

        <div className={styles.items}>
          {destinations.map((item) => (
            <div className={styles.item}>
              <img src={item.image} alt="" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destination;
