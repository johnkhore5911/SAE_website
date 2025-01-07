import React from "react";
// import logo from "../images/logoSAE.png";
import logo from "../images/newlogo.png";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
function Header3() {
  return (
    <div className="Header3"  id="IdHome">
      <nav>
        <input type="checkbox" id="check"></input>
        <label for="check">
          <i><FaBars className="fas fas-bars" id="btn"/></i>
          <i><ImCross className="fas fas-times" id="cancel" /></i>
        </label>


        <img className="logosx1"  alt="logo" src={logo}></img>
        <ul className="headerItems3">
          <li>
            <a href="#IdHome">Home</a>
          </li>
          <li>
            <a href="#IdEvents">EVENTS</a>
          </li>
          <li>
            <a href="#IdAchievements">Achievements</a>
          </li>
          <li>
            <a href="#IdConnect">Contact</a>
          </li>

        </ul>
        
      </nav>

    </div>
  );
}

export default Header3;
