import React, { useState } from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout } from "../../redux/slices/user";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { label: "Главная", path: "/" },
    { label: "История", path: "/history" },
    { label: "Достопримечательности", path: "/dost" },
    // { label: "Отели", path: "/hotels" },
    // { label: "Развлечения", path: "/" },
    // { label: "Фотогалерея", path: "/" },
  ];

  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.data);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Link to={"/"}><img src="./img/logoGlu.jpg" alt="Logo" /></Link>
        <button className={styles.menuToggle} onClick={handleMenuToggle}>
          ☰
        </button>
        <div className={`${styles.links} ${isMenuOpen ? styles.open : ""}`}>
          {links.map((link, index) => (
            <Link key={index} className={styles.link} to={link.path}>
              {link.label}
            </Link>
          ))}
          {user ? (
            <button
              style={{ marginTop: "7px", cursor: "pointer" }}
              onClick={() => dispatch(logout())}
              className={styles.link}
            >
              Выйти
            </button>
          ) : (
            <Link className={styles.link} to={"/login"}>
              Войти
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
