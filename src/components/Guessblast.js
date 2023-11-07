import React, { useEffect } from 'react'
import useGuessblast from '../hooks/useGuessblast'

export default function Guessblast({ sol }) {

    const { currentGuess, handleKeyup} = useGuessblast(sol);


    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)

        return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup])
    

    return (
        <div>currentguess - {currentGuess}</div>
    )
}
