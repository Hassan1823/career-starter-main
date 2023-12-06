import React from "react";
import "./style.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import OtpInput from "react-otp-input";
function Step7({ EmailAddress }) {
  const [otp, setOtp] = useState("");
  return (
    <motion.div
      id="Step7Dk39"
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
          <h3>/welcome to varyance</h3>
          <p>
            We sent an email to <strong> {EmailAddress} </strong>
            Enter the verification code to complete your registration.
          </p>
        </div>

        <div className="otp_wrapper">
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderSeparator={<span className="Seperator" />}
            renderInput={(props) => <input {...props} className="OTPInput" />}
          />
          <div className="TermsCHck">
            <input type="checkbox" className="CheckBoxInput" />
            <p>
              You agree to our <span>Terms of Use </span> and
              <span> Privacy Policy</span>.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Step7;
