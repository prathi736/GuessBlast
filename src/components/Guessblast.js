import React, { useEffect } from 'react'
import useGuessblast from '../hooks/useGuessblast'
import Grid from './Grid';
import Keypad from './Keypad';

export default function Guessblast({ sol }) {

    const { currentGuess, handleKeyup, guess, isCorrect, turn, usedKeys } = useGuessblast(sol);


    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)

        if (isCorrect) {
            console.log('congrats, you win');
            window.removeEventListener('keyup', handleKeyup)
        }

        if (turn > 5) {
            console.log('oops all turns are complete');
            window.removeEventListener('keyup', handleKeyup)
        }

        return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup, isCorrect, turn])

    return (
        <div>
            <div>currentguess - {currentGuess}</div>
            <div>Solution - {sol}</div>
            <Grid currentGuess={currentGuess} guess={guess} turn={turn} />
            <Keypad usedKeys={usedKeys} />
        </div>
    )
}
