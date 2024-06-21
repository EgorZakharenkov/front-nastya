import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router";
import Main from "./pages/Main/Main";
import Register from "./pages/Registration/Register";
import Login from "./pages/Login/Login";
import ReviewPage from "./pages/Reviews/ReviewPage";
import { useAppDispatch } from "./redux/hooks";
import { fetchAuthMe, fetchUserData } from "./redux/slices/user";
import BronPage from "./pages/BronPage/BronPage";
import History from "./pages/History/History";
import Dost from "./pages/Dost/Dost";
function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/reviews"} element={<ReviewPage />} />
        <Route path={"/bron"} element={<BronPage />} />
          <Route path={"/history"} element={<History />} />
          <Route path={"/dost"} element={<Dost />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
