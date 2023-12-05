import React from "react";
// import { Button } from "react-bootstrap";
import Banner from "../../components/Banner";
import ScrollBar from "../../components/ScrollBar";
function Home() {
  return (
    <>
      <section className="snap-section">
        <Banner />
      </section>
      <section>
        <ScrollBar />
      </section>
    </>
  );
}

export default Home;
