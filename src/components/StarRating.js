import { useState } from "react";
import Star from "./Star";

function StarRating({rating, setRating}) {

  const [message, setMessage]= useState('Set your experience');

  const handleMessage = (ratingValue) => {
    switch(ratingValue) {
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

  const stars = [...Array(5)];

  return (
    <>
      <header className="App-header">
        <label>
        {stars.map((_,index) => {
        const ratingValue = index + 1;
        return(
          <Star 
            key={index}
            filled={ratingValue <= rating}
            onClick={()=> {
              setRating(ratingValue);
              handleMessage(ratingValue);
            }}
          />
        );
      })}
        </label>
        <p>{message}</p>
      </header>
    </>
  );
}

export default StarRating;
