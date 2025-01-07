import "./App.css";
import clouds2 from "./images/clouds2.png";
import Header3 from "./components/Header3";
import LandingPage2 from "./components/LandingPage2";
import Review from "./components/Review";
import Connect2 from "./components/Connect2.js";
import EventsForMobile from "./components/EventsForMobile.js";
import AchievementsForMobile from "./components/AchievementsForMobile.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div className="wrapper">
      <img src={clouds2} className="cloud2" alt=""></img>

      <Header3 />

      <div className="Header3x">
        <hr></hr>
      </div>

      <LandingPage2 />

      <EventsForMobile />

      <AchievementsForMobile />

      <Review />

      <Connect2 />

      <Footer />
    </div>
  );
}

export default App;
