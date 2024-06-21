import React, { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./style.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { useAppSelector } from "../../redux/hooks";
import { Link } from "react-router-dom";
import axiosBase from "../../axios/axiosBase";

const Reviews = () => {
  const user = useAppSelector((state) => state.user.data);
  const [reviewsData, setData] = useState([]);
  useEffect(() => {
    axiosBase.get("/review").then(({ data }) => {
      setData(data);
    });
  }, []);
  const reviews = [
    {
      name: "Игорь",
      text: "Тестовый текс",
      rating: 3,
    },
    {
      name: "Мария",
      text: "Тестовый текс",
      rating: 4,
    },
    {
      name: "Петр",
      text: "Тестовый текс",
      rating: 5,
    },
  ];
  const renderRatingStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      // Закрашиваем звезды в соответствии с рейтингом
      if (i < rating) {
        stars.push(<FaStar key={i} className={styles.starFilled} />);
      } else {
        stars.push(<CiStar key={i} className={styles.starEmpty} />);
      }
    }
    return stars;
  };
  return (
    <div className={styles.reviews}>
      <div className={styles.container}>
        <h2>Отзывы гостей Глубоччины</h2>
        <div className={styles.wrapper}>
          <p className={styles.description}>
            Искренне рады приветствовать вас на Глубоччине – земле с богатой
            историей и крепкими культурными традициями.
          </p>
        </div>
        {reviewsData && true && (
          <Swiper
            className={styles.items}
            spaceBetween={20}
            slidesPerView={2.3}
          >
            ={" "}
            {reviewsData.map((item: any, index) => (
              <SwiperSlide key={index} virtualIndex={index}>
                <div className={styles.item}>
                  <span className={styles.text}>{item.text}</span>
                  <span className={styles.name}>{item.name}</span>
                  <div className={styles.rating}>
                    {renderRatingStars(item.rating)}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {user && (
          <Link to={"/reviews"} className={styles.btn}>
            Оставить отзыв
          </Link>
        )}
      </div>
    </div>
  );
};

export default Reviews;
