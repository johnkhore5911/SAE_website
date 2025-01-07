import React from 'react'
import AchievementPic1 from '../images/achievement1.png'
import AchievementPic2 from '../images/achievement2.png'
import AchievementPic3 from '../images/achievement3.png'
import AchievementPic4 from '../images/achievement4.png'
import AchievementPic5 from '../images/achievement5.png'
import AchievementPic6 from '../images/achievement6.png'

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState,useEffect } from 'react'



function AchievementsForMobile() {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      // Update slidesToShow based on window width
      if (window.innerWidth <= 600) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(3);
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial setup
    handleResize();

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:3000,
    arrows: false,
    };

  return (
    <div className='Achievements' id='IdAchievements'>

        <div className="event122 eventx1">
            <div className="achievement122 achievement12">ACHIEVEMENTS</div>
            <div className="event222">Let’s See Our Achievements</div>
        </div>

        <div className='achievement32'>
            
            <div><img src={AchievementPic1} alt='AchievementPic1' ></img></div>
            <div className='divx1'><img src={AchievementPic2} alt='AchievementPic2'></img></div>
            <div><img src={AchievementPic3} alt='AchievementPic3'></img></div>

        </div>

        <Slider {...settings} >
              {
                data.map((d)=>(
                  <div key={d.name} className="boxContainer">
                    <div className=''>
                        <div className="boxcont">

                          <img src={d.pic} alt="" className="picbox"/>
                          <div className='titlebox'>{d.title}</div>
                          <div className='descbox'>{d.desc}</div>
          
                        </div>
                    </div>
                  </div>

                ))
              }
            </Slider>

    </div>
  )
}

export default AchievementsForMobile;

const data= [
  {
    title: `13th position`,
    desc:  `"FFS 2019"`,
    pic:`${AchievementPic5}`
  },
  {
    title: `1st position`,
    desc:  `"National Electric cart championship 2020"`,
    pic:`${AchievementPic4}` 
  },
  {
    title: `Cost Winner`,
    desc:  `"BAJAJ 2014"`,
    pic:`${AchievementPic6}`
  },
  
]
