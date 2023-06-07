import { useState } from 'react';
import './style/index.css';
import StarRating from './components/StarRating';
//import Star from './components/Star';
import Dialog from './components/Dialog';

function App() {

  const[rating, setRating] = useState(0);

  return (
    <div className="App">
      <StarRating 
        rating={rating}
        setRating={setRating}
      />
      <Dialog />
    </div>
  );
}

export default App;

