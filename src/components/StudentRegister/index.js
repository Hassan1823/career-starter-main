import React, { useEffect } from "react";
import "./styles.scss";
import Step1 from "./RegisterationSteps/step1";
import { IoReturnDownBackSharp } from "react-icons/io5";
import Step2 from "./RegisterationSteps/step2";
import { useState } from "react";
import { motion, useAnimate } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import { toast } from "react-toastify";
import bg1 from "../../assets/images/bg.png";
import bg2 from "../../assets/images/otp_bg.png";
import Step3 from "./RegisterationSteps/step3";
import Step4 from "./RegisterationSteps/step4";
import Step5 from "./RegisterationSteps/step5";
import Step6 from "./RegisterationSteps/step6";
import Step7 from "./RegisterationSteps/step7";
function StudentRegister() {
  const [currentStep, setCurrentStep] = useState(1);

  let lastStep = 7;
  let width = Math.floor(currentStep * (100 / lastStep));
  const [scope, animate] = useAnimate();
  // formData
  const [selectedItem, setSelectedItem] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [EmailAddress, setEmailAddress] = useState("");

  const NextStep = () => {
    if (currentStep == lastStep) {
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };
  const BackSetp = () => {
    if (currentStep == 1) {
      return;
    }
    setCurrentStep((prev) => prev - 1);
  };
  const checkStages = () => {
    if (currentStep == 1) {
      if (!selectedItem?.length) {
        toast.error("Please Select 1 Interest", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        return;
      }
      NextStep();
      return;
    }
    if (currentStep == 2) {
      if (!firstName?.length) {
        toast.error("Please Enter Your First Name", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        return;
      }
      NextStep();
      return;
    }
    if (currentStep == 3) {
      if (!LastName?.length) {
        toast.error("Please Enter Your Last Name", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        return;
      }
      NextStep();
      return;
    }
    if (currentStep == 6) {
      if (!EmailAddress?.length) {
        toast.error("Please Enter Your University Email", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        return;
      }
      NextStep();
      toast.success("OTP Sent to your Email Address", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }
    NextStep();
  };

  useEffect(() => {
    if (scope?.current) {
      animate(scope?.current, { width: `${width}%` }, { duration: 0.3 });
    }
  }, [currentStep]);
  return (
    <div id="StudentRegister127">
      <motion.div
        ref={scope}
        className="ProgressBarForm"
        style={{
          width: `${width}%`,
        }}
      ></motion.div>
      <div
        className="wrapper"
        style={{
          backgroundImage: currentStep == 7 ? `url(${bg2})` : `url(${bg1})`,
        }}
      >
        <div className="container">
          <div className="sectionTitle">
            <h3>/varyance</h3>
          </div>
        </div>
        <div className="cntentWrapper">
          <div className="container">
            {/* back button  */}
            <div className="choices_wrapper">
              <div className="action_Btn">
                <div className="backButton" onClick={BackSetp}>
                  <h6>
                    <IoIosArrowBack size={20} /> {"    "}
                    Back
                  </h6>
                </div>
              </div>
              {currentStep == 6 ? (
                <div className="section_title">
                  <h3>/your university e-mail</h3>
                </div>
              ) : null}
            </div>
          </div>
          {/* // form part  */}
          <div className={currentStep == 6 ? "container-fluid" : "container"}>
            <div className="choices_wrapper">
              {currentStep == 1 ? (
                <Step1
                  selectedItem={selectedItem}
                  setSelectedItem={setSelectedItem}
                />
              ) : currentStep == 2 ? (
                <Step2 firstName={firstName} setFirstName={setFirstName} />
              ) : currentStep == 3 ? (
                <Step3
                  firstName={firstName}
                  LastName={LastName}
                  setLastName={setLastName}
                />
              ) : currentStep == 4 ? (
                <Step4 />
              ) : currentStep == 5 ? (
                <Step5 />
              ) : currentStep == 6 ? (
                <>
                  <Step6
                    firstName={firstName}
                    LastName={LastName}
                    setEmailAddress={setEmailAddress}
                  />
                </>
              ) : currentStep == 7 ? (
                <Step7 EmailAddress={EmailAddress} />
              ) : null}
            </div>
          </div>
          <div className="container">
            <div className="choices_wrapper">
              <div className="action_Btn">
                <button className="primary_btn cutsPdn" onClick={checkStages}>
                  Next
                </button>
                <div className="Next_Info">
                  {" "}
                  <div className="EnterIcon">
                    <IoReturnDownBackSharp size={18} />
                  </div>{" "}
                  or Press Enter
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* footer */}
        <div className="container margiTop">
          <div className="footer">
            <div className="left">
              <p>&#169; All right reserve D</p>
            </div>
            <div className="right">
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentRegister;
