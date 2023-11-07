import axios from 'axios';
import { useEffect, useState } from 'react';
import Guessblast from './components/Guessblast';



function App() {

  const [sol, setSol] = useState(null);


  useEffect(() => {

    axios.get('http://localhost:5000/sols')
      .then((response) => {
        const randomSol = response.data[Math.floor(Math.random()*response.data.length)]
        setSol(randomSol.word)
      })
      .catch((error) => {
          console.error("Error in getting the data",error);
      })
  }, [setSol])


  return (
    <div className="App">
      <h1>GuessBlast</h1>
      {sol && <Guessblast sol={sol} />}
    </div>
  );
}

export default App;
