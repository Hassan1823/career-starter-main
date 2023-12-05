import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import "./styles.scss";
const Example = () => {
  return (
    <>
    <div className="main-container">
      <HorizontalScrollCarousel />
    </div>

    {/* extra component */}
    <div className="extra-comp">
      Third Section
    </div>

    </>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-10%"]);

  return (
    <section ref={targetRef} className="hor-scroll">
      <div className="hor-scroll-con">
      <h1 className="scroll-heading">
        Unlock the full potential of <br />
        your <b>future network</b>
      </h1>
        <motion.div style={{ x }} className="motion-div">
          <img src="./rs1.jpg" alt="pic" className="scroll-img" />

          <img src="./rs2.jpg" alt="pic" className="scroll-img" />

          <img src="./rs3.jpg" alt="pic" className="scroll-img" />
          <div className="image-div">
            <img src="./ss1.jpg" alt="pic" className="image-div1" />
            <img src="./ss2.jpg" alt="pic" className="image-div2"/>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Example;
