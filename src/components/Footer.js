import React from "react";
import logo from "../images/logoSAE.png";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin  } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="LowerConnect1">
          
          <div className="LowerConnect1x1">
            <div className="imgsz">
              <img  src={logo} alt="logo"></img>
            </div>
            <div className="lowerFollow style" >Follow</div>
            <div className="lowerFollowIcons">
              <div>
                <a href="https://www.instagram.com/sae.uiet.pu/" rel="noreferrer" target="_blank"><IoLogoInstagram /></a>
              </div>
              <div>
              <a href="https://in.linkedin.com/company/sae-uiet-pu" rel="noreferrer" target="_blank"><FaLinkedin /></a>
              </div>
              <div>
                {/* <TiSocialLinkedinCircular /> */}
              </div>
              <div>
                {/* <IoLogoInstagram /> */}
              </div>
            </div>
          </div>

          <div className="LowerConnect1x2">
            <div className="LowerConnect1x2x1">Domains</div>

            <div className="LowerConnect1x2x2">
              <div className="style">Motorsports & Mobility</div>
              <div className="style">Aerospace & Aeronautics</div>
              <div className="style">Business & Finance</div>
              <div className="style">Design</div>
              <div className="style">Publicity & Promotion</div>
            </div>
          </div>

          <div className="LowerConnect1x3">
            <div className="LowerConnect1x3x1">Contact</div>

            <div className="LowerConnect1x3x2">
              <div className="LowerConnect1x3x3">
                <div className="style">Chairperson:</div>
                {/* <div>Arul (+91 84930 95532)</div> */}
                <a href="tel:+91 84930 95532">Arul (+91 84930 95532)</a>
              </div>

              <div className="LowerConnect1x3x3">
                <div className="style">Vice-Chair:</div>
                <a href="tel:+91 92642 78384">Gyandeep (+91 92642 78384)</a>
              </div>
            </div>
          </div>

          <div className="LowerConnect1x4">
            <div >Our E-Mail</div>
            <a href="mailto:uietpusae@gmail.com"> <div className="style">uietpusae@gmail.com</div> </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
