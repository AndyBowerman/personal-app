import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import "./Welcome.scss";
import morning from "../../assets/morning.svg";
import afternoon from "../../assets/afternoon.svg";
import evening from "../../assets/evening.svg";
import night from "../../assets/night.svg";

const Welcome = () => {
    const [time, setTime] = useState("0")
    const [message, setMessage] = useState("Good Morning!");
    const [icon, setIcon] = useState(morning);
  
    const getTime = (() => {
    const today = new Date();
    setTime(today.getHours());
  });

  const declareMessage = () => {
    if(time >= 0 && time < 4) {
        setMessage("Good Night")
        setIcon(night)
    } else if(time >= 4 && time < 12) {
        setMessage("Good Morning")
        setIcon(morning)
    } else if(time >= 12 && time < 17) {
        setMessage("Good Afternoon")
        setIcon(afternoon)
    } else if(time >= 17 && time <= 23) {
        setMessage("Good Evening")
        setIcon(evening)
    }
  }

  useEffect(() => {
    getTime();
    declareMessage();
  });

  return (
    <div className="welcome">
      <img className="welcome__icon" src={icon} alt="icon" />
      <Header text={message} />
    </div>
  );
};

export default Welcome;
