import { useState } from 'react';


const useGuessblast = (sol) => {


    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guess, setGuess] = useState([]) // each guess is an array
    const [history, setHistory] = useState([]) // each guess is a string
    const [isCorrect, setIsCorrect] = useState(false)




    // format a guess into a array of letter objects
    // e.g. [{ key: 'a', color: 'red' }]
    const formatGuess = () => {

    }


    // add a new guess to the guesses state
    // update the isCorrect state if the guess is correct
    // add one to the turn state
    const addNewGuess = () => {

    }



    // handle keyup event and track current guess
    // if user press enter, add new guess
    const handleKeyup = () => {

    }

    return{turn, currentGuess, guess, isCorrect, handleKeyup}
}

export default useGuessblast;