import axios from 'axios';
import { useEffect, useState } from 'react';



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
      {sol && <div>Solution: {sol} </div>}
    </div>
  );
}

export default App;
