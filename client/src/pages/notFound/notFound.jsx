import React from "react";
import "../notFound/notFound.css";
import Header from "../../components/header";
import Sad from "../../Image/SadMonkey.jpg";

const NotFound = () => {
  return (
    <div>
      <Header />
      <div className="notFound__wrapper">
        <img className="notFound__image" src={Sad} alt="sad monkey" />
        <p className="notFound__p" style={{ fontSize: "80px" }}>
          404
        </p>
        <p style={{ fontSize: "44px" }}>Ошибка!!! Такой страницы нет.</p>
      </div>
    </div>
  );
};

export default NotFound;
