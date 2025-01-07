import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import coma2 from "../images/span.icon.png";
import chatIcon from "../images/icon-chat.png";

import imgx1 from "../images/gadgets/gear_futu 1.png";
import imgx2 from "../images/gadgets/graphic_drone 1.png";
import imgx3 from "../images/gadgets/robot_nobg 1.png";
import imgx4 from "../images/gadgets/microcontroller 1.png";

import { useState, useEffect } from "react";
const Review = () => {
  const [slidesToShow, setSlidesToShow] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(2);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  return (
    <div className="Reviews reviewsx1 reviewsx2">
      <div className="event122 marginbottom">
        <div className="event222 marginbottom">A WORD FROM OUR ALUMNI</div>
      </div>
      <div className="ReviewSection">
        <div className="ReviewSectionContainer">
          <Slider {...settings}>
            {data.map((d) => (
              <div key={d.name} className="ReviewSectionContainerx1">
                <div className="">
                  <div className="">
                    <div>
                      <img src={coma2} className="" alt="coma"></img>
                    </div>
                    <div>
                      <p className="ReviewSectionContainerx2">{d.review}</p>
                    </div>
                    <div className="opa">
                      {" "}
                      <hr></hr>
                    </div>
                    <div className="namepic">
                      <div className="namex1">{d.name}</div>
                      <div className="namex2">
                        <img src={chatIcon} className="" alt="chatIcon"></img>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <img src={d.img} alt="" className="" />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="absoluteImages">
        <div className="absoluteImagesx1">
          <img src={imgx1} alt="imgx1"></img>
        </div>
        <div className="absoluteImagesx2">
          <img src={imgx2} alt="imgx1"></img>
        </div>
        <div className="absoluteImagesx3">
          <img src={imgx3} alt="imgx1"></img>
        </div>
        <div className="absoluteImagesx4">
          <img src={imgx4} alt="imgx1"></img>
        </div>
      </div>
    </div>
  );
};

export default Review;

const data = [
  {
    name: `Ketan G. Kain`,
    review: `"SAE Club is great! Projects, mentors, friends—helped lots. Best club for skills, fun projects, and friends!"`,
  },
  {
    name: `Arul G. Bernhardt`,
    review: `"SAE Club changed the game. Real projects, real skills, and fun! A fantastic journey with friends"`,
  },
  {
    name: `Akshit S. Brooks`,
    review: `"My launchpad to success! From projects to a supportive network, it's the place to learn, grow, and thrive."`,
  },
  {
    name: `Gars G. Bernhardt`,
    review: `"Ignite passion, build connections, launch careers. A world of endless possibilities awaits you"`,
  },
];
