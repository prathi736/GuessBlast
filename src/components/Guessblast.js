import React, { useEffect, useState } from 'react'
import useGuessblast from '../hooks/useGuessblast'
import Grid from './Grid';
import Keypad from './Keypad';
import Modal from './Modal';

export default function Guessblast({ sol }) {

    const { currentGuess, handleKeyup, guess, isCorrect, turn, usedKeys } = useGuessblast(sol);
    const [showModal, setShowModal] = useState(false);
    
    


    useEffect(() => {

        window.addEventListener('keyup', handleKeyup)

        if (isCorrect) {
            setTimeout(() => setShowModal(true), 800)
            console.log('congrats, you win');
            window.removeEventListener('keyup', handleKeyup)
        }

        if (turn > 5) {
            setTimeout(() => setShowModal(true), 800)
            console.log('oops all turns are complete');
            window.removeEventListener('keyup', handleKeyup)
        }

        return () => {
            window.removeEventListener('keyup', handleKeyup)
        }
    }, [handleKeyup, isCorrect, turn])

    return (
        <div>
            <div>currentguess - {currentGuess}</div>
            <div>Solution - {sol}</div>
            <Grid currentGuess={currentGuess} guess={guess} turn={turn} />
            <Keypad usedKeys={usedKeys} />
            {showModal && <Modal isCorrect={isCorrect} turn={turn} sol={sol} />}
        </div>
    )
}
