import { useState } from 'react';


const useGuessblast = (sol) => {


    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guess, setGuess] = useState([...Array(6)]) // each guess is an array
    const [history, setHistory] = useState([]) // each guess is a string
    const [isCorrect, setIsCorrect] = useState(false)




    // format a guess into a array of letter objects
    // e.g. [{ key: 'a', color: 'red' }]
    const formatGuess = () => {
        let solArray = [...sol]
        let formattedGuess = [...currentGuess].map((l) => {
            return {key: l, color: 'red'}
        })

        // find green letters
        formattedGuess.forEach((l,i) => {
            if (solArray[i] === l.key) {
                formattedGuess[i].color = 'green'
                solArray[i] = null
            }
        })


        // find yellow letters
        formattedGuess.forEach((l,i) => {
            if (solArray.includes(l.key ) && l.color !== 'green') {
                formattedGuess[i].color = 'yellow'
                solArray[solArray.indexOf(l.key)] = null
            }
        })

        return formattedGuess
    }


    // add a new guess to the guesses state
    // update the isCorrect state if the guess is correct
    // add one to the turn state
    const addNewGuess = (formattedGuess) => {
        if (currentGuess === sol) {
            setIsCorrect(true)
        }
        setGuess((prevGuess) => {
            let newGuess = [...prevGuess]
            newGuess[turn] = formattedGuess
            return newGuess
        })


        setHistory((prevHistory) => {
            return [...prevHistory, currentGuess]
        })
        setTurn((prevTurn) => {
            return prevTurn + 1
        })

        setCurrentGuess('')
    }



    // handle keyup event and track current guess
    // if user press enter, add new guess
    const handleKeyup = ({ key }) => {

        if (key === 'Enter') {
            // only add guess if turn is less than 5
            if (turn > 5) {
                console.log('you used all your guesses!')
                return
            }
            // do not allow duplicate words
            if (history.includes(currentGuess)) {
                console.log('you already tried that word.')
                return
            }
            // check word is 5 chars
            if (currentGuess.length !== 5) {
                console.log('word must be 5 chars.')
                return
            }
            const formatted = formatGuess()
            addNewGuess(formatted)

            // setHistory((prevHistory) => [...prevHistory, currentGuess]);

            // setTurn((prevTurn) => prevTurn + 1);
        }

        if (key === 'Backspace') {
            setCurrentGuess((prev) => {
                return prev.slice(0, -1)
            })
            return
        }

        if (/^[A-Za-z]$/.test(key)) {
            if (currentGuess.length < 5) {
                setCurrentGuess((prev) => {
                    return prev + key
                })
            }
        }
    }

    return { turn, currentGuess, guess, isCorrect, handleKeyup }
}

export default useGuessblast;