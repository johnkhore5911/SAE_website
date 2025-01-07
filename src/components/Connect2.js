import React from "react";
import connect1 from "../images/contact1.png";
import { useState } from "react";


function Connect() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendMessage = () => {
    console.log("Form Data:", formData);

    // Reset the form after handling the data
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <div className="Connect1" id="IdConnect">
      <div className="UpperConnect1">
        <div className="ConnectLeft1">
          <img src={connect1} alt="connect1"></img>
        </div>

        <div className="ConnectRight1">
          <div className="Connecttext">CONNECT</div>
          <div className="Connecttext2">Want To Know More?</div>
          <div>
            <form className="ConnectForm">
              <label>
                <input
                  placeholder="Your Name*"
                  className="namefield"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </label>
              <br />
              <label>
                <input
                  placeholder="Your Email*"
                  className="emailfield"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
              <br />
              <label>
                <textarea
                  placeholder="Your Message*"
                  className="messagefield"

                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </label>
              <br />
              <div className="buttonz">
              <button type="button"  onClick={sendMessage}>
                Send Message
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
{/* 
      <div className="LowerConnect1">

        <div className="LowerConnect1x1">
            <div className="imgsz"><img src={logo}></img></div>
            <div className="lowerFollow">Follow</div>
            <div className="lowerFollowIcons">
                <div><CiFacebook /></div>
                <div><TiSocialTwitterCircular /></div>
                <div><TiSocialLinkedinCircular /></div>
                <div><IoLogoInstagram /></div>
            </div>

        </div>


        <div className="LowerConnect1x2">
            <div className="LowerConnect1x2x1">Domains</div>

            <div className="LowerConnect1x2x2">
                <div>Motorsports & Mobility</div>
                <div>Aerospace & Aeronautics</div>
                <div>Business & Finance</div>
                <div>Design</div>
                <div>Publicity & Promotion</div>
            </div>
        </div>


        <div className="LowerConnect1x3">

        <div className="LowerConnect1x3x1">Contact</div>

        <div className="LowerConnect1x3x2">
            <div className="LowerConnect1x3x3">
                <div>Chairperson:</div>
                <div>Arul  (+91 84930 95532)</div>
            </div>

            <div className="LowerConnect1x3x3">
                <div>Vice-Chair:</div>
                <div>Gyandeep (+91 92642 78384)</div>
            </div>
        </div>


        </div>


        <div className="LowerConnect1x4">
            <div>Our E-Mail</div>
            <div>uietpusae@gmail.com</div>

        </div>



      </div> */}
    </div>
  );
}

export default Connect;
