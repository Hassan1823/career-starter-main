import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { MdDiamond } from "react-icons/md";
import logo1 from "../../../../assets/images/icons/airplane.png";
import logo2 from "../../../../assets/images/icons/compliant.png";
import logo3 from "../../../../assets/images/icons/diamond.png";
import logo4 from "../../../../assets/images/icons/fashion.png";
import logo5 from "../../../../assets/images/icons/growth.png";
import logo6 from "../../../../assets/images/icons/money.png";
import logo7 from "../../../../assets/images/icons/worldwide.png";
import { motion } from "framer-motion";
import "./style.scss";
function Step1({ selectedItem, setSelectedItem }) {
  let Interestitems = [
    { id: "1", icon: logo3, text: "Brand Management", select: false },
    { id: "2", icon: logo6, text: "Finance", select: false },
    { id: "3", icon: logo1, text: "Consulting", select: false },
    { id: "4", icon: logo5, text: "Economics", select: false },
    { id: "5", icon: logo2, text: "Law", select: false },
    { id: "6", icon: logo4, text: "Fashion", select: false },
    { id: "7", icon: logo7, text: "Emerging Markets", select: false },
    { id: "8", icon: logo6, text: "Finance", select: false },
    { id: "9", icon: logo1, text: "Consulting", select: false },
    { id: "10", icon: logo5, text: "Economics", select: false },
    { id: "11", icon: logo2, text: "Law", select: false },
    { id: "12", icon: logo6, text: "Finance", select: false },
    { id: "13", icon: logo1, text: "Consulting", select: false },
    { id: "14", icon: logo5, text: "Economics", select: false },
    { id: "15", icon: logo3, text: "Brand Management", select: false },
    { id: "16", icon: logo5, text: "Economics", select: false },
    { id: "17", icon: logo2, text: "Law", select: false },
  ];
  const [InterestItemsList, setInterestItem] = useState([...Interestitems]);

  function selectItem(itemId, i) {
    let UpdatedItem = [...InterestItemsList];

    if (UpdatedItem[i]?.select == true) {
      UpdatedItem[i].select = false;
      let newIdList = [...selectedItem];
      newIdList?.splice(i, 1);
      setSelectedItem(newIdList);
    } else {
      UpdatedItem[i].select = true;
      setSelectedItem((prev) => [...prev, itemId]);
    }
    setInterestItem([...UpdatedItem]);
  }
  return (
    <motion.div
      id="Step1Ki3"
      initial={{ opacity: 0.2, scale: 0.2, x: "50%" }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="stepWrapper">
        {/* <div className="backButton">
          <h6>
            <IoIosArrowBack /> {"    "}
            Back
          </h6>
        </div> */}
        <div className="section_title">
          <h3>/what are you interested in?</h3>
        </div>
        <div className="interest_wrapper">
          <div className="interest_container">
            {InterestItemsList?.map((item, i) => (
              <motion.div
                className={`interest_Item ${item.select ? "active" : ""}`}
                onClick={() => selectItem(item.id, i)}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={item?.icon}
                  alt={item?.text}
                  className="interest_icon"
                />
                <p className="Interest_text">{item?.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Step1;
