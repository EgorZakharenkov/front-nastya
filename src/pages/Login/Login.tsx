import React, {FormEvent, useState} from "react";
import { Button, TextField } from "@mui/material";
import { fetchRegister, fetchUserData } from "../../redux/slices/user";
import { useAppDispatch } from "../../redux/hooks";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const validateEmail = (email:string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const login = async (e:FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError(true);
      return;
    }
    setEmailError(false);

    const values = {
      email,
      password,
    };
    const data = await dispatch(fetchUserData(values));
    if (!data.payload) return alert("Не удалось зарегистрироваться");

    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
      navigate("/");
    }
  };

  return (
      <div className={styles.login}>
        <form
            onSubmit={login}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <TextField
              label="Email"
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              error={emailError}
              helperText={emailError ? "Введите корректный email" : ""}
          />
          <TextField
              label="Пароль"
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Пароль"
          />
          <Button type="submit" variant="contained">
            Войти
          </Button>
          <span>
          Нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
        </span>
        </form>
      </div>
  );
};

export default Login;
