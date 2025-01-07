import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import pic1 from "../images/eventPic1.png";
import pic2 from "../images/eventPic2.png";
import pic3 from "../images/eventPic3.png";
import pic4 from "../images/eventPic4.png";
import pic5 from "../images/eventPic5.png";
import pic6 from "../images/eventPic6.png";

const EventsForMobile = () => {

    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed:3000,
      arrows: false,
      };

  return (

    <div className='Reviews review' id='IdEvents'>
      <div className="event122">
        <div className="achievement122">EVENTS</div>
          <div className="event222 ">Checkout our Past Events</div>
        </div>

        <div className="ReviewSection">
        <div className="ReviewSectionContainer">
            <Slider {...settings} >
              {
                data.map((d)=>(
                  <div key={d.name} className="eventContainer">
                    <div className='flexType'>
                        <div className="right">
                          <img src={d.pic} alt="" className=""/>
                        </div>

                        <div className='styleContent'>
                          {d.review}
                        </div>
                    </div>
                  </div>

                ))
              }
            </Slider>


        </div>

        </div>

    </div>
  )
}

export default EventsForMobile;



const data= [
    {
      name: `Richard S. Brooks`,
      review:  `"UIET's Team Strombreaker impressed at the Formula Style Racing Event-FFS 2018, securing a commendable 13th place overall amid fierce competition, showcasing their grit and determination."`,
      pic:`${pic1}`
      
    },
    {
      name: `Gars G. Bernhardt`,
      review:  `"UIET’s Team Sabertooth tackled MegaATV Championship 2017, showcasing mettle against skilled competitors and proudly representing innovative engineering minds on the national stage."`,
      pic:`${pic2}`

    },
    {
      name: `Richard S. Brooks`,
      review:  `"UIET’s SAE Team, sharp engineering minds, triumphed in BAJA 2014, winning the Cost Report. A turning point in UIET's history, inspiring future teams with efficiency and innovation."`,
      pic:`${pic3}`

    },
    {
      name: `Gars G. Bernhardt`,
      review:  `"UIET’s Immortus Racing, sharp and dedicated gearheads, roared into the 2019 All India Karting Championship, pushing limits and testing skills and grit against the nation's best."`,
      pic:`${pic4}`
    },
    {
      name: `Richard S. Brooks`,
      review:  `"In 2020, UIET’s SAE team made history at the National E-Karting Championship, conquering the Virtual Round and excelling in Design Report, leaving competitors in the dust."`,
      pic:`${pic5}`

    },
    {
      name: `Gars G. Bernhardt`,
      review:  `"B-Ron Motorsports, UIET's elite minds, triumphed at the 2020 National E-Karting Championship, winning the Endurance Race and securing the Overall Championship title."`,
      pic:`${pic6}`
    },

    
  ]
  