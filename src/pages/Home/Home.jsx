import React from "react";
import Form from "../../components/Form/Form";
import "./styles.scss";
import image from "../../assets/image.png";

const Home = () => {
  return (
    <div className="Home">
      <div className="Home__left">
        <img src={image} alt="" />
        <div>
          <h1>Choose a date range</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>
      </div>
      <div className="Home__right">
        <h1>Create an account</h1>
        <Form />
      </div>
    </div>
  );
};

export default Home;
