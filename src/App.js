import { useState } from 'react';
import './style/index.css';
import StarRating from './components/StarRating';

function App() {

  const[rating, setRating] = useState(0);

  return (
    <div className="App">
      <StarRating 
        rating={rating}
        setRating={setRating}
      />
    </div>
  );
}

export default App;

