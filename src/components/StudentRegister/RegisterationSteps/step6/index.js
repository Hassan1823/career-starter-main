import React from "react";
import "./style.scss";
import { IoIosArrowBack } from "react-icons/io";
import logo from "../../../../assets/images/logo.png";
import flag from "../../../../assets/images/flags/flagGermany.png";
import interest1 from "../../../../assets/images/icons/money.png";
import interest2 from "../../../../assets/images/icons/airplane.png";
import { useState } from "react";
import { motion } from "framer-motion";
function Step6({ firstName, LastName, setEmailAddress }) {
  return (
    <motion.div
      id="Step6KSJen"
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
        {/* <div className="section_title">
          <h3>/your last name</h3>
        </div> */}
        <div className="Form_first_wrapper">
          <div className="row">
            <div className="col-lg-6">
              <div className="Input_wrapper">
                <input
                  type="email"
                  name="First_Name"
                  className="Name_field"
                  placeholder="jack.smith@ebs.edu"
                  onChange={(e) => setEmailAddress(e.target.value)}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card_wrapper">
                <div className="card">
                  <div className="row">
                    <div className="col">
                      <div className="nameLetter">
                        <h2>
                          {firstName?.length ? firstName?.slice(0, 1) : null}
                          {LastName?.length ? LastName?.slice(0, 1) : null}
                        </h2>
                      </div>
                    </div>
                    <div className="col">
                      <div className="CardLogo">
                        <img src={logo} />
                      </div>
                    </div>
                  </div>
                  <div className="card_details">
                    <h3>
                      {firstName} {LastName}
                    </h3>
                    <p>Student at EBS Universität für Wirtschaft und Recht</p>
                    <div className="card_moreInfo">
                      <div className="countryLogo">
                        <div className="imgCountryContainer">
                          <img src={flag} alt="" />
                        </div>
                        <p className="countryName">Germany</p>
                      </div>
                      <div className="interests">
                        <div className="interest_item">
                          <img
                            src={interest1}
                            alt=""
                            className="Interest_img_icon"
                          />
                          <p className="Interest_text">Finance</p>
                        </div>
                      </div>
                      <div className="interests">
                        <div className="interest_item">
                          <img
                            src={interest2}
                            alt=""
                            className="Interest_img_icon"
                          />
                          <p className="Interest_text">Consulting</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Step6;
