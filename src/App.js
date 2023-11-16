import axios from 'axios';
import { useEffect, useState } from 'react';
import Guessblast from './components/Guessblast';
import { Toggle } from './components/Toggle';
import useLocalStorage from 'use-local-storage';


function App() {

  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [sol, setSol] = useState(null);
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);


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
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <Toggle
        isChecked={isDark}
        handleChange={() => setIsDark(!isDark)}
      />
      <h1>GuessBlast</h1>
      {sol && <Guessblast sol={sol} />}
    </div>
  );
}

export default App;
