import React, { useState, FormEvent } from "react";
import styles from "./styles.module.scss";
import { Button, TextField } from "@mui/material";
import { useAppSelector } from "../../redux/hooks";
import axiosBase from "../../axios/axiosBase";

const ReviewPage: React.FC = () => {
  const user = useAppSelector((state) => state.user.data);
  const [text, setText] = useState<string>("");
  const [rating, setRating] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const review = {
      text,
      rating: Math.min(5, Math.max(0, Number(rating))), // Ensure rating is between 0 and 5
      name: user.email,
    };
    axiosBase.post("/review", review);
    setRating("");
    setText("");
  };

  return (
      <div>
        {user ? (
            <div className={styles.reviews}>
              <form onSubmit={handleSubmit}>
                <h2>Оставьте свой отзыв</h2>
                <TextField
                    label="Текст"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <TextField
                    type="number"
                    value={rating}
                    label="Рейтинг"
                    onChange={(e) => setRating(e.target.value)}
                    inputProps={{ min: 0, max: 5, step: 1 }}
                />
                <Button type="submit" variant="contained">
                  Отправить
                </Button>
              </form>
            </div>
        ) : (
            <div style={{ padding: "200px" }}>Войдите чтобы оставлять отзывы</div>
        )}
      </div>
  );
};

export default ReviewPage;
