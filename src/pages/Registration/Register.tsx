import React, { useState, FormEvent } from "react";
import { Button, TextField } from "@mui/material";
import { useAppDispatch } from "../../redux/hooks";
import { fetchRegister } from "../../redux/slices/user";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";

const Register: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const register = async (e: FormEvent) => {
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

    const data = await dispatch(fetchRegister(values));
    if (!data.payload) return alert("Не удалось зарегистрироваться");

    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
      navigate("/");
    }
  };

  return (
      <div className={styles.register}>
        <form
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            onSubmit={register}
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
            Зарегистрироваться
          </Button>
          <span>
          Есть аккаунт? <Link to="/login">Войти</Link>
        </span>
        </form>
      </div>
  );
};

export default Register;
