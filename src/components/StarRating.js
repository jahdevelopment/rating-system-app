import { useState } from "react";
import Star from "./Star";
import Dialog from "./Dialog";
import logo192 from "../images/logo192.png";
import "../style/index.css";

function StarRating({ rating, setRating }) {

  const [message, setMessage] = useState("Rate your experience");

  const [showLabel, setShowLabel] = useState(true);

  const [showDialog, setShowDialog] = useState(false);

  const handleMessage = (ratingValue) => {
    switch (ratingValue) {
      case 1:
        setMessage("Bad");
        break;
      case 2:
        setMessage("Regular");
        break;
      case 3:
        setMessage("Good");
        break;
      case 4:
        setMessage("Very Good");
        break;
      case 5:
        setMessage("Awesome");
        break;
      default:
        setMessage("Rate your experience");
        break;
    }
  };

  const handleToggleDialog = () => {
    setShowDialog(!showDialog);
    setShowLabel(!showLabel);
    if (!showDialog) {
      setRating(0);
      setMessage("Set your experience");
    }
  };

  const stars = [...Array(5)];

  return (
    <>
      <div className="App-main">
        {showLabel && (
          <label>
            {stars.map((_, index) => {
              const ratingValue = index + 1;
              return (
                <Star
                  key={index}
                  filled={ratingValue <= rating}
                  onClick={() => {
                    setRating(ratingValue);
                    handleMessage(ratingValue);
                  }}
                />
              );
            })}
            <p>{message}</p>
          </label>
        )}
        {showDialog && (
          <div className="dialog-box">
            <img src={logo192} alt="React logo"></img>
            <p>Thank you for your Rate!</p>
          </div>
        )}
      </div>
      <div className="button-section">
          <Dialog showDialog={showDialog} onClick={handleToggleDialog} />
        </div>
    </>
  );
}

export default StarRating;
