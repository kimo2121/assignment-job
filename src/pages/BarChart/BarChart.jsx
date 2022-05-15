import React from "react";
import { useNavigate } from "react-router-dom";
import Chart from "../../components/Chart/Chart";
import "./styles.scss";
import image from "../../assets/image.png";

const BarChart = () => {
  const navigate = useNavigate();

  const back = () => {
    navigate("/");
  };

  return (
    <div className="Chart__page">
      <button className="Back__btn" onClick={back}>
        HOME
      </button>
      <img src={image} alt="" />
      <Chart />
    </div>
  );
};

export default BarChart;
