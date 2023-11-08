import React, { useEffect } from 'react'
import useGuessblast from '../hooks/useGuessblast'
import Grid from './Grid';

export default function Guessblast({ sol }) {

    const { currentGuess, handleKeyup, guess, isCorrect, turn } = useGuessblast(sol);


    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)

        return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup])

    useEffect(() => {
        console.log(guess, isCorrect, turn);
    }, [guess, isCorrect, turn])
    

    return (
        <div>
            <div>currentguess - {currentGuess}</div>
            <div>Solution - {sol}</div>
            <Grid currGuess={currentGuess} guess={guess} turn={turn} />
        </div>
    )
}
