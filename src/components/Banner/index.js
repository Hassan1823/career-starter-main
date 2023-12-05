import React, { useState } from "react";
import GroupCard from "../../assets/images/Group.png";
import { FaRegCircleQuestion } from "react-icons/fa6";
import logo1 from "../../assets/images/1.jpg";
import logo2 from "../../assets/images/2.png";
import logo3 from "../../assets/images/3.png";
import logo4 from "../../assets/images/4.png";
import avatar1 from "../../assets/images/avatar/man.png";
import avatar2 from "../../assets/images/avatar/profile.png";
import avatar3 from "../../assets/images/avatar/woman (1).png";
import avatar4 from "../../assets/images/avatar/woman.png";
import germany from "../../assets/images/flags/flagGermany.png";
import uk from "../../assets/images/flags/uk.png";
import frnc from "../../assets/images/flags/france.png";
import italy from "../../assets/images/flags/italy.png";
import tree from "../../assets/images/flags/coconut-tree.png";
import globe from "../../assets/images/flags/planet-earth.png";
import portogal from "../../assets/images/flags/portogal.jpg";
import spain from "../../assets/images/flags/span.png";
import "./styles.scss";
function Banner() {
  const [selectedLogo, setSelectedLogo] = useState(logo1);
  return (
    <div className="HomeBannerSection">
      <div className="banner_wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="gropu1Sectin">
                <div className="group_wrapper">
                  <div className="title">
                    <h2>Join /varyance and fast-track your career start</h2>
                    <p className="mt-1">
                      Solve real-world challenges designed by investment banks,
                      law firms, consulting firms and industry leaders across
                      the globe.
                    </p>
                  </div>
                  <div className="searchInput">
                    <p>Find your university</p>
                    <div className="searchContainer">
                      <div className="wrapper">
                        <img src={selectedLogo} alt="" />
                        <select
                          name="dropdown"
                          id="UniDrop"
                          onChange={(e) => setSelectedLogo(e.target.value)}
                        >
                          <option value="logo1">
                            EBS University for Business and Law
                          </option>
                          <option value={logo2}>
                            Johns Hopkins University
                          </option>
                          <option value={logo2}>
                            University of Pennsylvania
                          </option>
                          <option value={logo4}>DHA Suffa University</option>
                        </select>
                        <label htmlFor="dropdown"></label>
                      </div>
                      <div className="imgGroup">
                        <img src={avatar1} alt="" />
                        <img src={avatar2} alt="" />
                        <img src={avatar3} alt="" />
                        <img src={avatar4} alt="" />
                      </div>
                    </div>
                  </div>

                  <div className="quick_links">
                    <h4>Quicklinks: Location Selection </h4>
                    <div className="LocationsContainer">
                      <div className="locations">
                        <img src={frnc} alt="" />
                        <p>France</p>
                      </div>
                      <div className="locations">
                        <img src={uk} alt="" />
                        <p>United Kingdom</p>
                      </div>
                      <div className="locations">
                        <img src={germany} alt="" />
                        <p>Germany</p>
                      </div>
                      <div className="locations">
                        <img src={uk} alt="" />
                        <p>United Kingdom</p>
                      </div>
                      <div className="locations">
                        <img src={italy} alt="" />
                        <p>Italy</p>
                      </div>
                      <div className="locations">
                        <img src={portogal} alt="" />
                        <p>Portugal</p>
                      </div>
                      <div className="locations">
                        <img src={spain} alt="" />
                        <p>Spain</p>
                      </div>
                      <div className="locations">
                        <img src={globe} alt="" />
                        <p>APAC</p>
                      </div>
                      <div className="locations">
                        <img src={tree} alt="" />
                        <p>MENA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 p-0">
              <div className="Group_wrapper">
                <div className="groupImg">
                  <img src={GroupCard} className="img-fluid" />
                </div>
                <div className="titles">
                  <div className="title_item">
                    <h3>Explore Challenges</h3>
                    <p>
                      Solve real-world challenges designed by investment banks,
                      law firms, consulting firms and industry leaders across
                      the globe. <FaRegCircleQuestion size={18} />
                    </p>
                  </div>
                  <div className="title_item titleItem2">
                    <h3>Attend Events</h3>
                  </div>
                  <div className="title_item titleItem3">
                    <div className="glassEffect"></div>
                    <h3>Build your Network</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
