import React from "react";
import styles from "./style.module.scss";

const Footer = () => {
  const footer = [
    {
      title: "О городе",
      info: [
        "Адрес райисполкома: 211800, Витебская обл., г. Глубокое, ул. Ленина, 42",
      ],
    },
    {
      title: "БЫСТРЫЕ ССЫЛКИ",
      info: [
        "Руководство райисполкома",
        "Объявления",
        "Справочно-информационная служба",
        "Контакты",
      ],
    },
    {
      title: "НОВОСТНАЯ РАССЫЛКА",
      info: ["Для тех кто хочет быть в центре событий города."],
    },
  ];
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        {footer.map((info, index) => (
          <div className={styles.item} key={index}>
            <h2>{info.title}</h2>
            <div className={styles.info}>
              {info.info.map((item, idx) => (
                <span key={idx}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
