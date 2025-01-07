import React from "react";
import car from "../images/car 1.png";
import cloud1 from '../images/clouds1.png';
import gifdrone from "../images/gif.png"


function LandingPage2() {
  return (
    <div className="LandingPage2">
      <img src={cloud1} className='cloud3' alt="cloud3"></img>
        <div className="containCarDrone">
            <div className="containCarDroneLeft">
                
                <div className="containCarDronetext1">
                    <div className="containCarDronetext1Style">
                    Society of
                    </div>
                    <div className="carx1">
                        <div><img src={car} alt="car"></img></div>
                    </div>
                </div>
                <div className="containCarDronetext2">

                automotive Engineers
                </div>
                <div className="containCarDronetext3">
                SAE is the community of Automotive Engineers striving for new discoveries in automotive industry
                </div>


            </div>

            <div className="containCarDroneRight">
                <div className="Hiddeni">i</div>
            <img className='dronex1' alt="drone" src={gifdrone}></img>

                
            </div>

        </div>

        <div className="heigh">
            <div className="pos">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#000A1F"
                  fill-opacity="1"
                  d="M0,32L34.3,42.7C68.6,53,137,75,206,112C274.3,149,343,203,411,192C480,181,549,107,617,90.7C685.7,75,754,117,823,149.3C891.4,181,960,203,1029,197.3C1097.1,192,1166,160,1234,144C1302.9,128,1371,128,1406,128L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
                ></path>
                </svg>
            </div>

            <div className="LandingbottmContent">

                <div className="LandingBottmLeft">
                Members In 98+ Countries & more than
                127,000 Engineers

                </div>

                <div className="LandingBottmRight">
                SAE International is a global association of more than 127,000 engineers and related technical experts in the automotive, aerospace and commercial-vehicle industries with members in more than 98 countries throughout the world.
                </div>

            </div>
        </div>
    </div>
  );
}

export default LandingPage2;
