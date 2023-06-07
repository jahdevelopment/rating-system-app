import { FaStar } from "react-icons/fa";


function Star({filled, onClick}) {
  return (
    <>
      <FaStar 
        size={50}
        className={`star-${filled ? 'filled' : 'noFilled'}`}
        onClick={onClick}
      />
    </>
  );
}

export default Star;
