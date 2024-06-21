import React from "react";
import styles from "./style.module.scss";
const Lifes = () => {
  const lifes = [
    {
      image: "./img/h1.jpg",
      title: "Усадьба у Якимовича",
      description:
        "«Усадьба у Якимовича» (ул. Гагарина, 20) – это трехэтажный коттедж в центре города, комнаты в котором обустроены под номера. Сюда любят съезжаться байкеры, ведь хозяин усадьбы руководит байкерским клубом. Еще здесь можно взять напрокат велосипеды – их выдают только жильцам гостиницы, или сходить в баню за € 9. Стоимость двухместного номера – € 18",
    },
    {
      image: "./img/h2.jpg",
      title: "Усадьба у Якимовича",
      description:
        "Если хочешь не путешествовать, а отдыхать и укреплять здоровье, есть и такие варианты. В Глубокском районе расположен один из топовых беларусских санаториев «Плисса» (д. Плисса, ул. Гвардейская, 4). Огромный, дорогой и с самыми разными оздоровительными услугами. Стоимость двухместного номера от € 85 (питание включено).",
    },
    {
      image: "./img/h3.jpg",
      title: "База отдыха чечели",
      description:
        "В деревне Володьково расположена известная на всю Беларусь усадьба «Родны кут» (ул. Центральная,2), где беларускамоўным дают скидку в 20%, а пожить предлагают в обычных сельских домах без пластика и цивилизации, как у бабушки в деревне. Домик на сутки обойдется в € 14,5.",
    },
    {
      image: "./img/h4.jpg",
      title: "Усадьба родны кут",
      description:
        "Много предложений и на базе отдыха «Чечели» (д. Чечели, ул. Озерная, 1б), где проживание на двоих стоит от € 27 в сутки. Для размещения гостей предлагаются номера различного уровня комфортности в корпусе гостиницы.Наслаждение прогулками, наблюдение за животными, рыбалка, сауна - что ещё нужно для отдыха на природе!?",
    },
  ];
  return (
    <div id="#hotels" className={styles.lifes}>
      <div className={styles.container}>
        <h2>Небольшой город на севере Беларуси</h2>
        <div className={styles.wrapper}>
          <p className={styles.description}>
            Степень благоустроенности номера не главное на отдыхе в городе
            Глубокое , ведь сюда приезжают прежде всего ради прекрасной природы
            и зеркальных озер.
          </p>
        </div>

        <div className={styles.items}>
          {lifes.map((item) => (
            <div className={styles.item}>
              <img src={item.image} alt="" />
              <span className={styles.title}>{item.title}</span>
              <span className={styles.description}>{item.description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lifes;
