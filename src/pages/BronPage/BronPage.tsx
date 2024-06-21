import React from "react";
import styles from "./styles.module.scss";
import { useAppSelector } from "../../redux/hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import axiosBase from "../../axios/axiosBase";
const BronPage = () => {
  const user = useAppSelector((state) => state.user.data);
  const advices = [
    {
      image: "./img/b4.jpg",
      price: "40",
      title: "К хаски и индейцам",
      description:
        "В индейской деревне «Утрина» вас ждет незабываемый опыт: вы познакомитесь с дружелюбными хаски,\n" +
        "поучаствуете в различных соревнованиях, узнаете интересные легенды, поиграете на «волшебной дудке» и многое другое.\n" +
        "Не упустите свой шанс: погрузиться в поистине индейскую атмосферу!",
      date: "15 января 2024г.",
    },
    {
      image: "./img/b5.jpg",
      price: "15",
      title: "Тайны кармелитского монастыря",
      description:
        "осмотр архитектурных особенностей кафедрального собора Рождества Богородицы и его убранства;\n" +
        "" +
        "посещение подвалов храма и монастыря" +
        "" +
        "подъём на одну из башен храма и осмотр панорамы города.",

      date: "26 декабря 2023г.",
    },
    {
      image: "./img/b6.jpg",
      price: "150",
      title: "Тайны Ельни и Заповедного острова",
      description:
        "Это не просто экскурсия на Ельню, это уникальная возможность походить по самому крупному верховому болоту на болотоступах!\n" +
        "Вместе с нашим опытным местным гидом-проводником вы погрузитесь в историю и мифы, сплетенные веками вокруг этой загадочной земли.",

      date: "4 апреля 2024г.",
    },
    {
      image: "./img/b3.jpg",
      price: "15р",
      title: "Тайны кармелитского монастыря",
      description:
        "Осмотр архитектурных особенностей кафедрального собора Рождества Богородицы и его убранства;\n" +
        "\n" +
        "посещение подвалов храма и монастыря;\n" +
        "\n" +
        "подъём на одну из башен храма и осмотр панорамы города.",
      date: "26 декабря 2023г.",
    },
  ];

  const handleBron = (title: string) => {
    const data = {
      name: user.email,
      title: title,
      date: Date.now(),
    };
    axiosBase.post("/bron", data).then(() => {
      alert("Успешно забронировали");
    });
  };

  return (
    <div>
      {user ? (
        <div className={styles.bronPage}>
          <h2>Забронируйте поездку или экскурсию</h2>

          <Swiper spaceBetween={20} slidesPerView={3} className={styles.items}>
            {advices.map((advice) => (
              <SwiperSlide>
                <div className={styles.item}>
                  <img src={advice.image} alt="" />
                  <span className={styles.price}>{advice.price}р.</span>
                  <h3>{advice.title}</h3>
                  <span>{advice.description}</span>
                  <div className={styles.date}>{advice.date}</div>
                  <button
                    onClick={() => handleBron(advice.title)}
                    className={styles.btn}
                  >
                    Забронировать
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div style={{ padding: "200px" }}>
          Чтобы забронировать войдите в свой аккаунт
        </div>
      )}
    </div>
  );
};

export default BronPage;
