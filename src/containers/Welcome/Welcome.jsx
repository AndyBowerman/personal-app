import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import "./Welcome.scss";

const Welcome = () => {
    const [time, setTime] = useState("0")
    const [message, setMessage] = useState("Good Morning!");
  
    const getTime = (() => {
    const today = new Date();
    setTime(today.getHours());
  });

  const declareMessage = () => {
    if(time >= 0 && time < 4) {
        setMessage("Good Night")
    } else if(time >= 4 && time < 12) {
        setMessage("Good Morning")
    } else if(time >= 12 && time < 17) {
        setMessage("Good Afternoon")
    } else if(time >= 17 && time <= 23) {
        setMessage("Good Evening")
    }
  }

  useEffect(() => {
    getTime();
    declareMessage();
  });

  return (
    <div className="welcome">
      <Header text={message} />
    </div>
  );
};

export default Welcome;
