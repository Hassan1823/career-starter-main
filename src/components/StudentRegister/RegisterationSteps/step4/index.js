import React from "react";
import "./style.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import logo1 from "../../../../assets/images/logosCOmpany/bcg.png";
import logo2 from "../../../../assets/images/logosCOmpany/google.png";
import logo3 from "../../../../assets/images/logosCOmpany/lufthansa.png";
import logo4 from "../../../../assets/images/logosCOmpany/bmw.png";
import Slider from "react-slick";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
function Step4({}) {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className="Next_arrow" onClick={onClick}>
        <MdKeyboardArrowRight size={16} />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className="Prev_arrow" onClick={onClick}>
        <MdKeyboardArrowLeft size={16} />
      </div>
    );
  }
  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <motion.div
      id="Step4Kxi39"
      initial={{ opacity: 0.2, scale: 0.2, x: "50%" }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="stepWrapper">
        {/* <div className="backButton" onClick={() => BackSetp()}>
          <h6>
            <IoIosArrowBack /> {"    "}
            Back
          </h6>
        </div> */}
        <div className="section_title">
          <h3>/build your network</h3>
        </div>
        <div className="LogoSlides">
          <Slider {...settings}>
            <div className="card_wrapper">
              <div className="card">
                <img src={logo1} alt="logo" className="Logo_img img-fluid" />
              </div>
            </div>
            <div className="card_wrapper">
              <div className="card">
                <img src={logo2} alt="logo" className="Logo_img img-fluid" />
              </div>
            </div>
            <div className="card_wrapper">
              <div className="card">
                <img src={logo3} alt="logo" className="Logo_img img-fluid" />
              </div>
            </div>
            <div className="card_wrapper">
              <div className="card">
                <img src={logo4} alt="logo" className="Logo_img img-fluid" />
              </div>
            </div>
            <div className="card_wrapper">
              <div className="card">
                <img src={logo1} alt="logo" className="Logo_img img-fluid" />
              </div>
            </div>
            <div className="card_wrapper">
              <div className="card">
                <img src={logo2} alt="logo" className="Logo_img img-fluid" />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </motion.div>
  );
}

export default Step4;
